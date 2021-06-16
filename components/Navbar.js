import Link from 'next/link';
// import Image from 'next/image';
// import dumbBells from '../public/dumbells.jpg'


const Navbar = () => {
    return (
        <>
            <nav className="nav flex flex-wrap items-center justify-between px-4">
                <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">

                    {/* <Image className="dumbbell" src={dumbBells} alt='dumbbells logo' /> */}

                    <Link href='/'><span className="font-semibold text-xl tracking-tight">Workout App</span></Link>
                </div>

                <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                    <span className="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                    <Link href='/'><li className="border-t md:border-none">
                        <p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</p>
                    </li></Link>


                    <Link href='/arms'><li className="border-t md:border-none">
                        <p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Arms</p>
                    </li></Link>

                    <Link href='/legs'><li className="border-t md:border-none">
                        <p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Legs</p>
                    </li></Link>

                    <Link href='/glutes'><li className="border-t md:border-none">
                        <p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Glutes</p>
                    </li></Link>

                    <Link href='/about'><li className="border-t md:border-none">
                        <p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About</p>
                    </li></Link>

                    <Link href='/stopwatch'><li className="border-t md:border-none">
                        <p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">StopWatch</p>
                    </li></Link>

                    <Link href='/timer'><li className="border-t md:border-none">
                        <p className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Timer</p>
                    </li></Link>



                </ul>
            </nav>
        </>


    );
}

export default Navbar;
