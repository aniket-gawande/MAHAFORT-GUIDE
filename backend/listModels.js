require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function test() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // Since GoogleGenerativeAI sdk doesn't easily expose list models, we can fetch it manually
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        const models = data.models ? data.models.map(m => m.name) : data;
        console.log("Models:", JSON.stringify(models, null, 2));
    } catch(e) {
        console.error("Error:", e);
    }
}
test();
