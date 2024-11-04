import { Url } from "next/dist/shared/lib/router/router";

export type IBadge = {
  text: string;
  color: {
    bg: string;
    border: string;
    text: string;
  };
  href?: Url;
  count?: number;
  size?: "large" | "small";
};
