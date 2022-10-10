import React from 'react';
import Lottie from 'lottie-react';
import quiz from '../../assets/quiz.json'
import bg from '../../assets/background.png'


const Hero = () => {
    return (
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-12 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  New Colaboration
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-6xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox
                <br className="hidden md:block" />
                jumps over{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  a lazy dog
                </span>
              </h2>
              <p className="text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <Lottie 
         className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full" animationData={quiz} loop={true} ></Lottie>
          
        </div>
      </div>
    );
};

export default Hero;