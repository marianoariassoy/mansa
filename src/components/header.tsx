"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HamburgerButton from "./HamburgerButton";
import { nav } from "@/lib/data";
import Link from "next/link";
import Mansa from "./Mansa";

const header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [urlBase, setUrlBase] = useState("/");

  useEffect(() => {
    if (pathname === "/") {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
    const base = pathname.split("/").slice(0, 2).join("/");
    setUrlBase(base);
  }, [pathname]);

  useEffect(() => {
    const updateRotation = () => {
      const vh = window.innerHeight;
      const rotation = vh * 0.005; // ajustá el factor
      document.documentElement.style.setProperty(
        "--rotate-deg",
        `${rotation}deg`,
      );
      console.log(rotation);
    };

    updateRotation();
    window.addEventListener("resize", updateRotation);
    return () => window.removeEventListener("resize", updateRotation);
  }, []);

  return (
    <header id="top-page">
      <HamburgerButton
        isOpen={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <aside
        className={`fixed top-0 left-0 h-screen w-full lg:w-90 bg-primary clip-aside px-4 py-8 lg:px-8 z-50 transition-transform duration-200 ease-in-out flex flex-col justify-between delay-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        id="aside-main"
      >
        <nav className="mt-2">
          <ul className="font-display uppercase text-lg">
            {nav.map((item) => (
              <li key={item.name}>
                <Link
                  className={` ${urlBase === item.href ? "underline" : "hover:underline"}`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Mansa />
      </aside>

      {pathname === "/info" && (
        <aside
          className={`absolute top-0 left-0 h-screen w-full lg:w-170 bg-secondary clip-aside lg:clip-aside-info px-4 py-8 lg:px-8 z-50 transition-transform duration-200 ease-in-out flex flex-col justify-between delay-300 ${
            menuOpen ? "-translate-x-full" : "translate-x-0"
          }`}
          id="aside-info"
        >
          <div className="flex flex-col gap-y-6">
            <h1 className="font-display mt-4 text-lg uppercase">Servicios</h1>
            <p className="text-lg lg:text-xl leading-tight w-2/3 lg:w-full">
              —Proyecto y diseño a clientes directos <br />
              —Resolución técnica de mobiliario y equipamiento <br />
              —Fabricación a estudios de arquitectura e interiorismo
            </p>
          </div>
          <Mansa />
        </aside>
      )}

      {pathname === "/contacto" && (
        <aside
          className={`absolute top-0 left-0 h-screen w-full lg:w-170 bg-gray-200 clip-aside lg:clip-aside-info px-4 py-8 lg:px-8 z-50 transition-transform duration-200 ease-in-out flex flex-col justify-between delay-300 ${
            menuOpen ? "-translate-x-full" : "translate-x-0"
          }`}
          id="aside-info"
        >
          <div className="flex flex-col gap-y-6">
            <h1 className="font-display mt-4 text-lg uppercase">Contacto</h1>
            <p className="text-lg lg:text-xl leading-tight w-2/3 lg:w-full">
              Martin Mercante <br />
              <a
                href="http://instagram.com/mansa_estudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @mansa_estudio
              </a>
              <br />
              Buenos Aires, Argentina
              <br />
              <a
                href="mailto:mansaestudio@gmail.com"
                className="hover:underline"
              >
                mansaestudio@gmail.com
              </a>
              <br />T +54 9 11 5734-1525
            </p>
          </div>
          <Mansa />
        </aside>
      )}
    </header>
  );
};

export default header;
