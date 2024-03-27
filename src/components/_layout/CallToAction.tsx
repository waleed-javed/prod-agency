/* eslint-disable @typescript-eslint/no-unused-vars */
import { HeroMotion } from "../../utilities/framesManager";
import Tooltip from "../_aesthetics/ToolTip";
import CallToActionButton from "../_elements/CallToActionButton";
import GenerateText from "../_interaction/GenerateText";
import AnimationWrapper from "../_wrappers/AnimationWrapper";

// sub components
const CallToAction = ({ ctaBtnText, ctaText, toolTip }) => {
  return (
    <>
      <AnimationWrapper type={HeroMotion.ctaConfig.animation.CTA}>
        <div className="flex justify-center py-5">
          <CallToActionButton btnText={ctaBtnText} variant={"large"} />
        </div>

        <AnimationWrapper
          type={HeroMotion.ctaConfig.animation.closeCTA}
          className="flex justify-center text-center"
        >
          <GenerateText words={ctaText} childClassName="poppins-medium" />
        </AnimationWrapper>

        <Tooltip items={toolTip} />
      </AnimationWrapper>
    </>
  );
};

export default CallToAction;
