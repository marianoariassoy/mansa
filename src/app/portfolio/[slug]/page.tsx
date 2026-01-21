import Image from "next/image";
import FooterPortfolio from "@/components/FooterPortfolio";
import HeaderPortfolio from "@/components/HeaderPortfolio";

const page = () => {
  const data = {
    title: "Revolver",
    images: [
      {
        src: "/temp/2.jpg",
        alt: "Imagen 2",
      },
      {
        src: "/temp/1.jpg",
        alt: "Imagen 1",
      },
      {
        src: "/temp/3.jpg",
        alt: "Imagen 3",
      },
      {
        src: "/temp/2.jpg",
        alt: "Imagen 5",
      },
      {
        src: "/temp/3.jpg",
        alt: "Imagen 3",
      },
    ],
    slug: "revolver",
  };

  return (
    <section>
      <div className="px-4 lg:px-8 py-10 mx-auto max-w-8xl flex flex-col gap-y-16">
        <HeaderPortfolio />
        <div>
          <h1 className="text-3xl lg:text-5xl">Proyecto — Revolver</h1>
        </div>
        <div className="font-display uppercase lg:text-lg leading-snug">
          AÑO. 2025 <br />
          PAÍS. ARGENTINA <br />
          CIUDAD. BUENOS AIRES <br />
          FOTOS. LOREM IPSU <br />
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          {data.images.map((item, index) => {
            const position = index % 4;

            // Imagen 1 y 4 → 100%
            if (position === 0 || position === 3) {
              return (
                <div
                  key={index}
                  className="w-full aspect-square lg:aspect-video"
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

            // Imagen 2 y 3 → 50% / 50%
            if (position === 1) {
              const second = data.images[index + 1];
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
            // position === 2 no renderiza nada (ya se usó arriba)
            return null;
          })}
        </div>

        <FooterPortfolio />
      </div>
    </section>
  );
};

export default page;
