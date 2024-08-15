import { socials } from "../constants"
import Section from "./Section"
const Footer = () => {

  return (
    <Section crosses className="!px-0 !py-10 ">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">&copy; {new Date().getFullYear()}.
          All Rigt reserved</p>
        <p className="text-neutral-400 relative left-14">@Codebyte</p>
        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <div key={item.id} className="bg-conic-gradient  rounded-full p-[1.1px]">
              <a href={item.url} target="_blank" className="flex items-center justify-center 
                w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 p-2">
                <img className="bg-n-7 w-full h-full rounded-full" src={item.iconUrl}
                  width={16} height={16} alt={item.title} />
              </a>
            </div>
          ))}
        </ul>
      </div >
    </Section >
  )
}


export default Footer
