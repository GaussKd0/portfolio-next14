"use client"
import React, { useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { gsap } from "gsap";
import animationData from "../../../public/assets/animation.json"; 

export default function Body() {
    const [texto, cont] = useTypewriter({
        words: ["Oi, meu nome é Pedro", "Veja um pouco sobre mim", "Gosto muito de codificar", "Sou apaixonado por tecnologia!"],
        loop: true,
        delaySpeed: 1500
    });

    const container = useRef(null);
    
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
        <section className="py-8">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col-reverse justify-between md:flex-row md:space-x-8">
              <div className="w-full flex flex-col  item-start  md:w-2/4 mt-0 md:mt-28">
                <h1 className="text-3xl lg:text-5xl font-semibold">
                  <span className="mr-3 text-slate-400 ">{texto}</span>
                  <Cursor />
                </h1>
                <p className="text-white text-xl md:text-2xl mb-3 mt-2">Sou estudante de engenharia da computação e estou estudando para me tornar um programador fullstack.</p>
                <div>
                  <button className="bg-blue-400 text-white px-4 py-1 rounded mr-4 mb-2 md:mb-0 hover:bg-blue-600">Veja Mais Sobre Mim</button>
                  <button className="bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400">Entre Em Contato Comigo</button>
                </div>
                <h1 className="text-slate-400 text-xl">Estuando e se especializando para conseguir a minha primeira vaga como dev</h1>
              </div>
    
              <div className="md:w-1/2 z-auto pt-2 md:mt-0">
                {/* Renderizar apenas um container para o SVG */}
                <div className="container" ref={container} style={{ opacity: 1 }}></div>
              </div>
            </div>
          </div>
        </section>
    );
}
