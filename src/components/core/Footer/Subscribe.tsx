"use client";
import React from "react";
import { useForm } from "react-hook-form"; 

type Formdata = {
  email: string;
};

const Subscribe = () => {
    const { register, handleSubmit } = useForm<Formdata>();

    const onSubmit = async (data: Formdata) => {
        alert(data)
    };

    return (
        <div className="w-[90%] sm:w-[85%] md:[70%] lg:w-[65%] mx-auto rounded-lg 
        bg-purple-50 text-black py-3 px-4 flex flex-col sm:flex-row items-center gap-5">
            <div className="flex items-center justify-between gap-4 flex-col md:flex-row w-full">
                <h2 className="text-center sm:text-left">Subscribe to our newsletter</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-row items-center gap-3"
                >
                    <div className="w-full relative text-sm min-w-32 sm:min-w-52 md:min-w-56">
                        <input
                            type="text"
                            {...register("email", {})}
                            className={`mt-1 w-full py-1.5 px-2 border border-black 
                            rounded-lg focus:outline-none placeholder:text-black bg-transparent`}
                            placeholder="email"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`bg-purple-500 text-white h-9 w-24 rounded-lg text-xs px-3`}
                    >
            Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
