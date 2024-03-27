/* eslint-disable @typescript-eslint/no-unused-vars */
import { HeroMotion } from "../../utilities/framesManager";
import WavyBackground from "../_aesthetics/WavyBackground";
import HeroTitle from "../_interaction/HeroTitle";
import CallToAction from "./CallToAction";

const Hero = ({
  heading,
  bgSpeed = "slow-mo",
  subHeading,
  bannerItems,
  tooltip,
  heroBgFill = "black",
}) => {
  return (
    <>
      <div className="relative flex h-screen w-full flex-col overflow-hidden antialiased md:items-center md:justify-center">
        <WavyBackground
          speed={bgSpeed as "slow-mo"}
          waveWidth={170}
          waveOpacity={0.9}
          backgroundFill={heroBgFill}
        >
          <HeroTitle
            heading={heading}
            subHeading={subHeading}
            heroBgFill={heroBgFill}
          />

          <CallToAction
            toolTip={tooltip}
            ctaBtnText={HeroMotion.heroConfig.CTA.ctaBtnText}
            ctaText={HeroMotion.heroConfig.CTA.ctaText}
          />
        </WavyBackground>

        {/* <motion.div
          initial={HeroMotion.heroConfig.animation.bannerAnimation.initial}
          whileInView={
            HeroMotion.heroConfig.animation.bannerAnimation.whileInView
          }
          transition={
            HeroMotion.heroConfig.animation.bannerAnimation.transition
          }
          className="flex min-h-fit flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-400 antialiased dark:bg-black"
        >
          <InfiniteBanner items={bannerItems} speed="slow" />
        </motion.div> */}
      </div>
    </>
  );
};

export default Hero;
