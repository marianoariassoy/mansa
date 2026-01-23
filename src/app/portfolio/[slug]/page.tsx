import Image from "next/image";
import FooterPortfolio from "@/components/FooterPortfolio";
import HeaderPortfolio from "@/components/HeaderPortfolio";
import { Project } from "@/types";

async function getServerSideProps(slug: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${slug}`,
  );
  const data = await response.json();
  if (!data) return null;
  return data;
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = (await getServerSideProps(slug)) as Project;
  if (!data) return null;

  return (
    <section>
      <div className="px-4 lg:px-8 py-10 mx-auto max-w-8xl flex flex-col gap-y-16">
        <HeaderPortfolio />
        <div>
          <h1 className="text-3xl lg:text-5xl">Proyecto — {data.title}</h1>
        </div>
        <div className="font-display uppercase lg:text-lg leading-snug flex flex-col">
          {data.year && <span>AÑO. {data.year}</span>}
          {data.city && <span>CIUDAD. {data.city}</span>}
          {data.country && <span>PAÍS. {data.country}</span>}
          {data.ph && <span>FOTOS. {data.ph}</span>}
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          {data.images.map((item, index) => {
            const position = index % 4;

            // Imagen 1 y 4 → 100%
            if (position === 0 || position === 3) {
              return (
                <div
                  key={item.id}
                  className="w-full aspect-square lg:aspect-video"
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

            // Imagen 2 y 3 → 50% / 50%
            if (position === 1) {
              const second = data.images[index + 1];
              if (!second) return null;

              return (
                <div key={item.id} className="flex gap-x-4">
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
            // position === 2 no renderiza nada (ya se usó arriba)
            return null;
          })}
        </div>

        <FooterPortfolio />
      </div>
    </section>
  );
};

export default Page;
