const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function testHistoryFix() {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        
        let messages = [
            { type: 'bot', text: 'welcome' },
            { type: 'user', text: 'hey' },
            { type: 'bot', text: 'error' },
            { type: 'bot', text: 'error again' },
            { type: 'user', text: 'fix' },
            { type: 'user', text: 'now' } // The last message which will be extracted
        ];

        let formattedHistory = messages.map(msg => ({
            role: msg.type === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        let historyExceptLast = formattedHistory.slice(0, -1);
        const lastMessage = formattedHistory[formattedHistory.length - 1].parts[0].text;

        let validHistory = [];
        let expectedRole = 'user';
        for (const msg of historyExceptLast) {
            if (msg.role === expectedRole) {
                validHistory.push(msg);
                expectedRole = expectedRole === 'user' ? 'model' : 'user';
            }
        }
        if (validHistory.length > 0 && validHistory[validHistory.length - 1].role === 'user') {
            validHistory.pop();
        }

        console.log("Input History:", messages.map(m=>m.type));
        console.log("Valid History Passed to SDK:");
        console.log(validHistory.map(m=>m.role));

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const chat = model.startChat({ history: validHistory });
        
        console.log("Sending last message: " + lastMessage);
        const result = await chat.sendMessage(lastMessage);
        console.log("Success! Response:", result.response.text().substring(0, 50));
    } catch(e) {
        console.error("Test Failed:", e.message);
    }
}
testHistoryFix();
