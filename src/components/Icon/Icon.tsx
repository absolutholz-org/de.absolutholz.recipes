import { ReactNode } from "react";
import { IIcon } from "./Icon.types";

function IconSvgBase({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}): JSX.Element {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      aria-label={label ?? undefined}
      viewBox="0 0 24 24"
      height="1em"
    >
      {children}
    </svg>
  );
}

export function Icon({ src, label }: IIcon): JSX.Element {
  switch (src) {
    case "utensils":
      return (
        <IconSvgBase label={label}>
          {/* https://mui.com/material-ui/material-icons/?query=food&selected=RestaurantMenu */}
          <path d="m8.1 13.34 2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13z"></path>
        </IconSvgBase>
      );
    case "clock":
      return (
        <IconSvgBase label={label}>
          {/* https://mui.com/material-ui/material-icons/?query=clock&selected=Schedule */}
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
        </IconSvgBase>
      );
    case "home":
      return (
        <IconSvgBase label={label}>
          {/* https://mui.com/material-ui/material-icons/?query=home&selected=Home */}
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
        </IconSvgBase>
      );
    case "drink":
      return (
        <IconSvgBase label={label}>
          {/* https://mui.com/material-ui/material-icons/?query=drink&selected=LocalDrink */}
          <path d="m3 2 2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3m6.33-11H5.67l-.44-4h13.53z"></path>
        </IconSvgBase>
      );
    case "icecream":
      return (
        <IconSvgBase label={label}>
          {/* https://mui.com/material-ui/material-icons/?query=dessert&selected=Icecream */}
          <path
            fill-rule="evenodd"
            d="m8.79 12.4 3.26 6.22 3.17-6.21c-.11-.08-.21-.16-.3-.25-.84.53-1.85.84-2.92.84s-2.08-.31-2.92-.84c-.09.09-.19.17-.29.24m-1.96.59C5.25 12.9 4 11.6 4 10c0-1.49 1.09-2.73 2.52-2.96C6.75 4.22 9.12 2 12 2s5.25 2.22 5.48 5.04C18.91 7.27 20 8.51 20 10c0 1.59-1.24 2.9-2.81 2.99L12.07 23z"
          ></path>
        </IconSvgBase>
      );
    case "burger":
      return (
        <IconSvgBase label={label}>
          {/* https://mui.com/material-ui/material-icons/?query=dessert&selected=Icecream */}
          <path
            fill-rule="evenodd"
            d="M22 10c.32-3.28-4.28-6-9.99-6S1.7 6.72 2.02 10zM5.35 13.5c.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.63 2.17.64v-1.98s-.79-.16-1.16-.38c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.21-.64.37-.23.59-.36 1.14-.36M2 16v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2z"
          ></path>
        </IconSvgBase>
      );
  }
}
