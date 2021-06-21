import Link from 'next/link';
import Image from 'next/image';
import Arms from '../public/arms.jpg';
import Legs from '../public/legs3.jpeg';
import Glutes from '../public/glutes2.jpeg';

export default function Home() {

  return (
    <>
      <h2 className='ml-4 mr-4 uppercase text-center mt-16 font-perm text-m lg:text-2xl text-green-200 underline'>Check Out These Videos!</h2>

      {/* CAROUSEL TO COME */}
      <div className='lg:flex'>
        <div className="lg:flex justify-center max-w-md mx-auto bg-green-500 w-96 mt-8 lg:mt-4 rounded-xl overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <iframe width="390" height="300" src="https://www.youtube.com/embed/QzSpEkMVFqI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center max-w-md mx-auto bg-green-500 w-96 mt-16 lg:mt-4 rounded-xl overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <iframe width="390" height="300" src="https://www.youtube.com/embed/h2CYSMJSRZM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center max-w-md mx-auto bg-green-500 w-96 mt-16 lg:mt-4  rounded-xl overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <iframe width="390" height="300" src="https://www.youtube.com/embed/OIeG3_kY8Yw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>



      <h2 className='uppercase text-center mt-16 font-perm text-m lg:text-2xl text-green-200'>Click Below To Start!</h2>

      {/* ARMS IMAGE */}
      <div className='lg:flex'>
        <div className="lg:mr-8 lg:ml-8 mt-16 mb-16 ml-4 mr-4 group-hover:text-gray-900 rounded-xl overflow-hidden md:max-w-2xl">
          <div>
            <div className="md:flex-shrink-0">
              <Link href='/arms'>
                <a><Image className="h-48 w-full object-cover md:h-full md:w-48" src={Arms} alt="Man looking at item at a store" /></a>
              </Link>
            </div>
            <div className="lg:hover:bg-green-700 p-8 bg-green-200">
              <div className="lg:hidden uppercase tracking-wide text-sm text-black font-semibold text-center">Click Me</div>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">Arms Workout</div>

              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">Learn Techniques To Target Your Arms</p>
              {/* <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> */}
            </div>
          </div>
        </div>


        {/* LEGS IMAGE */}
        <div className="lg:mr-8 mt-16 mb-16 ml-4 mr-4 group-hover:text-gray-900 rounded-xl overflow-hidden md:max-w-2xl">
          <div>
            <div className="md:flex-shrink-0">
              <Link href='/legs'>
                <a><Image className="h-48 w-full object-cover md:h-full md:w-48" src={Legs} alt="Man looking at item at a store" /></a>
              </Link>
            </div>
            <div className="lg:hover:bg-green-700 p-8 bg-green-200">
              <div className="lg:hidden uppercase tracking-wide text-sm text-black font-semibold text-center">Click Me</div>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">Legs Workout</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">Power Through These Leg Workouts</p>
              {/* <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> */}
            </div>
          </div>
        </div>

        {/* GLUTES IMAGE */}
        <div className="lg:mr-8 mt-16 mb-16 ml-4 mr-4 rounded-xl overflow-hidden md:max-w-2xl">
          <div>
            <div className="md:flex-shrink-0">
              <Link href='/glutes'>
                <a><Image className="h-48 w-full object-cover md:h-full md:w-48" src={Glutes} alt="Man looking at item at a store" /></a>
              </Link>
            </div>
            <div className="lg:hover:bg-green-700 p-8 bg-green-200">
              <div className="lg:hidden uppercase tracking-wide text-sm text-black font-semibold text-center">Click Me</div>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">Glutes Workout</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">Burn Your Glutes For Tighter Buns!</p>
              {/* <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> */}
            </div>
          </div>
        </div>
      </div>


      {/* BLOGS LINKED TO EXTERNAL SOURCE */}
      {/* <p className='font-perm text-center text-2xl text-green-200'>Fitness Blogs</p>
      <a href='https://www.nerdfitness.com/blog/' target="_blank"><h1 className='underline text-center text-white font-mono mt-4'>Nerd Fitness</h1></a>
      <a href='https://lovesweatfitness.com/blog/' target="_blank"><h1 className='underline text-center text-white font-mono mt-4'>Love Sweat Fitness</h1></a>
      <a href='https://breakingmuscle.com/ target="_blank"'><h1 className='underline text-center text-white font-mono mt-4'>Breaking Muscles</h1></a>
      <a href='https://www.reebok.com/us/blog?SSAID=314743&cm_mmc=Rbkaffiliates_SAS-_-314743-_-None-_-banner-_-dv%3AeCom-_-cn%3A450685-_-pc%3ANone&cm_mmc1=US&cm_mmc2=reebok-NA-eCom-Affiliates-314743-None-None-US-450685-None&dclid=CjkKEQjw8cCGBhCvz_fn4fTZ49wBEiQA_OrQTHKFeNas5Oyl2xTWg18EaqhQbGXhYl1SXfubE0dBlx3w_wcB&sscid=61k5_sqpes' target="_blank"><h1 className='underline text-center mb-16 text-white font-mono mt-4'>Reebok Fitness Blog</h1></a> */}

    </>
  )
}
