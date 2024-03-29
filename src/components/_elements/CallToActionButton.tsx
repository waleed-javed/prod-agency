import { Crisp } from "crisp-sdk-web";
import Chevron from "../_interaction/Chevron";

const CallToActionButton = ({ btnText, variant }) => {
  const handleOnBtnClick = () => {
    Crisp.chat.open();
  };

  return (
    <>
      {variant == "large" && (
        <CallToActionButtonLarge
          btnText={btnText}
          handleOnClick={handleOnBtnClick}
        />
      )}
      {variant == "small" && (
        <CallToActionButtonSmall
          btnText={btnText}
          handleOnClick={handleOnBtnClick}
        />
      )}
    </>
  );
};

export default CallToActionButton;

const CallToActionButtonSmall = ({ btnText, handleOnClick }) => {
  return (
    <>
      <button
        onClick={handleOnClick}
        className="shadow-3xl group relative inline-block cursor-pointer rounded-full p-px text-white no-underline"
      >
        <div className="poppins-semibold bg-gmzBackgroundDark group relative z-10 flex h-10 items-center space-x-2 rounded-full px-1.5 py-1 text-xs ring-1 ring-white/10 hover:drop-shadow-md md:px-4 md:py-3 ">
          <span>{btnText}</span>
          <Chevron variant={"small"} />
        </div>
      </button>
    </>
  );
};

const CallToActionButtonLarge = ({ btnText, handleOnClick }) => {
  return (
    <>
      <button
        onClick={handleOnClick}
        className="group relative inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl shadow-purple-950"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(192,132,252,0.7)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="bg-gmzBackgroundDark relative z-10 flex items-center space-x-2 rounded-full  px-2 py-1 text-xs ring-1 ring-white/10 md:px-4 md:py-3 md:text-lg lg:text-xl ">
          <span>{btnText}</span>
          <Chevron variant="large" />
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </>
  );
};
