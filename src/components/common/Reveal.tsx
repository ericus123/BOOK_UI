import { motion, useAnimation, useInView } from "framer-motion";
import { FC, ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  //   width?: "fit-content" | "100%";
};

export const Reveal: FC<Props> = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        // width,
        overflow: "hidden"
      }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25
        }}>
        {children}
      </motion.div>
    </div>
  );
};

export const RevealThoughts: FC<Props> = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        border: "1px solid red"
      }}>
      <motion.div
        variants={{
          hidden: { marginLeft: 0 },
          visible: { marginLeft: "auto" }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 3,
          delay: 0.25
        }}>
        {children}
      </motion.div>
    </div>
  );
};

export default RevealThoughts;
