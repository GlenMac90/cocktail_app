import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 flex h-[4.375rem] w-screen justify-center bg-slate-dark px-5 lg:h-[6.25rem] xl:px-[6.25rem]">
      <div className="homepage-content-max-width flex w-full items-center">
        <figure className="flex items-center">
          <Image
            src="/logo-drink-icon.png"
            width={43}
            height={32}
            alt="Drink Icon"
          />
          <span className="base-24 font-serif text-light-200">
            COCKTAIL<span className="text-light-100">CORNER</span>
          </span>
        </figure>
      </div>
    </nav>
  );
};

export default Navbar;
