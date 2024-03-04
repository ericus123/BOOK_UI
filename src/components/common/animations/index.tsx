import { motion } from "framer-motion";
import { ReactNode } from "react";

const ImageCardRotate = ({
  children,
  degree
}: {
  children: ReactNode;
  degree?: number;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: degree || 45 }}
      whileTap={{
        scale: 0.8,
        rotate: -180,
        borderRadius: "100%"
      }}>
      {children}
    </motion.div>
  );
};

export default ImageCardRotate;
