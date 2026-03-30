const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyCIEv0g1yIXvxfrMLASKDqOqGgxtvDrz-Q');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function test() {
  try {
    const result = await model.generateContent("Hello?");
    console.log(result.response.text());
  } catch (err) {
    console.error("ERROR:", err.message);
  }
}
test();
