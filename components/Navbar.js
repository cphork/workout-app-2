import Link from 'next/link';
// import Image from 'next/image';
// import dumbBells from '../public/dumbells.jpg'


const Navbar = () => {
    return (
        <>
            <nav className="nav flex flex-wrap items-center justify-between px-4">
                <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">

                    {/* <Image className="w-24" src={dumbBells} alt='dumbbells logo' /> */}

                    <Link href='/'>
                        <a href='/'><span className="font-semibold text-xl tracking-tight text-green-200 font-perm underline text-3xl">Workout App</span></a>
                    </Link>
                </div>

                <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">

                    <span className="navicon flex items-center relative"></span>
                </label>

                <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                    <Link href='/'>
                        <li className="border-t md:border-none">
                            <a href='/'><p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</p></a>
                        </li>
                    </Link>


                    <Link href='/arms'>
                        <li className="border-t md:border-none">
                            <a href='/arms'><p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Arms</p></a>
                        </li>
                    </Link>

                    <Link href='/legs'>
                        <li className="border-t md:border-none">
                            <a href='/legs'><p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Legs</p></a>
                        </li>
                    </Link>

                    <Link href='/glutes'>
                        <li className="border-t md:border-none">
                            <a href='/glutes'><p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Glutes</p></a>
                        </li>
                    </Link>

                    <Link href='/about'>
                        <li className="border-t md:border-none">
                            <a href='/about'><p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About</p></a>
                        </li>
                    </Link>

                    <Link href='/stopwatch'>
                        <li className="border-t md:border-none">
                            <a href='/stopwatch'><p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">StopWatch</p></a>
                        </li>
                    </Link>

                    <Link href='/timer'>
                        <li className="border-t md:border-none">
                            <a href='/timer'><p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Timer</p></a>
                        </li>
                    </Link>



                </ul>
            </nav>
        </>


    );
}

export default Navbar;
