export interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  year?: string;
  city?: string;
  country?: string;
  ph?: string;
  images: {
    id: number;
    portrait: boolean;
    width: boolean;
    src: string;
  }[];
}

export interface Info {
  id: number;
  title: string;
  image: string;
  text: string;
  text_2: string;
  images: {
    id: number;
    src: string;
  }[];
}

export interface Contacto {
  id: number;
  title: string;
  text: string;
  image: string;
}
