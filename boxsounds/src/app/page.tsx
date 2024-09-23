import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Vinyl from "@/components/Vinyl";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-slate-50">
    <section>
      <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
                <div className='absolute w-40 -left-3 -top-36 hidden lg:block'>
                  <img src="/snake-1.png" className='w-full'/>
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
                        <Check className="h-5 w-5 shrink-0 text-red-600"></Check>
                        High quality, durable material
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                        <Check className="h-5 w-5 shrink-0 text-red-600"></Check>
                        5 year print guarantee
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                        <Check className="h-5 w-5 shrink-0 text-red-600"></Check>
                        Different vinyl sizes supported
                    </li>
                  </div>
                </ul>

                <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="flex -space-x-4">
                    <img 
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
                        src='/users/user-1.png' 
                        alt='user image'
                    />
                    <img 
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
                        src='/users/user-2.png' 
                        alt='user image'
                    />
                    <img 
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
                        src='/users/user-3.png' 
                        alt='user image'
                    />
                    <img 
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
                        src='/users/user-4.jpg' 
                        alt='user image'
                    />
                    <img 
                        className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100" 
                        src='/users/user-5.jpg' 
                        alt='user image'
                    />
                  </div>
                </div>  

                <br/>
                <div className="flex flex-col justify-between items-center sm:items-start">
                    <div className="flex gap-0.5">
                        <Star className="h-4 w-4 text-red-600 fill-red-600"/>
                        <Star className="h-4 w-4 text-red-600 fill-red-600"/>
                        <Star className="h-4 w-4 text-red-600 fill-red-600"/>
                        <Star className="h-4 w-4 text-red-600 fill-red-600"/>
                        <Star className="h-4 w-4 text-red-600 fill-red-600"/>
                    </div>
                  </div>

                <p><span className="font-semibold">1.250</span> happy customers</p>
          </div>
        </div>
        <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
                <img src="/your-image.png" className="absolute w-40 lg:w-52 left-64 -top-24 select-none hidden sm:block lg:hidden xl:block"/>
                <img src="/line.png" className="absolute w-20 -left-6 -bottom-16 select-none"/>
                <Vinyl className="w-72 h-72 lg:w-80 lg:h-80" imgSrc="/testimonials/1.jpg"/>
            </div>
        </div>
      </MaxWidthWrapper>
    </section>

    {/* value proposition section */}
    <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                What our <span className="relative px-2">customers <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-red-500"/></span> say
              </h2>
              <img src='/snake-2.png' className="w-24 order-0 lg:order-2"/>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
              <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  <Star className="size-5 text-red-600 fill-red-600"/>
                  <Star className="size-5 text-red-600 fill-red-600"/>
                  <Star className="size-5 text-red-600 fill-red-600"/>
                  <Star className="size-5 text-red-600 fill-red-600"/>
                  <Star className="size-5 text-red-600 fill-red-600"/>
                </div>
                <div className="text-lg leading-8">
                  <p>
                    "The vinyl box feels durable and I even got a compliment on the design. Had the case for two and a half months now 
                    and <span className="p-0.5 bg-slate-800 text-white">the image is super clear</span>, on the box I had before, 
                    the image started fading into green-ish color after a couple of weeks. Love it!"
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <img 
                    className="rounded-full size-12 object-cover"
                    src="/users/user-1.png"
                    alt="user"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">Jonathan</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="size-4 stroke-[3px] text-red-600"/>
                      <p className="text-sm">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* second user review */}
              <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  <Star className="size-5 text-red-600 fill-red-600"/>
                  <Star className="size-5 text-red-600 fill-red-600"/>
                  <Star className="size-5 text-red-600 fill-red-600"/>
                  <Star className="size-5 text-red-600 fill-red-600"/>
                  <Star className="size-5 text-red-600 fill-red-600"/>
                </div>
                <div className="text-lg leading-8">
                  <p>
                  "I've had this vinyl box for two and a half months now, and it still feels incredibly durable. I even got a compliment on the design! The image quality is fantastic – 
                  <span className='p-0.5 bg-slate-800 text-white'>super clear</span> and vibrant. On the box I had before, the image started fading 
                  into a greenish color after just a few weeks, but this one is holding up beautifully."
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <img 
                    className="rounded-full size-12 object-cover"
                    src="/users/user-2.png"
                    alt="user"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">Anna</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="size-4 stroke-[3px] text-red-600"/>
                      <p className="text-sm">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </MaxWidthWrapper>
    </section>
  </div>
  );
}
