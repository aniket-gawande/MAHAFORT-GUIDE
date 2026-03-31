const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function testFinal() {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent("hello");
        console.log("Success! Chatbot said:", result.response.text().trim());
    } catch(e) {
        console.error("Test Failed:", e.message);
    }
}
testFinal();
