import StylesX from "../custom.module.css";
import StylesY from "@/styles/CustomStyle.module.css";

const ModulerCssUsing = () => {
  return (
    <div>
      <h2 className={StylesX.text_greenyellow}>Using CSS Modules</h2>
      <h2 className={StylesY.text_crimson}>Moduler CSS with Import Alias</h2>
    </div>
  );
};

export default ModulerCssUsing;
