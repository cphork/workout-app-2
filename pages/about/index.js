import Image from 'next/image';
import MuscleLady from '../../public/musclelady.jpg';



const About = () => {
    return (
        <div className='text-center ml-8 mr-8 lg:ml-44 lg:mr-44 mt-16'>
            <h1 className='uppercase text-2xl font-hyeon text-green-200'>About The App</h1>
            <article className='mt-8 text-lg text-white mb-8'>The purpose of this App is to be able to click on targetted body parts to focus on during your workout. Videos, images, and blog links are available for you to be able to have a more effect workout.</article>

            <div className='border-4 border-indigo-600 lg:border-none'>
                <Image width='370' height='420' src={MuscleLady} alt='muscle lady' />
            </div>
            <article className='text-lg text-white mb-52 mt-16'>This App has been developed using Next.js framework and AWS(Lambda, API Gateway, and Dynamo)to build the backend.  The App has been deployed on Vercel and is available to be viewed in mobile and desktop.  IPad view is underconstruction.</article>
        </div>
    );
}

export default About;