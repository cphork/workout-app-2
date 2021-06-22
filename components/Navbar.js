import Link from 'next/link';
// import Image from 'next/image';
// import dumbBells from '../public/dumbells.jpg'


const Navbar = () => {
    return (
        <>
            <nav className="nav flex flex-wrap items-center justify-between px-4">
                <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">

                    {/* <Image className="w-24" src={dumbBells} alt='dumbbells logo' /> */}
                    <p className='font-perm text-green-200'>[]=[]</p>
                    <Link href='/'><a className="font-semibold text-xl tracking-tight text-green-200 font-perm text-3xl ml-4 mr-4">Workout App</a></Link>
                    <p className='font-perm text-green-200'>[]=[]</p>

                </div>

                <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">

                    <span className="navicon flex items-center relative"></span>
                </label>


                <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                    <li className="border-t md:border-none">
                        <Link href='/home'>
                            <a className="block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker font-mono">Home</a>
                        </Link>
                    </li>


                    <li className="border-t md:border-none">
                        <Link href='/arms'>
                            <a className="block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker font-mono">Arms</a>
                        </Link>
                    </li>

                    <li className="border-t md:border-none">
                        <Link href='/legs'>
                            <a className="block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker font-mono">Legs</a>
                        </Link>
                    </li>

                    <li className="border-t md:border-none">
                        <Link href='/glutes'>
                            <a className="block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker font-mono">Glutes</a>
                        </Link>
                    </li>

                    <li className="border-t md:border-none">
                        <Link href='/about'>
                            <a className="block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker font-mono">About</a>
                        </Link>
                    </li>

                    <li className="border-t md:border-none">
                        <Link href='/stopwatch'>
                            <a className="block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker font-mono">StopWatch</a>
                        </Link>
                    </li>

                    <li className="border-t md:border-none">
                        <Link href='/timer'>
                            <a className="block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker font-mono">Timer</a>
                        </Link>
                    </li>



                </ul>
            </nav>
        </>


    );
}

export default Navbar;
