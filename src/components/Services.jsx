import Section from "./Section"
import Heading from "./Heading"
import { service1, service2, service3, check } from "../assets"
import { BlitzServices, BlitzServicesIcons } from "../constants"
import Generating from "./Generating"
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services"

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="Generative AI made for creators" text="Blitz-AI unlocks the potential of AI-powered applications" />
        <div className="relative">
          <div data-aos="fade-up" data-aos-delay={300} data-aos-once="true" className="flex relative z-1 items-center h-[38rem] p-8 border border-n-1/10 mb-5 overflow-hidden rounded-3xl lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="h-full obect-cover md:object-right " width={800} height={30} src={service1} alt="Smartest AI" />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 data-aos="fade-up" data-aos-delay={400} data-aos-once="true" className="h4 mb-4">Smartest AI</h4>
              <p data-aos="fade-up" data-aos-delay={500} data-aos-once="true" className="body-2 mb-[3rem] text-n-3">Blitz-AI unlocks the potential of AI-powered applications</p>
              <ul className="body-2">
                {BlitzServices.map((item, index) => (
                  <li data-aos="fade-up" data-aos-delay={item.aosDelay} data-aos-once="true" key={index} className="flex items-start py-4 border-t border-n-6">
                    <img src={check} width={24} height={24} alt={check} className="mr-3" />
                    <p className="ml-4">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className={"absolute bottom-4 right-4 left-4 border border-n-1/10 lg:left-1/2 lg:bottom-8 lg:-translate-x-1/2 "} />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2 ">
            <div data-aos="fade-up" data-aos-delay={700} data-aos-once="true" className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden ">
              <div className="absolute inset-0">
                <img src={service2}
                  className="w-full h-full object-cover"
                  width={630} height={750}
                  alt="robot" />
              </div>
              <div className="absolute inset-0  flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Advanced Photo Editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">Elevate your images with our AI-powered photo enhancement tools. Experience the difference today!</p>

              </div>
              <PhotoChatMessage />
            </div>

            <div data-aos="fade-up" data-aos-delay={1000} data-aos-once="true" className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] ">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="mb-4 h4">Video Editing</h4>
                <p className="body-2 mb-[2rem] text-n-3">Enhance your videos effortlessly with our AI-powered editing tools. Experience the difference today!</p>

                <ul className="flex items-center justify-between">
                  {BlitzServicesIcons.map((item, index) => (
                    <li key={index}
                      className={`flex justify-center items-center rounded-2xl cursor-pointer ${index === 2 ? "w-[3rem] h-[2.8rem] p-[2px] bg-conic-gradient md:w-[4.55rem] md:h-[4.5rem] " : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15 "} `}>
                      <div className={index === 2 ? "flex justify-center items-center w-full h-full bg-n-7 rounded-[1rem]" : ""}>
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] ">
                <video
                  src={service3}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                  height={400}
                  width={520}
                  playsInline
                  aria-label="Video description or title"
                >
                  Your browser does not support the video tag.
                </video>
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  )
}

export default Services
