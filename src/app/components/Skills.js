"use client"
import React, { useEffect, useRef } from "react";
import Skill from "./Skill";
import { gsap } from "gsap";
import animationData from "../../../public/assets/hello.json";

export default function Skills() {
    const container = useRef(null); // Defina useRef antes de usar

    const skills = [
        {
            id: "0",
            progress: 40,
            type: "HTML",
        },
        {
            id: "0",
            progress: 15,
            type: "React",
        },
        {
            id: "0",
            progress: 30,
            type: "Next Js",
        },
        {
            id: "0",
            progress: 30,
            type: "Javascript",
        },
        {
            id: "0",
            progress: 40,
            type: "Java",
        },
        {
            id: "0",
            progress: 30,
            type: "React Native",
        },

        {
            id: "0",
            progress: 20,
            type: "Tailwind",
        },

        {
            id: "0",
            progress: 10,
            type: "C++",
        },
        {
            id: "0",
            progress: 40,
            type: "CSS",
        },
        {
            id: "0",
            progress: 40,
            type: "Python",
        },
        {
            id: "0",
            progress: 30,
            type: "Docker",
        },
        {
            id: "0",
            progress: 30,
            type: "C#",
        },
    ];

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const lottie = require("lottie-web");
            const animation = lottie.loadAnimation({
                container: container.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animationData,
            });

            return () => {
                animation.destroy();
            };
        }
    }, []);

    useEffect(() => {
        gsap.from(container.current, { opacity: 1, duration: 1 });
    }, []);

    return (
        <div className="container mx-auto max-w-6xl">
            <h3 className="tracking-[20px] text-center uppercase text-gray-400 text-2xl">Habilidades</h3>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="md:w-1/2 grid grid-cols-3 gap-5">
                    {skills.map((item, index) => (
                        <Skill key={index} item={item} />
                    ))}
                </div>
                <div className="md:w-1/2 z-auto pt-8 md:pt-0 md:pl-8">
                    <div className="container" ref={container}></div>
                    <style jsx>{`
                    .container > svg {
                        width: 100%;
                        height: auto;
                    }
                `}</style>
                </div>
            </div>
        </div>
    );
}