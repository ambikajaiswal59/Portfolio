import React from "react";
import ParticlesBackground from "../backgroundEffect/ParticlesBackground";
import { Button } from "@mui/material";
//import FemaleImage from "../assets/female-Programmer.png"
import FemaleImage from "../assets/profileImage.png"

const Home = () => {
    return (
        <>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left side - Text Section */}
                <div>
                    <p className="text-xs md:text-base font-medium text-secondary tracking-wider">
                        Hi, I'm ! 🌟
                    </p>
                    <div className="w-[6rem] md:w-[8rem] border-t-2 border-secondary mt-1 ml-6"></div>
                    <p className="text-4xl md:text-5xl font-bold text-primary tracking-wide my-2 leading-tight whitespace-nowrap">
                        Ambika Jaiswal<span className="text-secondary">.</span>
                    </p>

                    <p className="text-lg md:text-2xl font-semibold  text-secondary tracking-wide">
                        Software Engineer
                    </p>
                    <p className="text-sm md:text-base font-regular  text-secondary tracking-wide">
                        3 Years of experience in Website Development.
                    </p>
                    <p className="text-sm md:text-base font-regular italic text-secondary tracking-wide">
                        "Innovation distinguishes between a leader and a follower."
                    </p>
                    <p className="my-10 text-xs md:text-base font-medium text-secondary w-full lg:w-2/3 tracking-wide">
                        With a creative mindset, I specialize in UI/UX design, efficient coding, responsive web development, and database management. At <span className="text-primary"> ML Infomap Pvt Ltd,</span> I craft user-friendly applications that blend intuitive design with robust functionality, delivering impactful and accessible solutions.
                    </p>
                </div>

                {/* Right side - Vector Image */}
                {/* <div className="flex justify-center items-center">
                    <img
                        src={FemaleImage}
                        alt="Creative Vector"
                        className="max-w-full lg:w-3/4"
                    />


                </div> */}

                <div className="relative flex justify-center items-center">

                    {/* Background Circle */}
                     <div className="absolute w-64 h-64 md:w-80 md:h-80 border-10 border-primary-500 rounded-full opacity-50"></div>

                    {/* Profile Image */}
                    <img
                        src={FemaleImage} // Replace with your image path
                        alt="profile Image"
                        className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary-700 ring-offset-amber-100"
                    />

                   

                </div>


            </div>
            <div>
                <a href="/AmbikaJaiswal.pdf" download>
                    <Button variant="contained" color="primary" size="small">
                        Download Resume
                    </Button>
                </a>
            </div>
            {/* <div className="mt-10 flex items-center w-fit cursor-pointer duration-500 delay-100 hover:-translate-y-1">
        <p className="text-xs md:text-sm font-medium italic text-primary font-mono">
          Discover more about me
        </p>
        <img src={arrowdown} alt="arrowdown" className="w-8 h-8 mt-1" />
      </div> */}
        </>
    );
};

export default Home;
