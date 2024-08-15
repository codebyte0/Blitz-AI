import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 data-aos="fade-up" className='tagline mb-6 text-center text-n-1/50'>Crafting beautiful content with Blitz-AI, the platform trusted by leading companies.</h5>
      <ul data-aos="fade-up" className="flex">
        {companyLogos.map((item, index) => (
          <li key={index} className='flex items-center justify-center flex-1 h-[8.5rem]'>
            <img src={item} height={28} width={124} alt={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyLogos
