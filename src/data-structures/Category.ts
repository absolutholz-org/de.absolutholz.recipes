import { Category } from "@/app/Recipe.type";

export type CategoryColor = {
  border: string;
  bg: string;
  pattern: Record<string, string | number>;
  text: string;
};

// https://www.magicpattern.design/tools/css-backgrounds
export const categoryColors: Record<Category, CategoryColor> = {
  appetizers: {
    border: "border-black-600",
    bg: "bg-pink-600",
    pattern: {
      "--altColor": "hsl(0 0% 100% / 0.125)",
      backgroundColor: "currentColor",
      backgroundImage:
        "repeating-linear-gradient( 45deg, var(--altColor), var(--altColor) 10px, currentColor 10px, currentColor 30px )",
    },
    text: "text-pink-600",
  },
  drinks: {
    border: "border-blue-600",
    bg: "bg-blue-600",
    pattern: {
      "--altColor": "hsl(0 0% 100% / 0.125)",
      backgroundColor: "currentColor",
      backgroundImage:
        "repeating-linear-gradient( 135deg, var(--altColor), var(--altColor) 10px, currentColor 10px, currentColor 30px )",
    },
    text: "text-blue-600",
  },
  mains: {
    border: "border-orange-600",
    bg: "bg-orange-600",
    pattern: {
      "--altColor": "hsl(0 0% 100% / 0.125)",
      backgroundColor: "currentColor",
      backgroundImage:
        "linear-gradient(135deg, var(--altColor) 25%, transparent 25%), linear-gradient(225deg, var(--altColor) 25%, transparent 25%), linear-gradient(45deg, var(--altColor) 25%, transparent 25%), linear-gradient(315deg, var(--altColor) 25%, currentColor 25%)",
      backgroundPosition: "10px 0, 10px 0, 0 0, 0 0",
      backgroundSize: "10px 10px",
      backgroundRepeat: "repeat",
    },
    text: "text-orange-600",
  },
  salads: {
    border: "border-orange-600",
    bg: "bg-orange-600",
    pattern: {
      "--altColor": "hsl(0 0% 100% / 0.125)",
      backgroundColor: "currentColor",
      backgroundImage:
        "linear-gradient(135deg, var(--altColor) 25%, transparent 25%), linear-gradient(225deg, var(--altColor) 25%, transparent 25%), linear-gradient(45deg, var(--altColor) 25%, transparent 25%), linear-gradient(315deg, var(--altColor) 25%, currentColor 25%)",
      backgroundPosition: "10px 0, 10px 0, 0 0, 0 0;",
      backgroundSize: "20px 20px",
      backgroundRepeat: "repeat",
    },
    text: "text-orange-600",
  },
  sandwiches: {
    border: "border-green-600",
    bg: "bg-green-600",
    pattern: {
      "--altColor": "hsl(0 0% 100% / 0.125)",
      backgroundColor: "currentColor",
      backgroundImage:
        "linear-gradient(to right, var(--altColor), var(--altColor) 5px, currentColor 5px, currentColor )",
      backgroundSize: "10px 100%",
    },
    text: "text-green-600",
  },
  sauces: {
    border: "border-red-600",
    bg: "bg-red-600",
    pattern: {
      "--altColor": "hsl(0 0% 100% / 0.125)",
      backgroundColor: "currentColor",
      backgroundImage:
        "linear-gradient(to top, var(--altColor), var(--altColor) 5px, currentColor 5px, currentColor )",
      backgroundSize: "100% 10px",
    },
    text: "text-red-600",
  },
  seasonings: {
    border: "border-yellow-600",
    bg: "bg-yellow-600",
    pattern: {
      "--altColor": "hsl(0 0% 100% / 0.125)",
      backgroundColor: "currentColor",
      backgroundImage:
        "repeating-radial-gradient( circle at 0 0, transparent 0, currentColor 10px ), repeating-linear-gradient( #ffffff55, var(--altColor) )",
    },
    text: "text-yellow-600",
  },
  sides: {
    border: "border-teal-600",
    bg: "bg-teal-600",
    pattern: {
      "--altColor": "hsl(0 0% 100% / 0.125)",
      backgroundColor: "currentColor",
      backgroundImage:
        "linear-gradient(45deg, var(--altColor) 50%, currentColor 50%)",
      backgroundSize: "10px 10px",
    },
    text: "text-teal-600",
  },
  soups: {
    border: "border-orange-600",
    bg: "bg-orange-600",
    pattern: {
      "--altColor": "hsl(0 0% 100% / 0.125)",
      backgroundColor: "currentColor",
      backgroundImage:
        "linear-gradient(-45deg, currentColor, currentColor 50%, var(--altColor) 50%, var(--altColor))",
      backgroundSize: "10px 10px",
    },
    text: "text-orange-600",
  },
  sweets: {
    border: "border-violet-600",
    bg: "bg-violet-600",
    pattern: {
      "--altColor": "hsl(0 0% 100% / 0.125)",
      backgroundColor: "currentColor",
      backgroundImage:
        " repeating-linear-gradient(45deg, var(--altColor) 25%, transparent 25%, transparent 75%, var(--altColor) 75%, var(--altColor)), repeating-linear-gradient(45deg, var(--altColor) 25%, currentColor 25%, currentColor 75%, var(--altColor) 75%, var(--altColor))",
      backgroundPosition: "0 0, 10px 10px",
      backgroundSize: "20px 20px",
    },
    text: "text-violet-600",
  },
};
