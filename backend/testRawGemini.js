require('dotenv').config();

async function listModels() {
    const key = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Full models output:", data.models.map(m => m.name));
    } catch (e) {
        console.error("Error:", e);
    }
}
listModels();
