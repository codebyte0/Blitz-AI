import load1 from '../assets/load1.gif'

const Generating = ({ className }) => {
  return (
      <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
        <img src={load1} className='w-5 h-5 mr-4' alt='loading' />
        Blitz-AI is Generating
      </div>

  )
}

export default Generating
// 3d00dd