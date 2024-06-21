import Hero from "./Hero";
import Hygiene from "./Hygiene";
import Video from "./Video";
import Service from "./Service";
import Pricing from "./Pricing";
import Faq from "./Faq";
const Home = () => {
  const first = {
    title: "Have you considered the hygiene of your car's interior?",
    text: "According to a study by the University of Birmingham, your steering wheel alone hosts over 6 times more bacteria per square centimeter than your phone screen!",
    img: "/src/assets/hygiene.png",
  };
  const second = {
    title: "Mint Condition Every Time",
    text: "Our detailing experts don’t just skim the surface. They delve deep, banishing every speck of grime, gunk, and mystery crumbs. No more forgotten fries or stubborn stains; we bid adieu to pet hair and give your upholstery a new lease of life.",
    img: "/src/assets/carousel7.png",
  };
  return (
    <>
      <Hero></Hero>
      <Hygiene title={first.title} text={first.text} img={first.img}></Hygiene>
      <Hygiene
        title={second.title}
        text={second.text}
        img={second.img}
        reverse={true}
      ></Hygiene>
      <Video></Video>
      <Service></Service>
      <Pricing></Pricing>
      <Faq></Faq>
    </>
  );
};

export default Home;
