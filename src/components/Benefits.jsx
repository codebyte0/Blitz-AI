import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.1,
      delay: 0.5,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Set to true if you only want to trigger the animation once
    threshold: 0.05, // Adjust as needed (0.1 means 10% of the element should be visible)
  });

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Smart Chatting Made Easy with Blitz-AI"
        />
        <motion.div
          className="flex flex-wrap gap-10 mb-10"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {benefits.map((item, i) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ delay: i * 0.3, duration: 1 }}
              className="bg-conic-gradient block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] hover:scale-105 transition-transform"
              style={{
                borderTopRightRadius: "100%",
                borderBottomRightRadius: "1.5rem",
                borderBottomLeftRadius: "1.5rem",
                borderTopLeftRadius: "2.3rem",
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    className="pointer-events-auto cursor-pointer"
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider pointer-events-auto cursor-pointer">
                    Explore more
                  </p>
                  <Arrow className="pointer-events-auto cursor-pointer" />
                </div>
              </div>

              {item.light && <GradientLight />}
              <div
                className="border absolute inset-0.5 bg-n-8"
                style={{
                  clipPath: "url(#benefits)",
                  borderTopRightRadius: "23%",
                  borderBottomRightRadius: "1.5rem",
                  borderBottomLeftRadius: "1.5rem",
                  borderTopLeftRadius: "1.8rem",
                }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-30">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Benefits;
