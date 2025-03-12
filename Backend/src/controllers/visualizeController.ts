import { Request, Response } from "express";
import axios from "axios";
import codeVisualizePrompt from "../prompts/codeVisualizePrompt";
import validateVisualizeHTML from "../utils/validateVisualizeHTML";

const visualizeController = async (req: Request, res: Response) => {
  try {
    const AGENT_URL = process.env.AGENT_URL as string;
    const AGENT_TOKEN = process.env.AGENT_TOKEN as string;
    const AGENT_MODEL = process.env.AGENT_MODEL as string;

    const codeSnippet = req.body.data;

    const prompt = codeVisualizePrompt(codeSnippet);

    const response: any = await axios.post(
      AGENT_URL,
      {
        model: AGENT_MODEL,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 10000,
        temperature: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${AGENT_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const htmlData = response.data?.choices?.[0]?.message?.content
      ?.trim()
      .replace(/\n/g, "");
     
      if(!validateVisualizeHTML(htmlData)){
      return  res.status(400).json({
          message:"can not visualize",
        })
      }


  return res.status(200).json({
        htmlData,
      });
    
  } catch (e: any) {
    console.log(e.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

export default visualizeController;
