export const getStaticProps = async () => {
    const res = await fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev/legs')
    const data = await res.json();




    return {
        props: { legs: data }
    }
}
const Legs = ({ legs }) => {
    console.log('DATA WORKING', legs)
    return (
        <div>

            <iframe className='mt-16 ml-8' width="350" height="360" src="https://www.youtube.com/embed/OQdtMrQ-Y8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe className='mt-8 ml-8' width="350" height="360" src="https://www.youtube.com/embed/UyTR2EjTAXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            {legs.body.map((leg) => (
                <div key={leg.legsId}>
                    <h1 className='mt-16 text-center text-2xl'>{leg.title}</h1>
                    <h3 className='text-center text-lg'>{leg.description}</h3>
                    <h3 className='mt-8 ml-8 mr-8 text-center text-base mb-16'>{leg.list}</h3>
                    <button
                        className='heart-btn ml-44 bg-red-500 rounded-full h-12 w-14 mb-24'
                        onClick={() =>
                            addFaveSong(song)}
                    >&#9825;
                        </button>

                </div>
            ))}
        </div>

    );
}

export default Legs;

