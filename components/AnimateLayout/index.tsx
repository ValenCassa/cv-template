import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
};

const RouteAnimate = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="initial"
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default RouteAnimate;
