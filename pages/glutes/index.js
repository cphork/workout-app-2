import React, { useState } from "react";
import Favorite from '../favorite/favorite'



export const getStaticPaths = async () => {
    const res = await fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev/glutes')
    const data = await res.json();




    return {
        props: { glutes: data }
    }
}
const Glutes = ({ glutes }) => {
    console.log('DATA WORKING', glutes)

    const [faveWorkout, setFaveWorkout] = useState([])

    const getWorkouts = () => {
        fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev' + '/glutes')
            .then((resp) => resp.json())
            .then((data) => {
                setFaveWorkout(data.body)
                console.log(data)
            })
    }



    const addFaveWorkout = (glute) => {
        setFaveWorkout([...faveWorkout, glute])
    }

    const deleteFaveWorkout = (index) => setFaveWorkout(faveWorkout.filter(
        (currentValue, currentIndex) => currentIndex !== index))


    // DELETE

    const handleDelete = (glute) => {
        fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev' + '/glutes' + glute.GlutesId, {
            method: 'DELETE',
        })
            .then(() => getWorkouts())
    }


    return (
        <div>

            <h1 className='text-center mt-32 text-3xl font-perm text-green-200'>Glutes Workout</h1>

            <iframe className='mt-4 ml-8' width="350" height="360" src="https://www.youtube.com/embed/OQdtMrQ-Y8Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <iframe className='mt-8 ml-8' width="350" height="360" src="https://www.youtube.com/embed/UyTR2EjTAXU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


            <Favorite
                addFaveWorkout={addFaveWorkout}
                faveWorkout={faveWorkout}
                handleDelete={handleDelete}
                deleteFaveWorkout={deleteFaveWorkout}
            />


            {glutes.body.map((glute) => (
                <div key={glute.glutesId}>
                    <h1 className='mt-16 text-center text-2xl font-perm'>{glute.title}</h1>
                    <h3 className='text-center text-lg font-mono'>{glute.description}</h3>
                    <h3 className='mt-8 ml-8 mr-8 text-center text-base mb-16 font-hyeon text-white'>{glute.list}</h3>
                    <button
                        className='heart-btn ml-44 bg-green-500 rounded-full h-12 w-14 mb-16'
                        onClick={() => {
                            addFaveWorkout(glute)
                        }}
                    >&#9825;
                    </button>

                </div>
            ))}
        </div>

    );
}

export default Glutes;

