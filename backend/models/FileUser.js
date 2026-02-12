const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

// JSON file path for storing users
const USERS_FILE = path.join(__dirname, '..', 'data', 'users.json');

// Ensure data directory and file exist
const ensureFile = () => {
    const dir = path.dirname(USERS_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
    }
};

// Read all users from JSON
const readUsers = () => {
    ensureFile();
    const data = fs.readFileSync(USERS_FILE, 'utf-8');
    return JSON.parse(data);
};

// Write users to JSON
const writeUsers = (users) => {
    ensureFile();
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Generate a simple unique ID
const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 10);
};

class FileUser {
    constructor(data) {
        this._id = data._id || generateId();
        this.username = data.username;
        this.email = data.email?.toLowerCase();
        this.password = data.password || null;
        this.avatar = data.avatar || '';
        this.role = data.role || 'warrior';
        this.googleId = data.googleId || null;
        this.authProvider = data.authProvider || 'local';
        this.fortsVisited = data.fortsVisited || [];
        this.createdAt = data.createdAt || new Date().toISOString();
    }

    async comparePassword(candidatePassword) {
        if (!this.password) return false;
        return await bcrypt.compare(candidatePassword, this.password);
    }

    toJSON() {
        const obj = { ...this };
        delete obj.password;
        return obj;
    }

    async save() {
        const users = readUsers();
        const index = users.findIndex(u => u._id === this._id);
        
        // Hash password if it was modified and exists
        if (this._passwordModified && this.password) {
            const salt = await bcrypt.genSalt(12);
            this.password = await bcrypt.hash(this.password, salt);
            this._passwordModified = false;
        }

        const userData = {
            _id: this._id,
            username: this.username,
            email: this.email,
            password: this.password,
            avatar: this.avatar,
            role: this.role,
            googleId: this.googleId,
            authProvider: this.authProvider,
            fortsVisited: this.fortsVisited,
            createdAt: this.createdAt
        };

        if (index >= 0) {
            users[index] = userData;
        } else {
            users.push(userData);
        }

        writeUsers(users);
        return this;
    }

    static async findOne(query) {
        const users = readUsers();
        
        if (query.$or) {
            // Handle $or queries
            return users.map(u => new FileUser(u)).find(user => 
                query.$or.some(condition => {
                    return Object.entries(condition).every(([key, value]) => user[key] === value);
                })
            ) || null;
        }

        // Handle simple queries
        const match = users.find(u => {
            return Object.entries(query).every(([key, value]) => {
                if (key === 'email') return u[key]?.toLowerCase() === value?.toLowerCase();
                return u[key] === value;
            });
        });

        return match ? new FileUser(match) : null;
    }

    static findById(id) {
        // Return a query-like object that supports .select() chaining like Mongoose
        const query = {
            _id: id,
            _excludeFields: [],
            select(fields) {
                if (typeof fields === 'string') {
                    fields.split(' ').forEach(f => {
                        if (f.startsWith('-')) {
                            this._excludeFields.push(f.substring(1));
                        }
                    });
                }
                return this;
            },
            then(resolve, reject) {
                try {
                    const users = readUsers();
                    const match = users.find(u => u._id === id);
                    if (!match) return resolve(null);
                    const user = new FileUser(match);
                    // Remove excluded fields
                    this._excludeFields.forEach(field => {
                        delete user[field];
                    });
                    resolve(user);
                } catch (err) {
                    reject(err);
                }
            }
        };
        return query;
    }

    static async create(data) {
        // Hash password before storing
        if (data.password) {
            const salt = await bcrypt.genSalt(12);
            data.password = await bcrypt.hash(data.password, salt);
        }

        const user = new FileUser(data);
        const users = readUsers();

        // Check for duplicate email or username
        const duplicate = users.find(u => 
            u.email?.toLowerCase() === user.email?.toLowerCase() || 
            u.username === user.username
        );
        if (duplicate) {
            if (duplicate.email?.toLowerCase() === user.email?.toLowerCase()) {
                throw new Error('Email already registered');
            }
            throw new Error('Username already taken');
        }

        const userData = {
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password || data.password,
            avatar: user.avatar,
            role: user.role,
            googleId: user.googleId,
            authProvider: user.authProvider,
            fortsVisited: user.fortsVisited,
            createdAt: user.createdAt
        };

        users.push(userData);
        writeUsers(users);

        return new FileUser(userData);
    }
}

module.exports = FileUser;
