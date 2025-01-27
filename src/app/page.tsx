import HeroSection from "../components/hero-section";

import heroPic from "../../public/images/hero-image-list.png";

export default function Home() {
  return (
    // In figma `Page body` -> `main`
    <main className='mx-auto my-0 flex min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB] p-4'>
      <HeroSection
        title='Premium abstract images'
        bullets={[
          "Minimum 5K image resolution",
          "Various format variants available",
          "Retina display support"
        ]}
        imageUrl={heroPic.src}
        alt='An abstract arty image'
      />
    </main>
  );
}
