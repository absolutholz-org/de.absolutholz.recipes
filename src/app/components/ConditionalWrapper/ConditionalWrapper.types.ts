import { ReactNode } from 'react';

export type IConditionalWrapper = {
  children: ReactNode;
  condition: boolean;
  wrapper: (children: ReactNode) => JSX.Element;
};
