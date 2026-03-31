const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

async function checkFix() {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        
        let projectContext = "";
        const fortsDir = path.join(__dirname, 'data/forts');
        if (fs.existsSync(fortsDir)) {
            const files = fs.readdirSync(fortsDir).filter(f => f.endsWith('.json'));
            const fortsData = files.map(file => {
                const raw = fs.readFileSync(path.join(fortsDir, file), 'utf8');
                const data = JSON.parse(raw);
                delete data.images; 
                return JSON.stringify(data);
            });
            projectContext = "\n\n--- MAHAFORT PROJECT DATA DATABASE ---\n" + fortsData.join('\n');
            console.log("Successfully loaded " + files.length + " forts");
        }

        const systemInstruction = "Test instruction..." + projectContext;

        const messages = [
            { type: 'bot', text: 'hello' },
            { type: 'user', text: 'hey' }
        ];

        let formattedHistory = messages.map(msg => ({
            role: msg.type === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        let historyExceptLast = formattedHistory.slice(0, -1);
        const lastMessage = formattedHistory[formattedHistory.length - 1].parts[0].text;

        if (historyExceptLast.length > 0 && historyExceptLast[0].role === 'model') {
            historyExceptLast.shift();
        }

        const model = genAI.getGenerativeModel({ 
            model: "gemini-pro",
            systemInstruction: systemInstruction 
        });

        const chat = model.startChat({
            history: historyExceptLast,
            generationConfig: {
                maxOutputTokens: 800,
            },
        });

        console.log("Sending to Gemini...");
        const result = await chat.sendMessage(lastMessage);
        console.log("Response:", result.response.text().substring(0, 100));

    } catch (e) {
        console.error("ERROR CAUGHT:");
        console.error(e);
    }
}
checkFix();
