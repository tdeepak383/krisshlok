import React from 'react'
import { CarouselTransition } from './Slider/Slider';

export default function Home() {
    return (
        <div className="mx-auto w-full">
            {CarouselTransition()}
            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}