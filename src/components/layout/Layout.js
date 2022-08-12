import { Header } from "./Header";
export const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-4">
      <Header />
      <main className="lg:container bg-white col-span-2 md:col-span-5 lg:col-span-7 md:col-start-2 lg:col-start-3 lg:col-end-7 col-end-3 container-height rounded-md">
        {children}
      </main>
    </div>
  );
};
