import Card from "@/components/Card";
import FooterPortfolio from "@/components/FooterPortfolio";
import HeaderPortfolio from "@/components/HeaderPortfolio";
import { Project } from "@/types";

export const metadata = {
  title: "Portfolio",
};

const Page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/projects", {
    cache: "no-store",
  });
  const data = (await response.json()) as Project[];
  if (!data) return;

  return (
    <section>
      <div className="px-4 lg:px-8 py-10 mx-auto max-w-8xl flex flex-col gap-y-8">
        <HeaderPortfolio />

        <div className="flex flex-col text-lg lg:text-xl mt-8">
          <h1 className="text-base lg:text-lg font-display">PORTOLFIO</h1>
          <div className="flex flex-col leading-tight">
            <a
              href="http://instagram.com/mansa_estudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @mansa_estudio
            </a>
            <a href="mailto:mansaestudio@gmail.com" className="hover:underline">
              mansaestudio@gmail.com
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-10 mb-8">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>

        <FooterPortfolio />
      </div>
    </section>
  );
};

export default Page;
