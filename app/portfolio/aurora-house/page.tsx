import { ProjectPage } from "@/app/components/ProjectPage";

const story = [
  "Aurora House wanted a film that felt like waking up in the pines: slow pans, soft natural light, and close-up details that make the space feel tactile.",
  "We kept the crew lean, shot at golden hours, and mixed handheld with a few locked tripod moments to let the architecture breathe.",
  "Delivery included a 45s hero film, 3x social cuts, and 12 stills for the booking site. Grade leans warm to keep the cabin glow." ,
];

const images = [
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80", alt: "Exterior at dawn", span: "wide" },
  { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80", alt: "Living room detail", span: "tall" },
  { src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80", alt: "Window light portrait" },
  { src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80", alt: "Table setting", span: "wide" },
  { src: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&fit=crop&w=900&q=80", alt: "Cabin exterior night", span: "tall" },
  { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80", alt: "Coffee steam detail" },
];

export default function Page() {
  return (
    <ProjectPage
      title="Aurora House"
      subtitle="Launch film and stills for a boutique stay in the pines."
      summary="Cinematic yet intimate—capturing how the cabin actually feels at first light and after dusk."
      heroMedia={{ kind: "video", src: "https://cdn.coverr.co/videos/coverr-festive-lights-9916/1080p.mp4", poster: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80", alt: "Aurora House hero" }}
      story={story}
      images={images}
    />
  );
}
