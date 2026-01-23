import Image from "next/image";
import { Contacto } from "@/types";

export const metadata = {
  title: "Contacto",
};

const Page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/contacto", {
    cache: "no-store",
  });
  const data = (await response.json()) as Contacto;
  if (!data) return;

  return (
    <section>
      <div className="h-screen w-screen relative">
        <Image
          src={data.image}
          width={1420}
          height={1280}
          className="w-full h-full object-center object-cover"
          alt="Imagen Contacto"
        />
      </div>
    </section>
  );
};

export default Page;
