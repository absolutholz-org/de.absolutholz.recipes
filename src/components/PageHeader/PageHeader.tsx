import { IPageHeader } from "./PageHeader.types";

export function PageHeader({ h1 }: IPageHeader): JSX.Element {
  return (
    <header className="bg-slate-600">
      <div className="container mx-auto px-4 py-16">
        <h1 className="poppins text-white text-9xl uppercase">{h1}</h1>
      </div>
    </header>
  );
}
