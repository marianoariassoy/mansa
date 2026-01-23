import Image from "next/image";
import FooterPortfolio from "@/components/FooterPortfolio";
import GoDown from "@/components/GoDown";
import { Info } from "@/types";

export const metadata = {
  title: "Info",
};

const Page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/info", {
    cache: "no-store",
  });
  const data = (await response.json()) as Info;
  if (!data) return;

  return (
    <section>
      <div className="h-screen w-screen relative">
        <GoDown />

        <Image
          src={data.image}
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
          <p className="text-xl leading-tight whitespace-break-spaces">
            {data.text_2}
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
        {data.images.map((item, index) => {
          const position = index % 4;

          if (position === 2 || position === 3) {
            return (
              <div
                key={item.id}
                className="w-full h-full aspect-square lg:aspect-video"
              >
                <Image
                  src={item.src}
                  alt={data.title}
                  width={1420}
                  height={1280}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            );
          }

          if (position === 0) {
            const second = data.images[index + 1];
            if (!second) return null;

            return (
              <div key={index} className="flex gap-x-4">
                <div className="w-1/2 aspect-9/16 lg:aspect-5/7">
                  <Image
                    src={item.src}
                    alt={data.title}
                    width={710}
                    height={640}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="w-1/2 aspect-9/16 lg:aspect-5/7">
                  <Image
                    src={second.src}
                    alt={data.title}
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

export default Page;
