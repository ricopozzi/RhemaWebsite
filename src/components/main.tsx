import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsWordpress } from "react-icons/bs";

const goldTextGradient =
  "text-transparent bg-clip-text bg-gradient-to-br from-[#f0d4a1] to-[#d69722]";

export const Main = () => {
  return (
    <section className='min-h-[100vh]'>
      <div className='font-Poppins text-3xl  flex mx-auto max-w-[800px] h-[35vh] justify-center items-center pt-32 flex-col'>
        <h1 className='font-Poppins font-semibold text-gray-200 text-4xl lg:text-[60px] text-center leading-normal'>
          O seu Software com
        </h1>
        <h2 className=' font-Poppins font-extrabold text-4xl lg:text-[60px] text-center leading-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold'>
          Performance e Agilidade
        </h2>
      </div>
      <div className=' max-w-[1000px] md:p-10 min-h-72 md:rounded-2xl mt-20 bg-[#151516] flex flex-col md:flex-row mx-auto shadow-2xl shadow-black'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 1.4 }}
          className='bg-circular bg-no-repeat h-full mx-auto max-w-[300px] flex justify-center items-center'
        >
          <Image
            src={"/phone.png"}
            objectFit='contain'
            width={300}
            height={300}
            className=''
          />
        </motion.div>
        <div className='py-10 flex flex-col justify-evenly mx-auto md:px-10'>
          <h1
            className={`${goldTextGradient} px-3 text-3xl text-center font-Poppins font-bold`}
          >
            Time com profissionais de Elite
          </h1>
          <p className='text-gray-200 mt-4 md:mt-0 text-xl text-center px-10'>
            Utilizamos a tecnologia para encontrar a melhor solução para você
          </p>
        </div>
      </div>
      <div className='flex gap-x-20 justify-center mt-14'>
        <Image
          src='/wordpress.svg'
          objectFit='contain'
          width={60}
          height={60}
        />
        <Image
          src='/reactlogo.svg'
          objectFit='contain'
          width={60}
          height={60}
        />
        <Image src='/vercel.svg' objectFit='contain' width={60} height={60} />
      </div>
    </section>
  );
};
