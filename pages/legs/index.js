import React, { useState } from "react";
import Favorite from '../_components/_favorite'


export const getStaticProps = async () => {
    const res = await fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev/legs')
    const data = await res.json();




    return {
        props: { legs: data }
    }
}
const Legs = ({ legs }) => {
    console.log('DATA WORKING', legs)



    const [faveWorkout, setFaveWorkout] = useState([])

    const getWorkouts = () => {
        fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev' + '/legs')
            .then((resp) => resp.json())
            .then((data) => {
                setFaveWorkout(data.body)
                console.log(data)
            })
    }


    const addFaveWorkout = (leg) => {
        setFaveWorkout([...faveWorkout, leg])
    }

    const deleteFaveWorkout = (index) => setFaveWorkout(faveWorkout.filter(
        (currentValue, currentIndex) => currentIndex !== index))


    // DELETE

    const handleDelete = (leg) => {
        fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev' + '/legs' + leg.LegsId, {
            method: 'DELETE',
        })
            .then(() => getWorkouts())
    }




    return (
        <div>
            <h1 className='text-center mt-32 text-3xl font-perm text-green-200'>Legs Workout</h1>

            <iframe className='mt-4 ml-8' width="350" height="360" src="https://www.youtube.com/embed/OQdtMrQ-Y8Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <iframe className='mt-8 ml-8' width="350" height="360" src="https://www.youtube.com/embed/UyTR2EjTAXU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>



            <Favorite
                addFaveWorkout={addFaveWorkout}
                faveWorkout={faveWorkout}
                handleDelete={handleDelete}
                deleteFaveWorkout={deleteFaveWorkout}
            />


            {legs.body.map((leg) => (
                <div key={leg.legsId}>
                    <h1 className='mt-16 text-center text-2xl font-perm'>{leg.title}</h1>
                    <h3 className='text-center text-lg font-mono'>{leg.description}</h3>
                    <h3 className='mt-8 ml-8 mr-8 text-center text-base mb-16 font-hyeon text-white'>{leg.list}</h3>
                    <button
                        className='heart-btn ml-44 bg-green-500 rounded-full h-12 w-14 mb-16'
                        onClick={() => {
                            addFaveWorkout(leg)
                        }}
                    >&#9825;
                    </button>

                </div>
            ))}
        </div>

    );
}

export default Legs;

