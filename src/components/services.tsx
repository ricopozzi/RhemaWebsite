import { Service } from "./service";
import { AiOutlineDesktop } from "react-icons/ai";
import { BiMobileAlt } from "react-icons/bi";
import { BsShop } from "react-icons/bs";

export const Services = () => {
  return (
    <section className='w-full min-h-80 flex flex-col justify-center py-8 px-8'>
      <h1
        className='font-Poppins text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f0d4a1] to-[#d69722] 
'
      >
        O que fazemos
      </h1>
      <div className='md:grid md:grid-cols-2 xl:grid-cols-3 justify-items-center w-full gap-y-40 lg:mt-7 lg:mx-auto'>
        <Service
          title='Websites e Landing page'
          description='Nós fazemos seu website para atender todas as suas demandas'
          icon={<AiOutlineDesktop size={34} color='#d69722' />}
        />
        <Service
          dlay={2}
          title='Aplicativos Mobile'
          description='Nós fazemos seu aplicativo IOS e Android para atender todas as suas demandas'
          icon={<BiMobileAlt size={34} color='#d69722' />}
        />
        <Service
          dlay={3}
          title='E-Commerce'
          description='Nós fazemos seu e-commerce completo pronto para você vender muito'
          icon={<BsShop size={34} color='#d69722' />}
        />
      </div>
    </section>
  );
};
