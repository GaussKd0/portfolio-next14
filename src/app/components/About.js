"use client"
import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }} // Estado inicial da animação
            animate={{ opacity: 1, y: 0 }} // Estado final da animação
            transition={{ duration: 1, ease: "easeOut" }} // Duração e tipo de transição
            className="sm:mx-auto max-w-6xl px-4 flex flex-col items-center justify-center p-3 pb-10"
        >
            <h3 className="tracking-[20px] text-center uppercase text-gray-400 text-2xl">Sobre Mim</h3>
            <div className="text-center mt-4">
                <p className="text-slate-400 text-lg">
                    Sou um estudante de Engenharia da Computação em busca de uma oportunidade que me permita adquirir experiência no campo profissional e intelectual da minha área de estudo.

                    Desde uma idade precoce, manifestei uma profunda paixão por computadores, o que me levou a iniciar minha exploração nesse domínio em tenra idade. Em 2021, iniciei meus estudos em programação, uma jornada que tem sido marcada por minha dedicação constante e interesse em aprimorar minhas habilidades.

                    Embora tenha desenvolvido alguns projetos até o momento, reconheço que ainda estou no início da minha trajetória e estou comprometido em aperfeiçoar minhas habilidades e conhecimentos continuamente. Estou ansioso para aproveitar esta oportunidade para contribuir com minha paixão e disposição para aprender, enquanto me esforço para crescer tanto pessoal quanto profissionalmente.
                </p>
            </div>
        </motion.div>
    );
}
