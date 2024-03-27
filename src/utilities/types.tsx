export type SpotlightProps = {
  className?: string;
  fill?: string;
};

export type TextGenerateProps = {
  words: string;
  className?: string;
  childClassName?: string;
};

export type FloatingNavProps = {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
};

export type HeroComponentProps = {
  navLinkItems: {
    name: string;
    link: string;
    icon?: JSX.Element | undefined;
  }[];
  subHeading: string;
  bannerItems: BannerItem;
};

export type BannerComponentProps = {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export type BannerItem = {
  title: string;
  link?: string;
  description?: string;
  image?: string;
}[];

export type ServiceComponentProps = {
  services: {
    title: string;
    link: string;
    description: string;
    image?: string;
  }[];
};
