export const getStaticProps = async () => {
    const res = await fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev/glutes')
    const data = await res.json();




    return {
        props: { glutes: data }
    }
}
const Glutes = ({ glutes }) => {
    console.log('DATA WORKING', glutes)
    return (
        <div>
            <h1>Fetching an API</h1>

            {glutes.body.map((glute) => (
                <div key={glute.glutesId}>
                    <h1>{glute.title}</h1>
                    <h3>{glute.description}</h3>
                    <h3>{glute.list}</h3>
                </div>
            ))}
        </div>

    );
}

export default Glutes;

