import { IFlagIcon } from "./FlagIcon.types";

/**
 * Just use the flags from Wikipedia.
 * For example: https://en.wikipedia.org/wiki/Flag_of_Germany#/media/File:Flag_of_Germany.svg
 */
export function FlagIcon({ src, label }: IFlagIcon): JSX.Element {
  switch (src) {
    case "de":
      return (
        <svg
          focusable="false"
          aria-label={label}
          viewBox="0 0 5 3"
          height="1em"
        >
          <path fill="#000" d="M0 0h5v3H0z" />
          <path fill="#D00" d="M0 1h5v2H0z" />
          <path fill="#FFCE00" d="M0 2h5v1H0z" />
        </svg>
      );
    case "es":
      return (
        <svg
          focusable="false"
          aria-label={label}
          viewBox="0 0 6 4"
          height="1em"
        >
          <path fill="#ad1519" d="M0 0h6v4H0z" />
          <path fill="#fabd00" d="M0 1h6v2H0z" />
        </svg>
      );
    case "fr":
      return (
        <svg
          focusable="false"
          aria-label={label}
          viewBox="0 0 6 4"
          height="1em"
        >
          <rect width="2" height="4" fill="#002654" />
          <rect width="2" height="4" x="2" fill="#FFFFFF" />
          <rect width="2" height="4" x="4" fill="#CE1126" />
        </svg>
      );
  }
  return <></>;
}
