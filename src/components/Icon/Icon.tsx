import { IIcon } from './Icon.types';

export function Icon({ src, label }: IIcon): JSX.Element {
  switch (src) {
    case 'utensils':
      return (
        <>
          {/* https://mui.com/material-ui/material-icons/?query=food&selected=RestaurantMenu */}
          <svg
            focusable="false"
            aria-hidden="true"
            aria-label={label}
            viewBox="0 0 24 24"
            height="1em"
          >
            <path d="m8.1 13.34 2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13z"></path>
          </svg>
        </>
      );
    case 'clock':
      return (
        <>
          <svg
            focusable="false"
            aria-hidden="true"
            aria-label={label}
            viewBox="0 0 24 24"
            height="1em"
          >
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
          </svg>
        </>
      );
  }
  return <></>;
}
