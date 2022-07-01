import { motion } from "framer-motion";

interface ServiceProps {
  dlay?: number;
  title?: string;
  description?: string;
  icon?: any;
}

export const Service = ({
  dlay = 0,
  description,
  icon,
  title,
}: ServiceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ margin: "150px", once: true }}
      transition={{
        delay: dlay * 0.3,
      }}
      className='md:w-[45vw] mt-10 xl:w-[30vw] h-80 bg-[#151516] rounded-xl flex flex-col justify-center items-center'
    >
      <div className='flex flex-col items-center justify-center'>
        {icon}
        <h1 className='font-Poppins font-bold mt-5 text-xl text-center text-gray-100'>
          {title}
        </h1>
      </div>

      <p className='font-Poppins font-medium text-md text-center mt-6 text-gray-100 px-2 md:px-16'>
        {description}
      </p>
    </motion.div>
  );
};
