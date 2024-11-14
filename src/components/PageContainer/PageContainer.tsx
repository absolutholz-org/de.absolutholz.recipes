import { IPageContainer } from "./PageContainer.types";

export function PageContainer({ children }: IPageContainer): JSX.Element {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16">{children}</div>
  );
}
