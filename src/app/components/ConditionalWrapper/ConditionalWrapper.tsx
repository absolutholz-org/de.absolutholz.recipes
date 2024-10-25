import { IConditionalWrapper } from './ConditionalWrapper.types';

export function ConditionalWrapper({
  condition,
  wrapper,
  children,
}: IConditionalWrapper) {
  return condition ? wrapper(children) : children;
}
