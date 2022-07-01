import Image from "next/image";

export const Header = () => {
  return (
    <nav className='w-[80vw] md:w-4/6 rounded-lg h-16 flex mx-auto '>
      <div className='h-full w-1/4 flex items-center justify-center'>
        <Image
          src='/lightRhema.png'
          width={150}
          height={40}
          objectFit='contain'
        />
      </div>
      <div className='w-5/6 h-full px-5 flex justify-evenly items-center '>
        <div className='text-gray-300 hover:text-gray-50 font-medium tracking-wide cursor-pointer font-Poppins text-lg'>
          Botão
        </div>
        <div className='text-gray-300 hover:text-gray-50 font-medium tracking-wide cursor-pointer font-Poppins text-lg'>
          Botão
        </div>
        <div className='text-gray-300 hover:text-gray-50 font-medium tracking-wide cursor-pointer font-Poppins text-lg'>
          Botão
        </div>
      </div>
    </nav>
  );
};
