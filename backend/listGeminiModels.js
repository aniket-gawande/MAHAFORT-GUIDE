const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyCIEv0g1yIXvxfrMLASKDqOqGgxtvDrz-Q');
async function test() {
  try {
    const fetch = require('node-fetch'); // we can also just use an http request to list models if the SDK doesnt expose it easily. Or just GET https://generativelanguage.googleapis.com/v1beta/models?key=...
  } catch (err) {}
}
test();
