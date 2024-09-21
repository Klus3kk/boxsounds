import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
                <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                  <img src='/snake-1.png" className="w-full'/>
                </div>
                <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 
                text-5xl md:text-6xl lg:text-7xl">
                  Your Image on a <span className="bg-red-600 px-2 text-white">Custom</span> Vinyl Box
                  </h1>
                  <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                    Create Your <span className="font-semibold">Custom</span> Vinyl Box with <span className="font-semibold">Personalized Photos</span> and <span className="font-semibold">Sounds! </span> 
                    BoxSounds allows you to create your own custom vinyl box with personalized sounds - it's more than just a box, it's a memory!
                  </p>

                  <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                    <div className="space-y-2">
                      <li className="flex gap-1.5 items-center text-left">
                        High quality, durable material
                      </li>
                    </div>
                  </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
