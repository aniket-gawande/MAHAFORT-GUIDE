const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters'],
        maxlength: [30, 'Username cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        minlength: [6, 'Password must be at least 6 characters'],
        // Not required because Google login users won't have a password
    },
    avatar: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        enum: ['warrior', 'commander', 'admin'],
        default: 'warrior'
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true // Allows null values while keeping unique constraint
    },
    authProvider: {
        type: String,
        enum: ['local', 'google'],
        default: 'local'
    },
    fortsVisited: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Hash password before saving (Mongoose 9+ async middleware - no next() callback)
userSchema.pre('save', async function () {
    if (!this.isModified('password') || !this.password) return;
    
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
    if (!this.password) return false;
    return await bcrypt.compare(candidatePassword, this.password);
};

// Return user object without password
userSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model('User', userSchema);
