import React from 'react' ;
import User from  './assets/myprofilepic.jpg'  ;
import { RiTwitterFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import orcat1  from "./assets/icons8-maneki.gif";
import aspnet from "./assets/aspnet.png";
import psh from "./assets/pss.png"
import nde from "./assets/nodejs.png"
import reac from "./assets/react.png"

import { ConfettiButton } from "./components/ui/confetti"
import BlurFade from "./components/ui/blur-fade";
import SparklesText from "./components/ui/sparkles-text";


function App() { 
  return (
   <>
       <BlurFade delay={0.5} inView>

   <section className='mt-24 max-w-2xl mx-auto' >
    <div className='flex gap-14 items-center'  >
<div>
  <h1 className='text-4xl font-black'>Hey,I am Ishita🙋</h1>
<p className='font-light text-lg mt-2' >Software Engineer, I Love learning new Skills and implement in new projects ,I also teach children sometimes.  </p>
{/* <div className='flex mt-3 gap-2'>
<a href='' className='text-2xl mt-3'><RiTwitterFill /></a>
<a href='' className='text-2xl mt-3'><FaLinkedin /> </a>
</div> */}
</div>
<img src={User} className="w-40 h-40 object-cover rounded-full" alt=""  />
    </div>

   </section>
   <section className='mt-10 max-w-2xl mx-auto' >
    <h1 className='text-2xl font-black'> About Me </h1>
    <p className='mt-3 text-base'>	I love creating tools that are user friendly,simple and scalable . 
    I have started my journey as a ASP.NET developer, along the way as per requirements of the assigned project 
    took up some Database specific skills and performance tuning of Oracle Procedure/package/function and Automated manual tasks  with Powershell,Python and MSSQL and ,Oracle PL/SQL . 
		Later onwards discovered love for JavaScript and created microservices in node JS integrating Kafka and Oracle PL/SQL/Postgres SQL .
    and working on redesigning from legacy ASP.NET application to REACT as a Frontend developer .</p>
    {/* <img src={orcat1} alt="" className='bg-orange-500 h-15 w-15 mx-auto rounded-md border-red-400' /> */}
   </section> 
<section className='mt-12 max-w-2xl mx-auto' >
<h1 className='text-2xl font-black'>Work Experience & Milestones </h1>
<p className='font-light text-neutral-500'>Below are some brief details of the projects I have worked on,here you Go : </p>

<div className='mt-8'>
<div className='flex justify-between '>
  <div className='flex gap-3' >
  <img src={aspnet} alt='' className='w-12 h-12 font-mono'/>
  <div >
  <h2 className='text-sm' >ASP.NET Webform/MVC /MSSQL</h2>
  <p className='text-xs  font-light'>Application Development and Maintenance</p>
  </div>
  </div>
  <p className='text-neutral-500 font-light text-sm'>Aug 2016 - Dec 2024</p>
</div>
</div>

<div className='mt-6'>
<div className='flex justify-between '>
  <div className='flex gap-3' >
  <img src={psh} alt='' className='w-12 h-12 font-mono'/>
  <div >
  <h2 className='text-sm' >Automation with Powershell/Python/Oracle PLSQL</h2>
  <p className='text-xs  font-light'>Application Development and Maintenance</p>
  </div>
  </div>
  <p className='text-neutral-500 font-light text-sm'>Mar 2016 - Dec 2024</p>
</div>
</div>

<div className='mt-6'>
<div className='flex justify-between '>
  <div className='flex gap-3' >
  <img src={nde} alt='' className='w-12 h-12 font-mono'/>
  <div >
  <h2 className='text-sm' >Microservice with Node JS /TypeScript /Oracle PL/SQL /Kafka JS /axios</h2>
  <p className='text-xs  font-light'>Application Development and Maintenance</p>
  </div>
  </div>
  <p className='text-neutral-500 font-light text-sm'>Mar 2022 - Dec 2024</p>
</div>
</div>

<div className='mt-6'>
<div className='flex justify-between '>
  <div className='flex gap-3' >
  <img src={reac} alt='' className='w-12 h-12 font-mono'/>
  <div >
  <h2 className='text-sm' >Component creation with Tailwind /React JS/ React Router </h2>
  <p className='text-xs font-light'>Application Development and Maintenance</p>
  </div>
  </div>
  <p className='text-neutral-500 font-light text-sm'>Jan 2023 - Dec 2024</p>
</div>
</div>


</section>
<section className='mt-8 max-w-2xl mx-auto mb-16'>
<div>
<h1 className='text-2xl font-black mt-3'>Get in Touch</h1>
<p className='font-light text-neutral-500'>Want to chat? Just shoot me a dm with a direct question on Linkedin and I'll respond whenever I can. I will ignore all soliciting.</p>
<ConfettiButton className="mt-5 px-5 font-light rounded-full" >Text me on LinkedIn</ConfettiButton>
</div>

</section>
</BlurFade>

   </>
  )
}

export default App