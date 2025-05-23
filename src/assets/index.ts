import ImageLogo from "./images/logo.svg";
import Bars from "./images/bars.svg";

const assets = (name: string) => {
  switch (name) {
    case "logo":
      return ImageLogo;
    case "bars":
        return Bars;
    default:
      return ;
  }
};
export default assets;
