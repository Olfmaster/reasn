import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifest from "./components/Manifest";
import Positioning from "./components/Positioning";
import Communities from "./components/Communities";
import Hannover from "./components/Hannover";
import Beta from "./components/Beta";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Schema from "./components/Schema";

export default function Home() {
  return (
    <>
      <Schema />
      <Nav />
      <main>
        <Hero />
        <Manifest />
        <Positioning />
        <Communities />
        <Hannover />
        <Beta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
