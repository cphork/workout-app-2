import React, { useState } from "react";
import Favorite from '../favorite'


export const getStaticProps = async () => {

    const res = await fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev/arms')
    const data = await res.json();


    return {
        props: { arms: data }
    }
}


const Workout = ({ arms }) => {
    console.log('DATA WORKING', arms)



    const [faveWorkout, setFaveWorkout] = useState([])


    const getWorkouts = () => {
        fetch('https://cu6jqa8s0h.execute-api.us-west-2.amazonaws.com/dev' + '/arms')
            .then((resp) => resp.json())
            .then((data) => {
                setFaveWorkout(data.body)
                console.log(data)
            })
    }



    const addFaveWorkout = (arm) => {
        setFaveWorkout([...faveWorkout, arm])
    }

    const deleteFaveWorkout = (index) => setFaveWorkout(faveWorkout.filter(
        (currentValue, currentIndex) => currentIndex !== index))


    // DELETE

    const handleDelete = (arm) => {
        fetch(url + '/arms' + arm.ArmsId, {
            method: 'DELETE',
        })
            .then(() => getWorkouts())
    }


    return (
        <div>
            <h1 className='text-center mt-32 text-3xl font-perm text-green-200'>Arms Workout</h1>
            <iframe className='mt-4 ml-8' width="350" height="360" src="https://www.youtube.com/embed/OQdtMrQ-Y8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe className='mt-8 ml-8' width="350" height="360" src="https://www.youtube.com/embed/UyTR2EjTAXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            <Favorite
                addFaveWorkout={addFaveWorkout}
                faveWorkout={faveWorkout}
                handleDelete={handleDelete}
                deleteFaveWorkout={deleteFaveWorkout}
            />



            {arms.body.map((arm) => (
                <div key={arm.armsId}>
                    <h1 className='mt-16 text-center text-2xl'>{arm.title}</h1>
                    <h3 className='text-center text-lg'>{arm.description}</h3>
                    <h3 className='mt-8 ml-8 mr-8 text-center text-base mb-16'>{arm.list}</h3>
                    <button
                        className='heart-btn ml-44 bg-green-500 rounded-full h-12 w-14 mb-16'
                        onClick={() => {
                            addFaveWorkout(arm)
                        }}
                    >&#9825;
                    </button>

                </div>
            ))}

            {/* <Favorite
                addFaveWorkout={addFaveWorkout}
                faveWorkout={faveWorkout}
                handleDelete={handleDelete}
                deleteFaveWorkout={deleteFaveWorkout}
            /> */}

        </div>

    );
}

export default Workout;

