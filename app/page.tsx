import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import GreatestOutdoors from "./components/GreatestOutdoors";
import Header from "./components/header/Header";
import Live from "./components/Live";
import smallBackground from "./images/smallbackground.webp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Explore />
        <Live />
        <GreatestOutdoors img={smallBackground} title="The Greatest Outdoors" description="Wishlists curated by Airbnb" linkText="Get Inspired" />
      </main> 
      <Footer />
    </>
    
  );
}
