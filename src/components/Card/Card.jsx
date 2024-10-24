import React from 'react'

const Card = ({ post, handleWantToCook }) => {
    const { food_img, food_name, food_description, ingredients, cooking_time, total_calories } = post;
    return (
        <>

            <div className='border-2 border-green-700  shadow-xl mb-6 rounded-xl border-opacity-35'>
                <div className="card card-compact p-4">
                    <figure>
                        <img className='rounded-xl w-full h-[180px] md:h-[280px]'
                            src={food_img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl md:text-3xl font-bold">{food_name}</h2>
                        <p className='text-[15px]'>{food_description}</p>
                        <h2 className='text-xl font-bold'>Ingredient: <span>{ingredients.length}</span></h2>
                        <div className='ml-6'>

                            {


                                ingredients.map((ingredient, ind) => (
                                    <li key={ind} className='text-sm leading-6'>{ingredient}</li>
                                ))

                            }
                        </div>

                        <div className='total_time_and_total_calories_section flex items-center gap-4 my-2'>
                            <h3 className='flex items-center'><img className='w-[24px]' src="https://image.shutterstock.com/image-vector/clock-icon-watch-time-vector-260nw-1677751930.jpg" alt="" /><span className='mr-1'>{cooking_time}</span>Min</h3>
                            <h3 className='flex items-center'><img className='w-[24px]' src="https://img.icons8.com/?size=48&id=QTEnylAkMAkP&format=png" alt="" /><span className='mr-1'>{total_calories}</span>Cal</h3>
                        </div>

                        <div className="card-actions justify-left">
                            <button onClick={() => { handleWantToCook(post) }} className="btn bg-green-400 border-none rounded-full py-2 px-8 text-lg h-full">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Card