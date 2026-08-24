export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: "best-camera-settings-lens-ideas-outdoor-maternity",
    title: "Best Camera Settings & Lens Ideas for Outdoor Maternity Shoots",
    category: "Maternity Photoshoot Idea & Tips",
    author: "Bunty Patel",
    date: "August 12, 2026",
    readTime: "6 min read",
    image: "/images/maternity/maternity-01.jpeg",
    excerpt: "Capturing maternity in natural settings requires careful coordination of aperture, shutter speed, and selection of focal lengths to separate subjects beautifully.",
    content: `
      <p>Outdoor maternity photography presents unique challenges and breathtaking rewards. The changing light, weather elements, and wide landscapes offer a stunning canvas, but using incorrect settings can easily wash out skin tones or blur active emotions.</p>
      
      <h3>Selecting the Ideal Lens</h3>
      <p>For outdoor portraits, focal lengths between 85mm and 135mm are preferred. An 85mm prime lens at f/1.4 or f/1.8 creates compression that separates the mother beautifully from busy backgrounds like forest paths or urban streets, keeping attention centered on her shape and emotion.</p>
      
      <h3>Camera Settings for Crisp Portraits</h3>
      <ul>
        <li><strong>Aperture:</strong> f/1.8 to f/2.8 is optimal for clean, soft bokeh.</li>
        <li><strong>Shutter Speed:</strong> At least 1/250s to avoid camera shake, especially when shooting hand-held.</li>
        <li><strong>ISO:</strong> Keep as low as possible (ISO 100 - 400) to ensure high dynamic range and prevent noise.</li>
        <li><strong>Focus:</strong> Continuous eye autofocus (AF-C) ensures that the subject's eyes remain in sharp focus even as she shifts positions.</li>
      </ul>
      
      <blockquote>"Photography is a personal experience intended to make people feel seen, celebrated, and remembered." — Bunty Patel</blockquote>
    `
  },
  {
    slug: "what-to-wear-for-maternity-photoshoot",
    title: "What to Wear for a Maternity Photoshoot (With Posing Tips)",
    category: "Photography Tips",
    author: "Bunty Patel",
    date: "August 10, 2026",
    readTime: "5 min read",
    image: "/images/maternity/maternity-04.jpg",
    excerpt: "Guiding parents on choosing outfits that flatter contours and look organic in outdoor settings while retaining movement and comfort.",
    content: `
      <p>What a mother wears plays a significant role in the overall aesthetic and flow of a maternity session. The clothing should accentuate the bump, drape gracefully with movement, and coordinate harmoniously with the photoshoot location.</p>
      
      <h3>1. Choose Earthy, Neutral Tones</h3>
      <p>Soft creams, warm taupes, sage green, and pastel blues photograph beautifully in nature. Avoid high-contrast patterns or large logos that distract the viewer from the raw emotions and physical beauty of the moment.</p>
      
      <h3>2. Emphasize Fluidity and Texture</h3>
      <p>Long, flowing maxi dresses allow the wind to create motion in the frame. Silk, linen, and lace capture natural highlights and shadows, adding a rich, editorial depth to each photograph.</p>
    `
  }
];
