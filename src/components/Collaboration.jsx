import React, { useState } from 'react';
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { collabApps, collabContent, collabText } from "../constants";
import Section from "./Section";
import { check, logo } from "../assets";
import Button from "./Button";

const Collaboration = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const rotate = () => {
        setRotation(prevRotation => prevRotation + 360);
    };

    const light = () => {
        setTimeout(() => {
            setIsClicked(false);
        }, 3000);
        setIsClicked(true);
    };

    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 data-aos="fade-up" data-aos-once="true" className="h2 mb-4 md:mb-8"> AI Chat App for Seamless Collaboration </h2>
                    <ul className="max-w-[25rem] mb-10 md:mb-14" >
                        {collabContent.map((item) => (
                            <li data-aos="fade-up" data-aos-delay={item.aosDelay} data-aos-once="true" key={item.id} className="mb-3 py-3">
                                <div className="flex items-center">
                                    <img src={check} width={24} height={24} alt="check" />
                                    <h6 className="body-2 ml-5">{item.title}</h6>
                                </div>
                                {item.title && <p className="body-2 mt-3 text-n-4">{item.text}
                                </p>}
                            </li>
                        ))}
                    </ul>
                    <Button
                        onClick={() => {
                            setIsHovered(true);
                            rotate();
                            light();
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="relative border try-now-btn text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 ring-blue-300 pulse-button"
                        data-aos="fade-up"
                    >
                        Try it now
                    </Button>



                </div>
                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p data-aos="fade-up" data-aos-once="true" className="body-2 mb-4 text-n-4 md:mb-15 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                        {collabText}
                    </p>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
                        <div className="relative flex left-1/2 w-[22rem] aspect-square border border-n-6 rounded-full scale-75 -translate-x-1/2 md:scale-100">
                            <div className="flex w-60 m-auto aspect-square border border-n-6 rounded-full">
                                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full !cursor-pointer">
                                    <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full !cursor-pointer">
                                        <img className="cursor-pointer" src={logo} width={48} height={48} style={{ cursor: 'pointer', zIndex: 999 }} alt="brainwave" />
                                    </div>

                                </div>
                            </div>
                            <ul>
                                {collabApps.map((app, index) => (
                                    <li
                                        key={app.id}
                                        className="absolute -top-6 left-[42%] transform -translate-x-1/2 h-[56.5%] origin-bottom tracking-wider"
                                        style={{
                                            transform: `rotate(${rotation + index * 45}deg)`,
                                            transition: 'transform 5s ease',
                                        }}
                                    >
                                        <div className="relative w-[3.2rem] h-[3.1rem]">
                                            <div
                                                className="flex items-center justify-center w-full h-full cursor-pointer bg-n-6 p-1"
                                                style={{
                                                    transform: `rotate(-${rotation + index * 45}deg)`,
                                                }}
                                            >
                                                <div className="hover:scale-110 w-full h-full bg-n-6">
                                                    <img className="w-full h-full object-contain" src={app.icon} alt={app.icon} />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <LeftCurve isHovered={isHovered} />
                            <RightCurve isClicked={isClicked} />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;
