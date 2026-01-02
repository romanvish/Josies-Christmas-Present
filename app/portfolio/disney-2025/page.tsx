import { ProjectPage } from "@/app/components/ProjectPage";

const story = [
  "My friends and I went to Disney Land and California Adventure in the fall of 2025. We wanted to capture the magic of the parks through a series of dynamic videos and vibrant photos that highlighted the unique experiences each park offers.",
  "We experimented with backdrops, lighting, and colors to fully capture the fun we were having. From the thrilling rides to the enchanting parades, every moment was an opportunity to create something special.",
  "Delivery included a digital array of photos, shot on the <camera>. Grade leans warm to keep the California glow." ,
];

const images = [
  { src: "/Disney-2025-IMG/IMG_2453.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2473.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2525.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2532.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2603.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2611.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2615.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2619.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2631.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2697.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2719.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2737.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2743.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2755.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2758.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2806.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2818.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2833.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2842.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2848.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2853.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2864.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2869.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2886.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2899.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2900.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2904.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2953.JPG", alt: "Exterior at dawn", },
  { src: "/Disney-2025-IMG/IMG_2969.JPG", alt: "Exterior at dawn", },
];

export default function Page() {
  return (
    <ProjectPage
      title="Disney 2025"
      subtitle="A magical journey through Disneyland and California Adventure."
      summary="Capturing the vibrant energy and unique experiences of the parks through dynamic videos and photos."
    //   heroMedia={{ kind: "image", src: "/Disney-2025-IMG/IMG_2611.JPG", poster: "/Disney-2025-IMG/IMG_2953.JPG", alt: "Disney 2025 hero" }}
      heroMedia={{ kind: "image", src: "/Disney-2025-IMG/IMG_2611.JPG", alt: "Disney 2025 hero" }}
      heroBackground={{ src: "/Disney-2025-IMG/IMG_2611.JPG", alt: "The Artist" }}
      story={story}
      images={images}
    />
  );
}
