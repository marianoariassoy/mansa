"use client";
import Image from "next/image";
import { Forward } from "@/lib/icons";
import FooterPortfolio from "@/components/FooterPortfolio";

export const metadata = {
  title: "Info",
};

const page = () => {
  const images = [
    {
      src: "/temp/12.jpg",
      alt: "Imagen 2",
    },
    {
      src: "/temp/4.jpg",
      alt: "Imagen 2",
    },
    {
      src: "/temp/8.jpg",
      alt: "Imagen 8",
    },
  ];

  const goDown = () => {
    const element = document.querySelector("#second-page");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className="h-screen w-screen relative">
        <div className="absolute bottom-8 right-8">
          <button
            className="flex items-start gap-x-4 cursor-pointer"
            onClick={goDown}
          >
            <span className="text-3xl lg:text-4xl hover:underline">
              Detalle
            </span>
            <span className="rotate-90">
              <Forward />
            </span>
          </button>
        </div>

        <Image
          src="/images/info-image.jpg"
          width={1420}
          height={1280}
          className="w-full h-full object-center object-cover"
          alt="Imagen Info"
        />
      </div>
      <div
        className="px-4 lg:px-8 pb-10 pt-20 mx-auto max-w-8xl grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-16"
        id="second-page"
      >
        <div>
          <h2 className="text-3xl lg:text-5xl mb-10">Info</h2>
          <p className="text-xl leading-tight">
            Mansa es un taller de diseño y fabricación que trabaja en la
            intersección entre idea, técnica y materia. Su práctica se
            estructura en tres líneas principales.
            <br />
            <br />
            —Proyecto y diseño a clientes directos. El taller acompaña a quienes
            aún no tienen definido su proyecto, ofreciendo un desarrollo
            integral que abarca ideas iniciales, dirección técnica, elabora-
            ción de planos y resolución formal. El proceso combina observación,
            criterio y oficio para transformar necesidades y deseos en piezas
            claras, precisas y realizables.
            <br />
            <br />
            —Resolución técnica de mobiliario y equipamiento. El trabajo se
            sostiene en un enfoque riguroso que articula pensamiento técnico,
            conocimiento constructivo y experiencia material. Desde detalles
            comple- jos hasta sistemas completos, el proceso integra dibujo,
            prototipado y ajustes finos para garantizar estabilidad, durabilidad
            y calidad en cada pieza.
            <br />
            <br />
            —Realización para estudios de arquitectura e interiorismo. Mansa
            colabora con estudios en la materialización de sus proyectos, tradu-
            ciendo la intención proyectual en soluciones viables y construibles.
            La fabricación se realiza con precisión y coherencia, cuidando tanto
            la lectura técnica como la expresión material del diseño original.
          </p>
        </div>
        <div>
          <h2 className="text-3xl lg:text-5xl mb-10">Contacto</h2>
          <p className="text-xl leading-tight">
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
            <a href="mailto:mansaestudio@gmail.com" className="hover:underline">
              mansaestudio@gmail.com
            </a>
            <br />T +54 9 11 5734-1525
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 px-4 lg:px-8 pb-8">
        {images.map((item, index) => {
          const position = index % 4;

          if (position === 2 || position === 3) {
            return (
              <div
                key={index}
                className="w-full h-full aspect-square lg:aspect-video"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1420}
                  height={1280}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            );
          }

          if (position === 0) {
            const second = images[index + 1];
            if (!second) return null;

            return (
              <div key={index} className="flex gap-x-4">
                <div className="w-1/2 aspect-9/16 lg:aspect-5/7">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={710}
                    height={640}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="w-1/2 aspect-9/16 lg:aspect-5/7">
                  <Image
                    src={second.src}
                    alt={second.alt}
                    width={710}
                    height={640}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            );
          }
          // position === 1 no renderiza nada (ya se usó arriba)
          return null;
        })}
      </div>
      <div className="mt-20 px-4 lg:px-8 pb-8">
        <FooterPortfolio />
      </div>
    </section>
  );
};

export default page;
