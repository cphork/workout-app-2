import React from 'react';


const Favorite = ({ faveWorkout, deleteFaveWorkout }) => {

    const loaded = () => (
        <div>
            <div>
                <h2 className='text-center text-2xl mt-16'>Favorite Arms Workouts List</h2>
                {faveWorkout.map((arm, index) => (
                    <article>
                        <h5 className='mt-16 text-center text-2xl'>{arm.title}</h5>
                        <h5 className='text-center text-lg'>{arm.description}</h5>
                        <h5 className='mt-8 ml-8 mr-8 text-center text-base mb-16'>{arm.list}</h5>
                        <button
                            className='heart-btn ml-44 bg-green-500 rounded-full h-12 w-14 mb-24'
                            onClick={() =>
                                deleteFaveWorkout(index)}
                        >-

                        </button>
                    </article>
                ))}
            </div>
        </div>
    )

    const loading = () => (
        <div className='text-align'>
            <div>
                <h2 className='text-center text-2xl mb-48 mt-16'>Favorite Arms Workouts List</h2>
            </div>
        </div>
    )

    return faveWorkout.length > 0 ? loaded() : loading()

}

export default Favorite;