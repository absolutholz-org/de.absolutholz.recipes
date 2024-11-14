import { Icon } from "../Icon";
import { ILogo } from "./Logo.types";

export function Logo({}: ILogo): JSX.Element {
  return (
    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-4xl bg-black text-white p-1 rounded-xl inline-flex">
      <Icon src="utensils" />
    </span>
  );
}
