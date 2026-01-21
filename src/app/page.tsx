import { Forward } from "@/lib/icons";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const data = [
    {
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
      ],
      slug: "revolver",
    },
    {
      title: "Ora",
      images: [
        {
          src: "/temp/6.jpg",
          alt: "Imagen 1",
        },
        {
          src: "/temp/7.jpg",
          alt: "Imagen 2",
        },
        {
          src: "/temp/8.jpg",
          alt: "Imagen 3",
        },
      ],
      slug: "ora",
    },
    {
      title: "Tira 3",
      images: [
        {
          src: "/temp/7.jpg",
          alt: "Imagen 2",
        },
        {
          src: "/temp/8.jpg",
          alt: "Imagen 1",
        },
        {
          src: "/temp/9.jpg",
          alt: "Imagen 3",
        },
      ],
      slug: "tira-3",
    },
  ];

  return (
    <main>
      <div className="top-1/2 right-8 -traslate-y-1/2 z-50 hidden lg:fixed">
        <Forward />
      </div>

      {data.map((item) => (
        <section
          className="horizontal-section"
          key={item.slug}
          style={{
            height: `${data.length * 100}vh`,
            ["--translateX" as any]: `-${(item.images.length - 1) * 100}vw`,
          }}
        >
          <div className="sticky-wrapper">
            <div
              className="horizontal-track"
              style={{ width: `${item.images.length * 100}vw` }}
            >
              {item.images.map((image) => (
                <div className="panel fade-in" key={image.src}>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="block h-full w-full"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1420}
                      height={1280}
                      className="object-cover h-full w-full"
                    />
                  </Link>
                  111
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
