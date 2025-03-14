import { Request, Response } from "express";
import codeVisualizePrompt from "../prompts/codeVisualizePrompt";
import validateVisualizeHTML from "../utils/validateVisualizeHTML";
import generationConfig from "../utils/generationConfig";
import model from "../utils/model";
import { ChatResultType, HTMLDataType } from "../types/responseTypes";

const visualizeController = async (req: Request, res: Response) => {
  try {
    const codeSnippet = req.body.data;

    const prompt = codeVisualizePrompt(codeSnippet);

    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);



    const parsedResult: ChatResultType = JSON.parse(result.response.text());


    const htmlData:HTMLDataType = parsedResult?.html;



    if (validateVisualizeHTML(htmlData)) {
      res.status(200).json({
        htmlData,
      });
    } else {
      res.status(400).json({
        message: "can not visualize",
      });
    }
  } catch (e: any) {
    console.log(e.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

export default visualizeController;
