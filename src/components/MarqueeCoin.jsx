
// ASSETS IMPORTS
import logo from '/assets/images/logo.png';

const MarqueeCoin = () => {
  return (
    <div className='flex items-center justify-center mx-10'>
        <img className='w-12 md:w-28' src={logo} alt="img" />
        <span className='text-2xl md:text-5xl font-bang text-brown'>GOEE</span>
    </div>
  )
}

export default MarqueeCoin;