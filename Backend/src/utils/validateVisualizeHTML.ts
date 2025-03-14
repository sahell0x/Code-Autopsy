import { HTMLDataType } from "../types/responseTypes";

const validateVisualizeHTML = (htmlData: HTMLDataType) => {
  if (htmlData) {
    if (
      htmlData != "CANNOT VISUALIZE" &&
      (htmlData[0] == "<" &&
      htmlData[htmlData.length - 1] == ">") && !htmlData.includes("<script>")
    ) {
      return true;
    }
  }

  return false;
};

export default validateVisualizeHTML;
