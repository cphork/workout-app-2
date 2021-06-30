import Image from 'next/image';
import Link from 'next/link';
import Barbell from '../public/barbell.jpg';
import CurlsCropped from '../public/curlscropped.jpg';
import Silohuette from '../public/silhouette.jpg';



export default function Home() {

  return (
    <>
      <div className='lg-images lg:flex justify-evenly lg:mt-16'>
        <div className='barbell lg:flex justify-center flex rounded-xl border-2 border-green-200 w-96 ml-3 mt-4 '>
          <Image className='ml-3' width='530' height='820' src={Barbell} alt='buff lady' />
        </div>

        <div className='hidden curls lg:flex justify-center flex rounded-xl border-2 border-green-200 w-96 ml-3 mt-4 '>
          <Image className='ml-3' width='530' height='820' src={CurlsCropped} alt='buff lady' />
        </div>

        <div className='hidden silhouette lg:flex justify-center flex rounded-xl border-2 border-green-200 w-96 ml-3 mt-4 '>
          <Image className='ml-3' width='530' height='820' src={Silohuette} alt='buff lady' />
        </div>
      </div>

      <Link href='/home'><h1 className='mb-16 underline lg:hover:text-green-200 text-center text-white font-mono mt-4 uppercase'>Take Me To The Workouts</h1></Link>

      {/* BLOGS LINKED TO EXTERNAL SOURCE */}
      {/* <p className='font-perm text-center text-2xl text-green-200'>Fitness Blogs</p>
      <a href='https://www.nerdfitness.com/blog/' target="_blank" rel="noopener noreferrer" ><h1 className='underline text-center text-white font-mono mt-4 lg:hover:text-green-200'>Nerd Fitness</h1></a>
      <a href='https://lovesweatfitness.com/blog/' target="_blank" rel="noopener noreferrer"><h1 className='underline text-center text-white font-mono mt-4 lg:hover:text-green-200'>Love Sweat Fitness</h1></a>
      <a href='https://breakingmuscle.com/' target="_blank" rel="noopener noreferrer"><h1 className='underline text-center text-white font-mono mt-4 lg:hover:text-green-200'>Breaking Muscles</h1></a>
      <a href='https://www.reebok.com/us/blog?SSAID=314743&cm_mmc=Rbkaffiliates_SAS-_-314743-_-None-_-banner-_-dv%3AeCom-_-cn%3A450685-_-pc%3ANone&cm_mmc1=US&cm_mmc2=reebok-NA-eCom-Affiliates-314743-None-None-US-450685-None&dclid=CjkKEQjw8cCGBhCvz_fn4fTZ49wBEiQA_OrQTHKFeNas5Oyl2xTWg18EaqhQbGXhYl1SXfubE0dBlx3w_wcB&sscid=61k5_sqpes' target="_blank" rel="noopener noreferrer"><h1 className='underline text-center mb-16 text-white font-mono mt-4 lg:hover:text-green-200'>Reebok Fitness Blog</h1></a> */}
    </>
  )
}
