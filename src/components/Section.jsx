import SectionSvg from "../assets/svg/SectionSvg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // the animation will tigger everytime when you view this part 
    threshold: 0.1, // how much part of the element should be visible at initial
  })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={SectionVariants}
      transition={{ duration: 2.1 }}
    >
      <div
        id={id}
        className={`
      relative 
      ${customPaddings ||
          `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
          } 
      ${className || ""}`}
      >
        {children}

        <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
        <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

        {crosses && (
          <>
            <div
              className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset
                } pointer-events-none lg:block xl:left-10 right-10`}
            />
            <SectionSvg crossesOffset={crossesOffset} />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Section;
