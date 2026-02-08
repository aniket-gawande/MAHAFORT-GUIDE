# AI Chatbot Setup - Google Gemini Integration

## ✅ Setup Complete!

Your chatbot has been successfully upgraded to use **Google Gemini AI** - a powerful AI that can answer ANY question, not just fort-specific ones!

---

## 🔑 Get Your FREE API Key

1. **Visit:** https://makersuite.google.com/app/apikey
2. **Sign in** with your Google account
3. Click **"Create API Key"**
4. Click **"Create API key in new project"** (or select existing project)
5. **Copy** your API key (starts with `AIza...`)

---

## ⚙️ Add API Key to Project

1. Open: `D:\MAHAFORT-GUIDE\frontend\.env`
2. Find the line: `REACT_APP_GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE`
3. Replace `YOUR_GEMINI_API_KEY_HERE` with your actual key
4. Save the file

Example:
```
REACT_APP_GEMINI_API_KEY=AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz1234567
```

---

## 🚀 Restart Server

After adding the API key:

1. Stop the running server (Ctrl+C in terminal)
2. Restart: `npm start`
3. The chatbot will now use Google Gemini AI!

---

## 💡 What Can It Do Now?

The AI chatbot can answer:
- ✅ Maharashtra forts (history, trekking, routes)
- ✅ General knowledge questions
- ✅ Math problems
- ✅ Coding help
- ✅ Science, history, geography
- ✅ Travel recommendations
- ✅ ANY question you ask!

---

## 📊 Free Tier Limits

Google Gemini offers a **generous FREE tier**:
- **60 requests per minute**
- **1500 requests per day**
- **1 million tokens per month**

Perfect for student projects! 🎓

---

## ⚠️ Important Notes

1. **Never commit** your API key to GitHub
2. The `.env` file is already in `.gitignore`
3. Keep your API key private
4. If key is leaked, regenerate it at: https://makersuite.google.com/app/apikey

---

## 🐛 Troubleshooting

### Chatbot shows "API Key not found"
- Check if `.env` file has the key
- Make sure key starts with `REACT_APP_`
- Restart the server after adding key

### "API Error: 400"
- Your API key might be invalid
- Regenerate a new key from Google AI Studio

### "Network Error"
- Check your internet connection
- Verify API key is correct

---

## 📞 Get Help

- Google AI Studio: https://makersuite.google.com/
- Gemini API Docs: https://ai.google.dev/docs

---

**✨ Enjoy your powerful AI chatbot!**
