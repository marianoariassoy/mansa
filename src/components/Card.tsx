import Image from "next/image";
import Link from "next/link";

interface CardProps {
  data: {
    title: string;
    year: string;
    image: string;
    slug: string;
  };
}

const Card = ({ data }: CardProps) => {
  return (
    <article className="flex flex-col gap-y-4">
      <Link href={`/portfolio/${data.slug}`} className="block h-full w-full">
        <div className="aspect-square lg:aspect-7/5">
          <Image
            src={data.image}
            alt={data.title}
            width={1280}
            height={1024}
            className="w-full h-full object-cover object-center hover:opacity-80 transition-opacity"
          />
        </div>
      </Link>
      <div className="flex flex-col font-display lg:text-lg uppercase">
        <span>PROYECTO. {data.title}</span>
        <span>AÑO. {data.year}</span>
      </div>
    </article>
  );
};

export default Card;
