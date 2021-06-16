export const getStaticProps = async () => {
    const res = await fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev/arms')
    const data = await res.json();


    return {
        props: { arms: data }
    }
}
const Workout = ({ arms }) => {
    console.log('DATA WORKING', arms)
    return (
        <div>



            <iframe className='mt-16 ml-8' width="350" height="360" src="https://www.youtube.com/embed/OQdtMrQ-Y8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe className='mt-8 ml-8' width="350" height="360" src="https://www.youtube.com/embed/UyTR2EjTAXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            {arms.body.map((arm) => (
                <div key={arm.armsId}>
                    <h1 className='mt-16 text-center text-2xl'>{arm.title}</h1>
                    <h3 className='text-center text-lg'>{arm.description}</h3>
                    <h3 className='mt-8 ml-8 mr-8 text-center text-base mb-16'>{arm.list}</h3>
                </div>
            ))}
        </div>

    );
}

export default Workout;

