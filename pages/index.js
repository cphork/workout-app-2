import Image from 'next/image';
import Link from 'next/link';
import Muscles from '../public/muscles.gif';


export default function Home() {

  return (
    <>
      <div className='lg:flex justify-center mb-24 mt-24 flex justify-center'>
        <Image className='ml-3' width='370' height='420' src={Muscles} alt='buff lady' />
      </div>
      <Link href='/home'><h1 className='mb-16 underline lg:hover:text-green-200 text-center text-white font-mono mt-4 uppercase'>Take Me To The Workouts</h1></Link>

      {/* BLOGS LINKED TO EXTERNAL SOURCE */}
      <p className='font-perm text-center text-2xl text-green-200'>Fitness Blogs</p>
      <a href='https://www.nerdfitness.com/blog/' target="_blank" rel="noopener noreferrer" ><h1 className='underline text-center text-white font-mono mt-4 lg:hover:text-green-200'>Nerd Fitness</h1></a>
      <a href='https://lovesweatfitness.com/blog/' target="_blank" rel="noopener noreferrer"><h1 className='underline text-center text-white font-mono mt-4 lg:hover:text-green-200'>Love Sweat Fitness</h1></a>
      <a href='https://breakingmuscle.com/' target="_blank" rel="noopener noreferrer"><h1 className='underline text-center text-white font-mono mt-4 lg:hover:text-green-200'>Breaking Muscles</h1></a>
      <a href='https://www.reebok.com/us/blog?SSAID=314743&cm_mmc=Rbkaffiliates_SAS-_-314743-_-None-_-banner-_-dv%3AeCom-_-cn%3A450685-_-pc%3ANone&cm_mmc1=US&cm_mmc2=reebok-NA-eCom-Affiliates-314743-None-None-US-450685-None&dclid=CjkKEQjw8cCGBhCvz_fn4fTZ49wBEiQA_OrQTHKFeNas5Oyl2xTWg18EaqhQbGXhYl1SXfubE0dBlx3w_wcB&sscid=61k5_sqpes' target="_blank" rel="noopener noreferrer"><h1 className='underline text-center mb-16 text-white font-mono mt-4 lg:hover:text-green-200'>Reebok Fitness Blog</h1></a>
    </>
  )
}
