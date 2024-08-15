import { check } from "../assets"
import { pricing } from "../constants"
import Button from "./Button"
const PricingList = () => {
    return (
        <div className="flex gap-[1.1rem] max-lg:flex-wrap">
            {pricing.map((item) => (
                <div data-aos="fade-up" data-aos-delay={item.aosDelay}
                key={item.id} 
                className={`w-[19rem] max-lg:w-full h-full overflow-hidden bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 even:my-6 
                    ${item.id === "0" ? " px-6 md:my-14 py-[3.2rem]": ""} 
                    ${item.id === "1" ? "px-5" : ""}  
                    ${item.id === "2" ? "bg-conic-gradient p-[0.15rem]" : ""}`}>
                    <div className={`${item.id === "2" ? "px-8 py-11 w-full h-full bg-n-7 rounded-[2rem]" : ""} 
                    ${item.id === "1" ? "[&>h4]:last:text-color-3" : ""} 
                    ${item.id === "0" ? "[&>h4]:first:text-color-2" : ""} `}>
                        <h4 className={`h4 mb-4 text-[#6f42e2]`}>{item.title}</h4>
                        <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>
                        <div className="flex items-center h-[5.5rem] mb-6">
                            {item.price &&
                                <>
                                    <div className="h3">$</div>
                                    <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
                                </>
                            }
                        </div>
                        <Button className={"w-full mb-6"} href={item.price ? "/pricing" : "/contact"} white={!!item.price}>
                            {item.price ? "Get Started" : "Contact us"}
                        </Button>
                        <ul>
                            {item.features.map((feature, index) => (
                                <li key={index} className=" flex items-center py-5 border-t border-n-6 ">
                                    <img src={check} width={24} height={24} alt="Check" />
                                    <p className="body-2 ml-4">{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PricingList
