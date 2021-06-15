import Link from 'next/link'


const Navbar = () => {
    return (
        <>
            <nav class="nav flex flex-wrap items-center justify-between px-4">
                <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">

                    <img class="w-16 md:w-auto" src='https://res.cloudinary.com/dejg3dz16/image/upload/v1623797843/dumbbell_2__28b_w_29_fk9bgj.webp' alt='dumbbells logo' />

                    <Link href='/'><span class="font-semibold text-xl tracking-tight">Workout App</span></Link>
                </div>

                <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                    <span class="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                    <Link href='/'><li class="border-t md:border-none">
                        <a href="/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a>
                    </li></Link>


                    <Link href='/arms'><li class="border-t md:border-none">
                        <a href="/blog/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Arms</a>
                    </li></Link>

                    <Link href='/legs'><li class="border-t md:border-none">
                        <a href="/blog/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Legs</a>
                    </li></Link>

                    <Link href='/glutes'><li class="border-t md:border-none">
                        <a href="/blog/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Glutes</a>
                    </li></Link>

                    <Link href='/about'><li class="border-t md:border-none">
                        <a href="/blog/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About</a>
                    </li></Link>

                    <Link href='/stopwatch'><li class="border-t md:border-none">
                        <a href="/blog/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">StopWatch</a>
                    </li></Link>

                    <Link href='/timer'><li class="border-t md:border-none">
                        <a href="/blog/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Timer</a>
                    </li></Link>



                </ul>
            </nav>
        </>


    );
}

export default Navbar;
