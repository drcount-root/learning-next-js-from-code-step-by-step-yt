import { Tilt_Prism } from "next/font/google";
import { Dosis } from "next/font/google";

const tilt_Prism = Tilt_Prism({
  weights: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const dosis = Dosis({
  weights: ["200"],
  subsets: ["latin"],
  display: "swap",
});

const NextFont = () => {
  return (
    <div>
      {/* <p
        style={{
          fontFamily: "Tilt Prism",
          fontWeight: 700,
          color: "red",
          fontSize: "40px",
          textAlign: 'center'
        }}
      >
        Link Font
      </p> */}

      <p
        className={tilt_Prism.className}
        style={{ fontSize: "42px", color: "greenyellow" }}
      >
        Font Tilt Prism 700
      </p>

      <p
        className={dosis.className}
        style={{ fontSize: "42px", color: "brown" }}
      >
        Font Dosis 200
      </p>
    </div>
  );
};

export default NextFont;
