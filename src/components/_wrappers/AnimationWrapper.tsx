/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { cn } from "../../utilities/utility";

const AnimationWrapper = ({
  children,
  type,
  className,
}: {
  children: any;
  className?: any;
  type: any;
}) => {
  // const {init, wiv, trans} = getAnimationConfig(type);
  return (
    <motion.div
      initial={type.initial}
      whileInView={type.whileInView}
      transition={type.transition}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
