import { PageContainer } from "../PageContainer";
import { IPageHeader } from "./PageHeader.types";

export function PageHeader({ h1, image }: IPageHeader): JSX.Element {
  return (
    <header className="bg-black relative overflow-hidden">
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="absolute w-full h-full left-0 object-cover object-center opacity-50 blur"
            src={image}
            alt=""
          />
        </>
      )}
      <PageContainer>
        <div className="py-16 z-10 relative">
          <h1 className="raleway text-white text-6xl md:text-8xl lg:text-9xl uppercase">
            {h1}
          </h1>
        </div>
      </PageContainer>
    </header>
  );
}
