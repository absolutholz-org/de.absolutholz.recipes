import { Url } from "next/dist/shared/lib/router/router";
import { Icon } from "../Icon/Icon.types";

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
  icon?: Icon;
};
