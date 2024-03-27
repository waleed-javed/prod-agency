const Chevron = ({ variant }) => {
  return (
    <svg
      className="group-hover:translate-x-1 group-hover:duration-150"
      width={variant == "small" ? "15" : variant == "large" ? "18" : ""}
      height={variant == "small" ? "25" : variant == "large" ? "20" : ""}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.75 8.75L14.25 12L10.75 15.25"
      ></path>
    </svg>
  );
};

export default Chevron;
