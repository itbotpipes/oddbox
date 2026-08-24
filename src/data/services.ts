export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string; // Dynamic client asset reference
}

export const servicesData: ServiceItem[] = [
  {
    id: "commercial-photography",
    num: "01",
    title: "Commercial Photography",
    description: "Creative photography for brands, campaigns, editorials, and advertising.",
    image: "/images/corporate/corporate-01.jpeg"
  },
  {
    id: "product-photography",
    num: "02",
    title: "Product Photography",
    description: "High quality product imagery for ecommerce, advertising, and brand marketing.",
    image: "/images/corporate/corporate-03.jpeg"
  },
  {
    id: "commercial-films",
    num: "03",
    title: "Commercial Films / TVC Production",
    description: "Concept-driven commercials and brand films built around cinematic storytelling.",
    image: "/images/lifestyle/lifestyle-03.jpeg"
  },
  {
    id: "brand-story-films",
    num: "04",
    title: "Brand Story Films / Podcast",
    description: "Cinematic brand storytelling communicating vision, process, and identity.",
    image: "/images/lifestyle/lifestyle-04.jpeg"
  },
  {
    id: "social-media-content",
    num: "05",
    title: "Social Media Content Creation",
    description: "High-impact photography and video for Instagram, YouTube, and digital campaigns.",
    image: "/images/lifestyle/lifestyle-01.jpeg"
  },
  {
    id: "fashion-textile",
    num: "06",
    title: "Fashion & Textile Photography",
    description: "Outdoor and studio fashion photography for clothing brands, textile manufacturers, and catalogs.",
    image: "/images/portraits/portraits-05.jpg"
  }
];
