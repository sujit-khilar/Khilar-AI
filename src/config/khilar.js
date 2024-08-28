/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
*/


import {GoogleGenerativeAI} from '@google/generative-ai' ;

// const apiKey = process.env.API_KEY;
const API_KEY= 'AIzaSyDMdYtoItDxBkWZ3LcP_IRHbozMk2ameUU';
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text();
}

export default run;
