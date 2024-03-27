export const HeroMotion = {
  // HERO
  heroConfig: {
    animation: {
      heroAnimation: {},
      bannerAnimation: {
        initial: { opacity: 0, y: -115 },
        whileInView: { opacity: 1, y: -50 },
        transition: { duration: 0.5, ease: "backIn" },
      },
    },
    CTA: {
      ctaBtnText: "Book A Consultation",
      ctaText: "Trusted by Founders and Entrepreneurs from all over the world",
    },
  },

  // CTA
  ctaConfig: {
    animation: {
      CTA: {
        initial: { opacity: 0, y: 0 },
        whileInView: { opacity: 1, y: 40 },
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      },
      closeCTA: {
        initial: { y: 0 },
        whileInView: { y: 0 },
        transition: { delay: 0.2, duration: 0.3 },
      },
    },

    // wavyBG
    wavyBg: {},
  },
};
