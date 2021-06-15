export const getStaticProps = async () => {
    const res = await fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev/arms')
    const data = await res.json();



    // const defaultEndpoint = 'https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev/arms';

    // export async function getServerSideProps() {
    //     const res = await fetch(defaultEndpoint);
    //     const data = await res.json();


    return {
        props: { arms: data }
    }
}
const Workout = ({ arms }) => {
    console.log('DATA WORKING', arms)
    return (
        <div>
            <h1>Fetching an API</h1>
            {arms.body.map((arm) => (
                <div key={arm.armsId}>
                    <h1>{arm.title}</h1>
                    <h3>{arm.description}</h3>
                    <h3>{arm.list}</h3>
                </div>
            ))}
        </div>

    );
}

export default Workout;

