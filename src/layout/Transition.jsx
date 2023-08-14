import { motion } from "framer-motion";

export default function Transition({ className: classname, children }) {
  return (
    <motion.div
      className={`box ${classname}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
}
