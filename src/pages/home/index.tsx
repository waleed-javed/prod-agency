import { ChatboxColors, Crisp } from "crisp-sdk-web";
import { useEffect } from "react";
import Footer from "../../components/_layout/Footer";
import Hero from "../../components/_layout/Hero";
import ProjectsDisplay from "../../components/_layout/ProjectDisplays";
import { data, people } from "../../data/data";

const HomePage = () => {
  const handleCrispLoad = () => {
    // init crisp widget
    Crisp.configure(import.meta.env.VITE_CRISP_WEBSITE_ID);
    Crisp.setColorTheme(ChatboxColors.Purple);
    Crisp.setAvailabilityTooltip(true);
    Crisp.message.show("text", "Hi, How Can I Help?");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleCrispLoad();
    }, 0.5);

    // Clear the timeout if the component unmounts before the 1 second is over
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="">
      <Hero
        heroBgFill="white"
        bgSpeed="fast"
        heading={data.heroSection.heading}
        subHeading={data.heroSection.subHeading}
        // bannerItems={data.servicesSection.servicesArray}
        tooltip={people}
      />

      <ProjectsDisplay />

      <Footer />
    </div>
  );
};

export default HomePage;
