import {
  GoogleGenerativeAI,
}  from "@google/generative-ai";

import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY as string;
const AGENT_MODEL = process.env.AGENT_MODEL as string;


const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: AGENT_MODEL,
});


export default model;