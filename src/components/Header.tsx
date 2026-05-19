import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { createClient } from "@/prismicio";
import BurgerIcon from "./Icons/BurgerIcon";
import SearchIcon from "./Icons/SearchIcon";

export async function Header() {
  const client = createClient();
  const header = await client.getSingle("header");

  return (
    <header className="fixed top-0 left-0 right-0 bg-white">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-row items-center pr-10 xl:pr-0">
        {/* Burger */}
        <div aria-hidden="true" className="w-20 h-20 aspect-square mr-11.25 flex justify-center items-center bg-gray-100 cursor-pointer">
          <BurgerIcon className="h-8 w-8 text-(--brand-primary)" />
        </div>

        {/* Logo */}
        <PrismicNextLink href="/" className="flex items-center justify-center translate-y-3.5 cursor-pointer" aria-label="Home">
          <PrismicNextImage field={header.data.logo} className="w-54 h-auto" />
        </PrismicNextLink>

        {/* Search */}
        <div aria-hidden="true" className="w-full flex justify-end">
          <SearchIcon className="h-6 w-6 text-(--brand-primary) cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
