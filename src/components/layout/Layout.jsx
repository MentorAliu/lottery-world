import { Header } from "./Header";
export const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
      <Header />
      <main className="md:container flex justify-center md:mx-auto md:max-w-lg col-span-2 md:col-span-8 lg:max-w-2xl">
        {children}
      </main>
    </div>
  );
};
