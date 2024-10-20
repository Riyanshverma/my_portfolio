import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-0">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    I’m Riyansh Verma, a Computer Science Engineering student at JK Lakshmipat University, Jaipur. I have a strong passion for Machine Learning and enjoy exploring new algorithms and data analysis techniques. My technical background includes proficiency in Data Structures, Algorithms, Operating Systems, and Database Management Systems, and I’m well-versed in programming languages like C/C++, Java, and Python.
                </p>

                <br />

                <p className="text-xl">
                Throughout my academic journey, I’ve worked on a variety of projects that have helped me hone my skills. I developed an event management system for college clubs using MySQL and Java, built a finite state machine for lift access control with Python (Tkinter), and designed a scalable fingerprint door lock system using Arduino, which enhances security features with an alarm for unauthorized access. I’ve also worked on object identification and tracking, developing a model capable of detecting humans and tennis balls in real time using YOLOv8, OpenCV, and PyTorch.
                </p>
            </div>
        </div>
    );
};

export default About;
