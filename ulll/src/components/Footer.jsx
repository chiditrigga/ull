import React from 'react';
import Logo from './Logo.svg'
import sLogo from '../assets/sLogo.svg'
import whats from '../assets/whats.svg'
import nig from '../assets/nig.svg'
import icons from '../assets/icons.svg'

import copy from '../assets/copy.svg'

import GASUS from '../assets/GASUS.svg'

const Footer = () => {
  return (
    <footer className='bg-[#212121] text-white font-sans'>
      <div className='border-b px-8 md:px-32 py-10 border-[#E9E9E94D] pb-5'>
        <div className='max-w-[700px]'>
          <h1 className="font-medium text-3xl md:text-4xl xl:text-5xl mt-5 pb-5">
            Newsletters
          </h1>
          <p className='font-normal my-4'>
            Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.
          </p>
      
  <div className='max-w-[700px]'>
  
    
    <div className='relative flex items-center w-fit'>
      <input type="text" className='p-2 rounded-3xl w-full border border-[#676767] pr-32 bg-transparent' placeholder="Enter your email address" />
      <button className='absolute right-0 bg-white text-black px-4 py-2 rounded-3xl font-semibold '>
        Subscribe
      </button>
    
  </div>
</div>

        </div>
      </div>
      <div className='relative border-b border-[#E9E9E94D]'>
        <div className='flex flex-wrap justify-between px-8  md:px-32  text-[#C9C9C9]'>
          <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 py-5'>
            <img src={Logo} alt="" />
            <p className='font-normal my-4 text-pretty'>
              SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
            </p>
           
          </div>
          <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 py-5'>
            <h2 className="font-medium text-lg mb-4  text-white">Platforms</h2>
            <ul className='list-none space-y-2'>
              <li className='font-normal'>Kofoundme</li>
              <li className='font-normal'>InResidency</li>
              <li className='font-normal'>Service Market</li>
              <li className='font-normal'>Founders School</li>
              <li className='font-normal'>Metty</li>
              <li className='font-normal'>Grantty</li>
              <li className='font-normal'>Boldtell</li>
              <li className='font-normal'>Chekwa</li>
            </ul>
          </div>
          <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 py-5'>
            <h2 className="font-medium text-lg mb-4  text-white">Initiatives</h2>
            <ul className='list-none space-y-2'>
              <li className='font-normal'>Jabi Plains</li>
              <li className='font-normal'>Local Pricing Initiative</li>

              <li className='font-normal'>Scholarship Program</li>
              <li className='font-normal'>SSMN Pricing</li>
              <li className='font-normal'>University STEM</li>
              <li className='font-normal'>University InResidency</li>
              <li className='font-normal flex'>1M Nigeria <img src={nig} alt="" /> Products</li>
              <li className='font-normal'>Founders Festival</li>
              
            </ul>
          </div>
          <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 py-5'>
            <h2 className="font-medium text-lg mb-4  text-white">About Us</h2>
            <ul className='list-none space-y-2'>
              <li className='font-normal'>Who We Are</li>
              <li className='font-normal'>Our People</li>

              <li className='font-normal'>Concept Innovations</li>
              <li className='font-normal'>Our Process</li>
              <li className='font-normal'>Investors Network</li>
              <li className='font-normal'>CSR & Events</li>
              <li className='font-normal'>Careery</li>
              <li className='font-normal'>Career</li>
             
              
            </ul>
          </div>
          <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 py-5'>
            <h2 className="font-medium text-lg mb-4  text-white">More</h2>
            <ul className='list-none space-y-2'>
              <li className='font-normal'>Services</li>
              <li className='font-normal'>Equity Jobs</li>

              <li className='font-normal'>EIR Program</li>
              <li className='font-normal'>Offers</li>
              <li className='font-normal'>Innovation News</li>
              <li className='font-normal'>FAQ</li>
              <li className='font-normal'>Blog & Resources</li>
              <li className='font-normal'>Press</li>
             
              
            </ul>
          </div>
          <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 pl-4 py-5'>
            <div className="absolute inset-0 md:border-l border-[#E9E9E94D]"></div>
            <h2 className="font-medium text-lg mb-4 text-white">Locations</h2>
            <ul className='list-none space-y-2'>
              <li className='font-normal'>Abuja, <br /><br /> Nigeria Lagos, <br /><br /> Nigeria Philadelphia, <br /><br /> USA</li>
              <li className='font-normal flex justify-evenly w-full py-2'>
              <span><img src={sLogo} alt="" /></span>  <span><img src={whats} alt="" /></span>
              </li>
             
            </ul>

          </div>
         
        </div>
       
      </div>
      <div className=' border border-t-[#E9E9E94D] mx-0 py-5 px-5 md:px-32 text-[#C9C9C9]'>
        <div className=' md:flex justify-between'>
            <div className=''>
         Guaranteed 2x on your service or cash investment, usually been the first to invest. <b className=' text-[white]'> Get in early and SINC your guaranty!</b>
         </div>
         <div>
          
         <img className=' py-3' src={GASUS} alt="" /> 
         </div>
        </div>

        <div className=' md:flex justify-between py-3 font-medium'>
          <div className=' flex text-white'>
       <span className=' flex align-middle'> <img className=' md:pb-5' src={copy} alt="" /></span> <span>2023 SINC Partners Ltd. All rights reserved</span> 
          </div>
          <div>
            <span className=' border-b me-2 border-[#C9C9C9] text-white'>
            Privacy Policy
              </span>
              <span className=' border-b me-2 border-[#C9C9C9] text-white'>
              Terms of Service
              </span>
              <span className=' border-b border-[#C9C9C9] text-white'>
              Security
              </span>
          </div>
          <div className='py-3'>
            <img src={icons} alt="" />
          </div>
          
        </div>
        <h3 className=' text-center flex justify-center font-medium py-3' >
          
         <span>
          Web In Nigeria 
          </span><span className=' align-middle flex'>
             <img src={nig} alt="" />
            </span></h3>
       
</div>
    </footer>
  );
};

export default Footer;


