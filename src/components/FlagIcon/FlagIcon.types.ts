import { Locale } from "@/app/Recipe.type";

export type FlagIcon = Omit<Locale, "en">;

export type IFlagIcon = {
  src: FlagIcon;
  label: string;
};
