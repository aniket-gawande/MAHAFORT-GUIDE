const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// LOAD ALL FORT DATA ONCE AT STARTUP TO TRAIN THE AI
let projectContext = "";
try {
    const fortsDir = path.join(__dirname, '../data/forts');
    if (fs.existsSync(fortsDir)) {
        const files = fs.readdirSync(fortsDir).filter(f => f.endsWith('.json'));
        const fortsData = files.map(file => {
            const raw = fs.readFileSync(path.join(fortsDir, file), 'utf8');
            const data = JSON.parse(raw);
            delete data.images; // Remove images to save token space
            return JSON.stringify(data);
        });
        projectContext = "\n\n--- MAHAFORT PROJECT DATA DATABASE ---\n" + fortsData.join('\n');
    }
} catch(err) {
    console.warn("Could not load fort data for chatbot training:", err);
}

// System Instructions to shape Bahirji Naik's persona
const systemInstruction = `
You are Bahirji Naik (बहिर्जी नाईक), the legendary spy and scout of Chhatrapati Shivaji Maharaj from the Maratha Empire.
Your role here is to act as the primary AI assistant for a project named 'MahaFort Guide'. You possess deep, encyclopedic knowledge about Maharashtra forts, the Sahyadri mountains, trekking trails, survival tips, and Maratha history.

Core Rules for your Persona:
1. Always greet in character (e.g., 'जय शिवराय!', 'Namaskar warrior!') when appropriate.
2. IMPORTANT: You MUST answer ALL questions asked by the user, even if they are completely unrelated to forts (like coding, science, movies, math, or general knowledge). NEVER refuse an answer.
3. Keep your responses engaging, enthusiastic, and highly detailed but easy to read with Markdown structuring. Use emojis occasionally for flavor (🏰, ⛰️, ⚔️, 🚩).
4. You must speak primarily in English but feel free to sprinkle in Marathi phrases like 'हर हर महादेव', 'जय भवानी', 'गड आला', etc., where appropriate.
5. Below is the full database of forts for this project. You MUST use this data as your primary source of truth when providing details like altitude, difficulty, ticket cost, or trek routes.
` + projectContext;

const getChatResponse = async (req, res) => {
    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Conversational messages array is required.' });
        }

        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ error: 'Gemini API Key is not configured on the server.' });
        }

        // Prepare conversation format for Gemini
        // Gemini expects array of { role: 'user' | 'model', parts: [{ text: '...' }] }
        // The input format from frontend is likely simple: { role: 'user'|'bot', text: '...' }
        // We will transform it. But frontend uses: { type: 'user' | 'bot', text: '...' }
        const formattedHistory = messages.map(msg => ({
            role: msg.type === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        // The last message is what we need to send, but we just pass the history to startChat
        let historyExceptLast = formattedHistory.slice(0, -1);
        const lastMessage = formattedHistory[formattedHistory.length - 1].parts[0].text;

        // Gemini API strictly requires history to: 1. start with 'user', 2. strictly alternate, 3. end with 'model'
        let validHistory = [];
        let expectedRole = 'user';
        for (const msg of historyExceptLast) {
            if (msg.role === expectedRole) {
                validHistory.push(msg);
                expectedRole = expectedRole === 'user' ? 'model' : 'user';
            }
        }
        // Ensure history ends with 'model' before the new 'user' message is sent
        if (validHistory.length > 0 && validHistory[validHistory.length - 1].role === 'user') {
            validHistory.pop();
        }

        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.5-flash",
            systemInstruction: systemInstruction 
        });

        const chat = model.startChat({
            history: validHistory,
            generationConfig: {
                maxOutputTokens: 800,
            },
        });

        const result = await chat.sendMessage(lastMessage);
        const responseText = result.response.text();

        return res.json({
            text: responseText,
            // Quick replies can be dynamically thought of or static. For now, we will leave them static in frontend or add generic ones here.
            quickReplies: ['🏰 Tell me about Raigad', '🥾 Trekking tips for beginners', '🗺️ Plan a day trip near Pune']
        });

    } catch (error) {
        console.error('Chatbot Error:', error);
        res.status(500).json({ error: 'Failed to process chat response.' });
    }
};

module.exports = {
    getChatResponse
};
