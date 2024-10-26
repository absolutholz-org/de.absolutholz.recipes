import { IFlagIcon } from './FlagIcon.types';

export function FlagIcon({ src, label }: IFlagIcon): JSX.Element {
  switch (src) {
    case 'de':
      return (
        <svg
          focusable="false"
          aria-hidden="true"
          aria-label={label}
          viewBox="0 0 5 3"
          height="1em"
        >
          <path fill="#000" d="M0 0h5v3H0z" />
          <path fill="#D00" d="M0 1h5v2H0z" />
          <path fill="#FFCE00" d="M0 2h5v1H0z" />
        </svg>
      );
    case 'es':
      return (
        <svg
          focusable="false"
          aria-hidden="true"
          aria-label={label}
          viewBox="0 0 6 4"
          height="1em"
        >
          <path fill="#ad1519" d="M0 0h6v4H0z" />
          <path fill="#fabd00" d="M0 1h6v2H0z" />
        </svg>
      );
  }
  return <></>;
}
