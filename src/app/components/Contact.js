"use client";
import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = FormData => {
        window.location.href = `mailto:galvaoloureiro15.com?subject=${FormData.subject}&body=${FormData.message},(${FormData.email})`;
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-10">
            <h3 className="tracking-[20px] text-center uppercase text-gray-500 text-2xl">Contato</h3>

            <div className="flex flex-col space-y-4 items-center">
                <div className="flex items-center space-x-2">
                    <EnvelopeIcon className="h-8 w-8 animate-pulse" />
                    <p className="text-lg text-white">galvaoloureiro15@gmail.com</p>
                </div>
                <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-8 w-8 animate-pulse" />
                    <p className="text-lg text-white">Vitoria Da Conquista 45000-000</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-full max-w-md mx-auto mt-8 px-4">
                <input
                    {...register("name")}
                    placeholder="Nome"
                    type="text"
                    className="outline-none bg-slate-400/10 rounded-sm h-12 px-4 text-gray-500 placeholder-gray-500"
                />
                <input
                    {...register("email")}
                    placeholder="Email"
                    type="email"
                    className="outline-none bg-slate-400/10 rounded-sm h-12 px-4 text-gray-500 placeholder-gray-500"
                />
                <input
                    {...register("subject")}
                    placeholder="Assunto"
                    type="text"
                    className="outline-none bg-slate-400/10 rounded-sm h-12 px-4 text-gray-500 placeholder-gray-500"
                />
                <textarea
                    {...register("message")}
                    placeholder="Mensagem"
                    className="outline-none bg-slate-400/10 rounded-sm h-24 px-4 py-2 text-gray-500 placeholder-gray-500"
                ></textarea>

                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-3 rounded-sm"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
