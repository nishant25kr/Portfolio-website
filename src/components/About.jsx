import React from 'react'
import './About.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import { Navigation } from "swiper";
import img from '../assets/portfolio.png'
import img1 from '../assets/Agroconnect.png'
import img2 from '../assets/construction.png'
// import img3 from '../assets/laptop.jpg'


const projects = [
  { id: 1, image: img2, title: "Construction",techused:"" },
  { id: 2, image: img1, title: "Farmers site" },
  { id: 3, image: img, title: "Portfolio" },
];


export default function About() {
    return (
        <div className="about">
            <div className='row '>
                <div className="col-md-6">
                    <div className="py-20 px-10 m-5 bg-gray-800 text-white">
                        <h2 className="text-4xl font-bold text-center ">About Me</h2>
                        <p className="text-lg text-gray-300  mt-4 max-w-2xl mx-auto">
                            I am a passionate MERN Stack Developer with a strong foundation in MongoDB, Express.js, React, and Node.js. I love building scalable, user-friendly web applications and solving complex problems with efficient code.
                            . I love problem-solving and building efficient applications.
                            With a deep interest in full-stack development, cloud computing, and cybersecurity, I constantly explore new technologies and best practices to enhance my skills. Beyond coding, I enjoy tackling algorithmic challenges and optimizing performance to create seamless digital experiences.
                        </p>
                        <p>
                            💡 What I bring: <br />
                            ✔️ Expertise in building dynamic web applications using React.js & Node.js <br />
                            ✔️ Strong problem-solving and debugging skills <br />
                            ✔️ Knowledge of REST APIs, authentication, and database optimization <br />
                            ✔️ Enthusiasm for learning and staying updated with the latest tech trends
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="py-20 px-10 m-5 bg-gray-800 text-white">
                        <h2 className="text-4xl font-bold text-center ">Projects</h2>
                        <div className="flex justify-center items-center p-10">
                            <div className="relative w-[500px] h-[300px]  laptop_frame rounded-lg overflow-hidden shadow-lg">


                                <div className=" absolute top-[10%] left-[10%] w-[80%] h-[70%]  rounded-md overflow-hidden inside">
                                    <Swiper navigation={true} modules={[Navigation]} className="w-full h-full">
                                        {projects.map((project) => (
                                            <SwiperSlide key={project.id} className="flex justify-center items-center">
                                                <img src={project.image} alt={project.title} className="w-full h-full object-cover img-fluid" />
                                                <h5 className='align-center text-center'>{project.title}</h5>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


            </div>


        </div>
    )
}
