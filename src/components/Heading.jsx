import Tagline from "./Tagline"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Heading = ({ className, title, text, tag }) => {

  const { ref, inView } = useInView({
    triggerOnce: false, // Set to true if you only want to trigger the animation once
    threshold: 0.01, // Adjust as needed (0.1 means 10% of the element should be visible)
  });
  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="relative z-2"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={headingVariants}
      transition={{ duration: 2 }}
    >
      <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center`}>
        {tag && (
          <Tagline className={"mb-4 justify-center "}>{tag}</Tagline>
        )}
        {title && <h2 className='h2'> {title} </h2>}
        {text && <p className='body-2 mt-4 text-n-4'> {text} </p>}
      </div>
    </motion.div>
  )
}

export default Heading
