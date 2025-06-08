interface ColorSet {
  main: string;
  background: string;
  boxShadow: string;
}

type Colors = "yellow" | "purple";

const colorSets: Record<Colors, ColorSet> = {
  yellow: {
    main: "#FBB03C",
    background: "#EFEFED",
    boxShadow: "0px 0px 10px 2px #DCDED9",
  },
  purple: {
    main: "#af7eeb",
    background: "#e3e9ff",
    boxShadow: "0px 0px 10px 2px #d8e0f3",
  },
};

const selectColor = "purple"; // "yellow" | "purple"
const ThemeColor = colorSets[selectColor];

export default ThemeColor;
