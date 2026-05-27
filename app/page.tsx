import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifest from "./components/Manifest";
import Positioning from "./components/Positioning";
import Communities from "./components/Communities";
import Hannover from "./components/Hannover";
import Beta from "./components/Beta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifest />
        <Positioning />
        <Communities />
        <Hannover />
        <Beta />
      </main>
      <Footer />
    </>
  );
}
