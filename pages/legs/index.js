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
            <h1>Fetching an API</h1>

            {legs.body.map((leg) => (
                <div key={leg.legsId}>
                    <h1>{leg.title}</h1>
                    <h3>{leg.description}</h3>
                    <h3>{leg.list}</h3>
                </div>
            ))}
        </div>

    );
}

export default Legs;

