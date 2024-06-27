import React from 'react';
import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <div className='bg-[#212121] text-white font-sans'>
      <div className='border-b px-8 md:px-32 py-10 border-[#E9E9E94D] mb-5'>
        <div className='max-w-[700px]'>
          <h1 className="font-medium text-3xl md:text-4xl xl:text-5xl mt-10">
            Newsletter
          </h1>
          <p className='font-normal my-4'>
            Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.
          </p>
          <div className='flex items-center space-x-4'>
            <input type="text" className='p-2 rounded' placeholder="Enter your email" />
            <button className='bg-white text-black px-4 py-2 rounded'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='relative border-b border-[#E9E9E94D]'>
        <div className='flex flex-wrap justify-between px-8 md:px-32 py-10'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={`relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 ${index === 5 ? 'pl-4' : ''}`}>
              {index === 5 && (
                <div className="absolute inset-0 border-l border-[#E9E9E94D]"></div>
              )}
              <h2 className="relative font-medium text-lg mb-4">Header {index + 1}</h2>
              <ul className='relative list-none space-y-2'>
                {Array.from({ length: 6 }).map((_, itemIndex) => (
                  <li key={itemIndex} className='font-normal'>Item {itemIndex + 1}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
