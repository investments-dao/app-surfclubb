import Image from 'next/image'

const Logo = () => ( (
  <> 
  <Image src="/logo.svg" alt="Surfclubb-Logo" width={72} height={72} /><span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">

    Surfclubb
  </span></>

  )
  
);

export default Logo;
