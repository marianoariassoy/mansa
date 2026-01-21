import Image from "next/image";

export const metadata = {
  title: "Contacto",
};

const page = () => {
  return (
    <section>
      <div className="h-screen w-screen relative">
        <Image
          src="/images/contact-image.jpg"
          width={1420}
          height={1280}
          className="w-full h-full object-center object-cover"
          alt="Imagen Contacto"
        />
      </div>
    </section>
  );
};

export default page;
