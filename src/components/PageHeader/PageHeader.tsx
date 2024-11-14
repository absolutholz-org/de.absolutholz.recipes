import { PageContainer } from "../PageContainer";
import { IPageHeader } from "./PageHeader.types";

export function PageHeader({ h1 }: IPageHeader): JSX.Element {
  return (
    <header className="bg-black">
      <PageContainer>
        <div className="py-16">
          <h1 className="poppins text-white text-6xl md:text-8xl lg:text-9xl uppercase">
            {h1}
          </h1>
        </div>
      </PageContainer>
    </header>
  );
}
