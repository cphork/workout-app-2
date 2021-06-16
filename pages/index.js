import Link from 'next/link';
import Image from 'next/image';
import Arms from '../public/arms.jpg';
import Legs from '../public/legs.jpg';
import Glutes from '../public/glutes.jpg';


export default function Home() {
  return (
    <>
      {/* VIDEO PLACE HOLDER */}
      {/* <iframe className='video' width="350" height="300" src="https://www.youtube.com/embed/Vzo-EL_62fQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}


      <div className="max-w-md mx-auto bg-green-500 w-96 mt-16 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <iframe width="390" height="300" src="https://www.youtube.com/embed/Vzo-EL_62fQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="p-8 bg-green-500">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">Check Out This Video</div>
            {/* <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Beginners Full Body Workout</p> */}
            {/* <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> */}
          </div>
        </div>
      </div>

      {/* ARMS IMAGE */}
      <div className="max-w-md mx-auto bg-green-500 w-72 mt-16 group-hover:text-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Link href='/arms'><Image className="h-48  w-full object-cover md:h-full md:w-48" src={Arms} alt="Man looking at item at a store" /></Link>
          </div>
          <div className="p-8 bg-green-500">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">Arms Workout</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">Learn Techniques To Target Your Arms</p>
            {/* <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> */}
          </div>
        </div>
      </div>

      {/* LEGS IMAGE */}
      <div className="max-w-md mx-auto bg-green-500 w-72 mt-16 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image className="h-48 w-full object-cover md:h-full md:w-48" src={Legs} alt="Man looking at item at a store" />
          </div>
          <div className="p-8 bg-green-500">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">Legs Workout</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">Power Through These Leg Workouts!</p>
            {/* <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> */}
          </div>
        </div>
      </div>

      {/* GLUTES IMAGE */}
      <div className="max-w-md mx-auto bg-green-500 w-72 mt-16 mb-16 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image className="h-48 w-full object-cover md:h-full md:w-48" src={Glutes} alt="Man looking at item at a store" />
          </div>
          <div className="p-8 bg-green-500">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">Glutes Workout</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">Burn Your Glutes For Tighter Buns!</p>
            {/* <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> */}
          </div>
        </div>
      </div>
    </>
  )
}
