const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// app.post('/ner_predict', async (req, res) => {
//   try {
//     const { text } = req.body;

//     // Define the Flask route URL
//     const flaskURL = 'http://127.0.0.1:5000/ner_predict';

//     // Make an HTTP POST request to the Flask route with raw data
//     const response = await axios.post(flaskURL, { text });

//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error('Error processing NER prediction:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// Endpoint to handle incoming user messages
app.post('/send-message', (req, res) => {
  const userMessage = req.body.message; 

  const botResponse = `You said: ${userMessage}`;

  res.json({ reply: botResponse });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
