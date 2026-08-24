export interface PortfolioItem {
  filename: string;
  category: string;
  project: string;
  asset_id: string;
  original_url: string;
  web_url_1800: string;
}

export const portfolioCategories = [
  { id: "couple", label: "Couples", count: 8, folder: "couple" },
  { id: "events", label: "Events", count: 25, folder: "events" },
  { id: "portraits", label: "Portraits", count: 8, folder: "portraits" },
  { id: "maternity", label: "Maternity", count: 8, folder: "maternity" },
  { id: "newborn", label: "Newborn", count: 8, folder: "newborn" },
  { id: "family", label: "Family", count: 8, folder: "family" },
  { id: "corporate", label: "Commercial", count: 8, folder: "corporate" },
  { id: "pet", label: "Pets", count: 8, folder: "pet" },
  { id: "nature-landscape-architecture", label: "Places", count: 8, folder: "nature-landscape-architecture" },
  { id: "lifestyle", label: "Lifestyle", count: 8, folder: "lifestyle" }
];

export const selectedWorkItems = [
  {
    num: "01",
    label: "Reflections",
    subtitle: "Portrait / Editorial Study",
    image: "/images/portraits/portraits-02.jpg",
    aspect: "portrait"
  },
  {
    num: "02",
    label: "Joy",
    subtitle: "Couples & Intimate Moments",
    image: "/images/couple/couple-04.jpg",
    aspect: "landscape"
  },
  {
    num: "03",
    label: "Raw",
    subtitle: "Street & Still Life",
    image: "/images/lifestyle/lifestyle-03.jpeg",
    aspect: "portrait"
  },
  {
    num: "04",
    label: "The Essence Within",
    subtitle: "Commercial & Studio Portraiture",
    image: "/images/portraits/portraits-03.jpg",
    aspect: "landscape"
  },
  {
    num: "05",
    label: "Ephemeral",
    subtitle: "Places & Landscapes",
    image: "/images/nature-landscape-architecture/nature-landscape-architecture-01.jpeg",
    aspect: "landscape"
  }
];

// Curated home images for specific sections
export const homeVisualBreak = "/images/lifestyle/lifestyle-06.jpeg";

export const getCategoryRepresentativeImage = (catId: string): string => {
  switch (catId) {
    case "couple": return "/images/couple/couple-05.jpg";
    case "events": return "/images/events/events-06.jpg";
    case "portraits": return "/images/portraits/portraits-04.jpg";
    case "maternity": return "/images/maternity/maternity-02.jpg";
    case "newborn": return "/images/newborn/newborn-03.jpg";
    case "family": return "/images/family/family-02.jpg";
    case "corporate": return "/images/corporate/corporate-02.jpeg";
    case "pet": return "/images/pet/pet-04.jpeg";
    case "nature-landscape-architecture": return "/images/nature-landscape-architecture/nature-landscape-architecture-05.jpeg";
    case "lifestyle": return "/images/lifestyle/lifestyle-07.jpeg";
    default: return "/images/portraits/portraits-01.jpeg";
  }
};
