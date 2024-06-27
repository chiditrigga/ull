import './App.css';
import Nav from './components/Nav';
import Right from './assets/right.svg';
import Triangle from './assets/triangle.svg';
import Four from './assets/four.svg';
import five from './assets/five.svg';
import React, { useRef } from 'react';
import arrowL from './assets/arrowL.svg';
import arrowR from './assets/arrowR.svg';

import portfolio from './assets/Portfolio.svg'
import { Navigation } from "swiper/modules";

import join1 from './assets/join1.svg'
import join2 from './assets/join2.svg'
import join3 from './assets/join3.svg'
import join4 from './assets/join4.svg'
import join5 from './assets/join5.svg'

import y1 from './assets/y1.svg'
import y2 from './assets/y2.svg'
import y11 from './assets/y11.svg'

import j1 from './assets/j1.svg'
import j2 from './assets/j2.svg'
import j3 from './assets/j3.svg'
import j4 from './assets/j4.svg'


import hero1 from './assets/hero1.svg'
import hero2 from './assets/hero2.svg'
import hero3 from './assets/hero3.svg'



import Footer from './components/Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {

  const swiperRef = useRef(null);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };





  return (
    <>
      <Nav />



      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper md:h-[70vh] pt-5"
        >
         
              <SwiperSlide>
                <img src={hero1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={hero2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={hero3} alt="" />
              </SwiperSlide>
           
        </Swiper>








      <div className="body bg-[#F4F4F4] font-sans">
        <div className="text-[#212121] font-normal px-5 py-5 md:px-20 lg:px-40 xl:px-72 md:py-10 lg:py-15 xl:py-20">
          <div className="bg-white p-5 rounded-xl text-center py-10">
            <p>
              "Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"
            </p>
            <div className="font-medium pt-3">Daniel Izeghs Oratokhai</div>
            <div className="text-[#4E4E4E]">
              Managing Partner at SINC Partners Ltd
            </div>
          </div>
          <div>
            <h1 className="text-center font-medium text-3xl md:text-4xl xl:text-5xl mt-10">
              Network of builders helping startup scale
            </h1>
          </div>
          <div className="flex flex-wrap justify-between mt-10 gap-8">
            <div className="flex flex-col sm:flex-row sm:space-x-8 w-full">
              <div className="w-full my-3 sm:w-1/2 flex">
                <div className="flex items-center w-full">
                  <div className="border border-[#FFFFFF] rounded-xl p-5 py-8 bg-white flex flex-col h-full">
                    <h2 className="text-center font-semibold text-2xl pb-5 text-[#000000]">Work with Service Incubators to expedite your time-to-market</h2>
                    <p className="text-center text-[#4E4E4E] font-semibold">
                      Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building. For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer, and growth marketer to build the MVP of your app or web application and validate it.
                    </p>
                    <div className="mt-auto flex justify-start">
                    <button className="text-black py-2 border-b mt-5 border-black font-semibold flex items-center">Learn More <img src={Right} alt="" className="ml-2" /></button>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="w-full sm:w-1/2 flex">
                <div className="flex items-center w-full">
                  <div className="border border-[#FFFFFF] rounded-xl p-5 py-8 bg-white flex flex-col h-full">
                    <h2 className="text-center font-semibold text-[#000000] text-2xl pb-5">Access funding after your MVP is validated</h2>
                    <p className="text-center text-[#4E4E4E] font-semibold">
                      Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape. Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months.
                    </p>
                    <div className="mt-auto flex justify-start">
                      <button className="text-black py-2 border-b border-black font-semibold flex items-center">Learn More <img src={Right} alt="" className="ml-2" /></button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className='area px-4 sm:px-8 md:px-16 lg:px-32 py-8'>

  <div className='text-center max-w-[600px] mx-auto'>
    <h1 className="text-center font-medium text-3xl md:text-4xl xl:text-5xl mt-10">
      Our Area of Focus
    </h1>
    <p className='font-normal text-[#4E4E4E] mt-4'>
      In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-10">
  <div className="bg-gray-900 text-white p-4 flex flex-col justify-between">
    <div className="text-start text-xl font-medium mb-10">01</div>
    <p className="text-sm">Business Support & Incubation</p>
  </div>
  <div className="bg-orange-500 text-white p-4 flex flex-col justify-between">
    <div className="text-start text-xl font-medium mb-10">02</div>
    <p className="text-sm">On-Demand & As-A-Service</p>
  </div>
  <div className="bg-pink-400 text-white p-4 flex flex-col justify-between">
    <div className="text-start text-xl font-medium mb-10">03</div>
   
    <p className="text-sm">Marketplace & Crowdsourcing</p>
  </div>
  <div className="bg-teal-600 text-white p-4 flex flex-col justify-between">
    <div className="text-start text-xl font-medium mb-10">04</div>
   
    <p className="text-sm">Aggregation & Shared Economy</p>
  </div>
  <div className="bg-pink-300 text-white p-4 flex flex-col justify-between">
    <div className="text-start text-xl font-medium mb-10">05</div>
  
    <p className="text-sm text-center">Decentralized Economy & Digital Assets</p>
  </div>
</div>

<div className='text-center max-w-[600px] mx-auto'>
    <h1 className="text-center font-medium text-3xl md:text-4xl xl:text-5xl mt-10">
    Our Concept Innovations
    </h1>
    <p className='font-normal text-[#4E4E4E] mt-4'>
    We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;
    </p>
  
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-medium mb-4">Service Incubator</h2>
      <p className='text-[#4E4E4E]'>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP
      </p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-medium mb-4">Virtualting</h2>
      <p className='text-[#4E4E4E]'>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-medium mb-4">Diiming</h2>
      <p className='text-[#4E4E4E]'>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice </p>
    </div>
  </div>



  <div className='text-center max-w-[700px] mx-auto'>
    <h1 className="text-center font-medium text-3xl md:text-4xl xl:text-5xl mt-10 " >
    Our Service Incubation Model
    </h1>
    <p className='font-normal text-[#4E4E4E] mt-4'>
    The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.
    </p>
  
  </div>
       
    <div className='my-10'>
      <h2 className='text-start font-medium text-[#212121] text-3xl'>Hypothesis</h2>
      <p className='font-normal text-[#4E4E4E] mt-4'>
      Just a few reasons we know its time for this model within the ecosystem
    </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4"><img src={Triangle} alt="" /></h2>
      <p className='text-[#4E4E4E]'>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP
      </p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4"><img src={Four} alt="" /></h2>
      <p className='text-[#4E4E4E]'>If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4"><img src={five} alt="" /></h2>
      <p className='text-[#4E4E4E]'>Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return</p>
    </div>
  </div>
  <div className="my-10">
  <h2 className="text-start font-medium text-[#212121] text-3xl">Case Study</h2>
  <p className="font-normal text-[#4E4E4E] mt-4">
    See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time.
  </p>
  <div className="flex flex-wrap mt-8 space-y-2 sm:space-y-0">
    <button className="bg-white text-[#212121] font-medium py-2 px-4 sm:px-5 md:px-6 lg:px-8 border-[#212121] border-solid border-0.5 rounded-full mr-2 sm:mr-4 md:mr-8 lg:mr-10 sm:py-3 w-full sm:w-auto">
      Service Incubator Equity
    </button>
    <button className="bg-white text-[#212121] font-medium py-2 px-4 sm:px-5 md:px-6 lg:px-8 border-[#212121] border-solid border-0.5 rounded-full mr-2 sm:mr-4 md:mr-8 lg:mr-10 sm:py-3 w-full sm:w-auto">
      SEEQ Maths Equation
    </button>
    <button className="bg-white text-[#212121] font-medium py-2 px-4 sm:px-5 md:px-6 lg:px-8 border-[#212121] border-solid border-0.5 rounded-full sm:py-3 w-full sm:w-auto">
      Value of my Equity Over Time
    </button>
  </div>
</div>

        
        <div className='flex justify-center md:my-10 my-3 md:mb-24'>
          <div className='text-center'>
            <button className="text-black py-2 border-b border-black font-semibold flex items-center">Become A Service Incubator <img src={Right} alt="" className="ml-2" /></button>
          </div>
        </div>

        <div className='studio'>
        <div className='text-center max-w-[700px] mx-auto my-10'>
    <h1 className="text-center font-medium text-3xl md:text-4xl xl:text-5xl mt-10 my-6" >
    Our Studio Portfolio
    </h1>
    <p className='font-normal text-[#4E4E4E] my-4'>
    Our 2024 Service Incubator Portfolio Companies
    </p>
  
  </div>
      
      <img src={portfolio} alt="" />
      <div className='flex justify-center md:my-10 my-3 md:mb-24'>
          <div className='text-center'>
            <button className="text-black py-2 border-b border-black font-semibold flex items-center">View All Companies <img src={Right} alt="" className="ml-2" /></button>
          </div>
        </div>


        <div className='text-center max-w-[700px] mx-auto my-10'>
    <h1 className="text-center font-medium text-3xl md:text-4xl xl:text-5xl mt-10 my-6" >
    Co-found With Us
    </h1>
    <p className='font-normal text-[#4E4E4E] my-4'>
    We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed
    </p>
  
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl text-white font-medium py-4 px-6 rounded-[100%] bg-black w-fit"> 
        1
      </h2>
      <h3 className=' font-semibold my-5'>We Ideate</h3>
      <p className='text-[#4E4E4E]'>We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.
      </p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl text-white font-medium py-4 px-6 rounded-[100%] bg-[#F47733] w-fit"> 
        2
      </h2>
      <h3 className=' font-semibold my-5'>You Validate</h3>
      <p className='text-[#4E4E4E]'>You join our 3 months inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions
      </p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl text-white font-medium py-4 px-6 rounded-[100%] bg-[#FF78BF] w-fit"> 
        3
      </h2>
      <h3 className=' font-semibold my-5'>You Co-own</h3>
      <p className='text-[#4E4E4E]'>After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
      </p>
    </div>
  </div>
  <div className='flex justify-center md:my-10 my-3 md:mb-24'>
          <div className='text-center'>
            <button className="text-black py-2 border-b border-black font-semibold flex items-center">Build your dream <img src={Right} alt="" className="ml-2" /></button>
          </div>
        </div>

       


        <div className='text-center max-w-[700px] mx-auto my-10'>
    <h1 className="text-center font-medium text-3xl md:text-4xl xl:text-5xl mt-10 my-6" >
    Join Our Entrepreneur In Residence (EIR) Program
    </h1>
    <p className='font-normal text-[#4E4E4E] my-4'>
    Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.
    </p>
  
  </div>


  <Swiper
        ref={swiperRef}
        slidesPerView={2.2}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.8,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3.4,
            spaceBetween: 20,
          },
        }}
        
        
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={join1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={join2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={join3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={join4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={join5} alt="" />
        </SwiperSlide>
      </Swiper>

       

  

     </div>

     <div className='flex justify-center md:my-10 my-3 md:mb-14'>
          <div className='text-center'>
            <button className="text-black py-2 border-b border-black font-semibold flex items-center">Support the Future<img src={Right} alt="" className="ml-2" /></button>
          </div>
          
        </div>

 <div className=' flex justify-center'>
    <img onClick={slidePrev} src={arrowL} alt=""  className='mx-5 cursor-pointer'/>
    <img onClick={slideNext} src={arrowR} alt="" className='mx-5 cursor-pointer'/>
   </div>
</div>
<div className='text-center max-w-[700px] mx-auto'>
    <h1 className="text-center font-medium text-3xl md:text-4xl xl:text-5xl mt-10 my-6" >
    SINC Investors Network
    </h1>
    <p className='font-normal text-[#4E4E4E] py-4'>
    Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest. <br /><br />
    <b>Disclaimer:</b>  These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest
    </p>
  










  </div>
  <div className='lg:px-28 px-5 md:px-28 text-[#4E4E4E] md:text-lg mt-5'><b className=' text-black'>Micro Angel Investors & Service incubators</b>  (Invest from $500 & above)</div>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5 lg:px-28 px-5 md:px-28">
      
  <div className=" bg-transparent  p-4 flex flex-col justify-evenly border-y-[#A4A4A4] border">
    <div className="text-start text-xl text-black font-medium mb-10 ">Deal 1</div>
    <p className="text-sm text-[#4E4E4E]">✓ Idea Stage: <b>$5k for 5% Equity</b>  <br />
✓ Expected Revenue at This Stage: <b>$0/mth</b>  <br />
✓ Duration of Raise: <b>1mth</b>  <br />
✓ Who Can Invest: <b>People with Domain Expertise and Advisors</b>   </p>
  </div>

  <div className=" bg-transparent  p-4 flex flex-col justify-evenly border-y-[#A4A4A4] border">
    <div className="text-start text-xl text-black font-medium mb-10 ">Deal 2</div>
    <p className="text-sm text-[#4E4E4E]">
      
    ✓ Build Stage: <b>$25k worth of service for 10% Equity</b>  <br />
     ✓ Expected Revenue at This Stage: <b> $100+/mth </b><br />
      ✓ Duration of Raise: <b>1-3mths</b>  <br />
       ✓ Who Can Invest: <b>Developers, Engineers, Growth Marketers</b> 
        </p>
  </div>

  <div className=" bg-transparent  p-4 flex flex-col justify-evenly border-y-[#A4A4A4] border">
    <div className="text-start text-xl text-black font-medium  ">Deal 3</div>
    <p className="text-sm text-[#4E4E4E]">✓ Validation Stage: <b>$50k for 5% Equity</b>  <br />
     ✓ Expected Revenue at This Stage: <b>$1k+/mth</b>  <br />
      ✓ Duration of Raise: <b>3-6mths</b>  <br />
       ✓  Who Can Invest: <b>Everyone</b>   </p>
  </div>

  <div className=" bg-transparent  p-4 flex flex-col justify-evenly border-y-[#A4A4A4] border">
    <div className="text-start text-xl text-black font-medium mb-10 ">Deal 4</div>
    <p className="text-sm text-[#4E4E4E]">✓ Traction Stage: <b>$125k worth of service for 5% Equity</b> <br />
     ✓ Expected Revenue at This Stage: <b>$5k+/mth</b> <br />
      ✓ Duration of Raise: <b>6-12mths</b> <br />
       ✓ Who Can Invest: <b>Media, Influencers, Celebrity, Platform Owners</b>   </p>
  </div>
  

</div>
    

<div className='lg:px-28 px-5 md:px-28 text-[#4E4E4E] md:text-lg'><b className=' text-black'>Angel Investors & Venture Capital</b>  (Invest from $500 & above)</div>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5 lg:px-28 px-5 md:px-28">
      
  <div className=" bg-transparent  p-4 flex flex-col justify-evenly border-y-[#A4A4A4] border">
    <div className="text-start text-xl text-black font-medium mb-10 ">Deal 5</div>
    <p className="text-sm text-[#4E4E4E]">✓ Pre-seed Stage: <b>$1.5M for 10% Equity</b> <br />
      ✓ Expected Revenue at This Stage: <b>$50k+/mth</b> <br />
        ✓ Duration of Raise: <b>6-18mths</b> <br />
          ✓ Who Can Invest: <b>Angel Investors, VCs, PE, Institutions</b>    </p>
  </div>

  <div className=" bg-transparent  p-4 flex flex-col justify-evenly border-y-[#A4A4A4] border">
    <div className="text-start text-xl text-black font-medium  ">Deal 6</div>
    <p className="text-sm text-[#4E4E4E]">
      
    ✓ Seed Stage: <b>$7.5M for 20% Equity</b> <br />
      ✓ Expected Revenue at This Stage: <b>$250k+/mth</b> <br />
        ✓ Duration of Raise: <b>12-24mths</b> <br />
         ✓ Who Can Invest: <b>VCs, PE, Institutions</b> 
        </p>
  </div>

  <div className=" bg-transparent  p-4 flex flex-col justify-evenly border-y-[#A4A4A4] border">
    <div className="text-start text-xl text-black font-medium  ">Deal 7</div>
    <p className="text-sm text-[#4E4E4E]">
    ✓ IPO Stage: <b>$1.5B for 20% Equity</b> <br />
      ✓ Expected Revenue at This Stage: <b> $1M+/mth </b> <br />
       ✓ Duration of Raise: <b>18-36mths</b> <br />
         ✓ Who Can Invest: <b>The Public</b>  
      
        </p>
  </div>

  <div className=" bg-transparent text-white font-semibold  border-y-[#A4A4A4] border">
    <div className=' bg-black m-2 h-[93%] p-5 flex flex-col justify-evenly '>
   <div>
     Work with Service Incubators (SINC) to expedite your time to market
    </div>
  <div>
  <button className=' bg-[#303030] p-5 rounded-full hover:opacity-50'>Join SINC Network</button>
    </div>
    </div>
    
  </div>
  

</div>


    


<div className='text-center max-w-[700px] mx-auto py-10'>
    <h1 className="text-center font-medium text-3xl md:text-4xl xl:text-5xl mt-10 py-10" >
    Equity jobs
    </h1>
    <p className='font-normal text-[#4E4E4E] my-4'>
    See companies and startups offering equity or a mix of cash and equity for very important position in their company
    </p>
  
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 md:mx-10 py-10">
    <div className="bg-white p-4 rounded-lg shadow-md">
     <img src={j1} alt="" />
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
  
     <img src={j2} alt="" />
  
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
  
     <img src={j3} alt="" />
   
    
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
     <img src={j4} alt="" />
    </div>
  </div>
  <div className='flex justify-center md:py-10 py-3 md:pb-10'>
          <div className='text-center'>
            <button className="text-black py-2 border-b border-black font-semibold flex items-center">Support the Future<img src={Right} alt="" className="ml-2" /></button>
          </div>
          
        </div>


        <div className='text-center max-w-[700px] mx-auto pb-5'>
    <h1 className="text-center font-medium text-3xl md:text-4xl xl:text-5xl mt-10 py-10" >
    Blogs & Resources
    </h1>
      
  </div>

     
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 mt-10 md:mx-10 pb-5">
    <div>
     <img src={y1} alt="" />
     <div className=' flex max-w-[90%] py-8'>
       <div>
      <b> Top Ten Most Powerful Startup. </b> <br /> Top Ten Most Powerful Startup. Top Ten Most Powerful Startup
       </div>
     <div>
      <img src={y11} alt="" />

     </div>
     </div>
    
    </div>
    <div>
     <img src={y2} alt="" />
     <div className=' flex max-w-[90%] py-8'>
       <div>
      <b> Top Ten Most Powerful Startup. </b> <br /> Top Ten Most Powerful Startup. Top Ten Most Powerful Startup
       </div>
     <div>
      <img src={y11} alt="" />

     </div>
     </div>
    
    </div>
    <div>
     <img src={y2} alt="" />
     <div className=' flex max-w-[90%] py-8'>
       <div>
      <b> Top Ten Most Powerful Startup. </b> <br /> Top Ten Most Powerful Startup. Top Ten Most Powerful Startup
       </div>
     <div>
      <img src={y11} alt="" />

     </div>
     </div>
    
    </div>
   
  </div>


  <div className='flex justify-center md:py-10 py-3 md:pb-10'>
          <div className='text-center'>
            <button className="text-black py-2 border-b border-black font-semibold flex items-center">See More Blogs & Resources<img src={Right} alt="" className="ml-2" /></button>
          </div>
          
        </div>


        <div className='flex justify-center font-semibold md:py-10 py-3 md:pb-10'>
          <div className='text-center'>
          As Featured In
          </div>
          
        </div>



      
        <Swiper
        
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper h-[fit] pt-5"
        >
         
              <SwiperSlide>
                <img src={hero1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={hero2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={hero3} alt="" />
              </SwiperSlide>
           
        </Swiper>



        <div className='flex flex-col items-center justify-center px-4 py-10 md:px-34 md:py-20 max-w-[900px] mx-auto'>
  <h1 className='text-center text-3xl md:text-5xl font-semibold mb-5 md:mb-10'>
    Let's build companies that help everyone succeed
  </h1>
  <div className='flex flex-col md:flex-row items-center justify-center mt-5 md:mt-10 space-y-2 md:space-y-0 md:space-x-2'>
    <button className='border border-black px-4 py-2 md:px-5 md:py-3 font-semibold mx-2 rounded-full'>
      SINC With Us
    </button>
    <button className='border border-[#303030] bg-[#303030] text-white font-semibold px-4 py-2 md:px-5 md:py-3 mx-2 rounded-full'>
      Apply to SIP 1.0
    </button>
  </div>
</div>










      </div>

      

      <Footer />
    </>
  );
}

export default App;

