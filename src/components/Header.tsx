import { Menu } from "lucide-react";
import SearchAddress from "./ui/Search";

export default function Header() {
  return (
    <>
      <header className="relative h-[700px] bg-[url('/header-bg.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b bg-black/15 from-black/70"></div>

        <div className="relative z-10 flex flex-col justify-between h-full text-white">
          <nav className="flex justify-between items-center px-8 py-6">
            <img src="logo.png" className="h-8" alt="logo" />
            <Menu color="white" size={32} />
          </nav>

          <div className="flex justify-center mb-14 items-center h-full">
            <h1 className="text-7xl font-serif tracking-wide">Services</h1>
          </div>
        </div>
      </header>
      <SearchAddress />
    </>
  );
}
