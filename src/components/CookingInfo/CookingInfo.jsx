import React from 'react'

const CookingInfo = ({ wantCook, handleCurrentCooking, currentCooking, handleTotalTimeAndCalories, totalTime, totalCalories }) => {
    console.log(currentCooking)

    return (
        <>
            <div className='border-2 border-gray-400 border-opacity-35 rounded-lg p-4 '>

                <h2 className='text-center text-2xl md:text-xl lg:ext-2xl font-bold'>Want to cook: <span>{wantCook.length}</span></h2>
                <div className="divider w-3/5 mx-auto mt-2" ></div>

                {/* want to cook section */}
                <div className='want_to_cook_section'>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {wantCook.map((wantInfo, ind) => (
                                    <tr key={ind} className="hover text-xs text-center ">
                                        <td className='p-0'>{ind + 1}</td>
                                        <td className='p-2'>{wantInfo.food_name}</td>
                                        <td className='p-2'><span className='mr-1'>{wantInfo.cooking_time}</span>min</td>
                                        <td className='p-2'><span className='mr-1'>{wantInfo.total_calories}</span>Cal</td>
                                        <td className='p-2'><button onClick={() => { handleCurrentCooking(wantInfo.id); handleTotalTimeAndCalories(wantInfo.cooking_time, wantInfo.total_calories) }} className="bg-green-400 py-2  px-2 border-none rounded-full text-sm h-full">Preparing</button></td>
                                    </tr>
                                ))}



                            </tbody>
                        </table>
                    </div>

                </div>

                {/* currently cooking section */}
                <div className='currently_cooking_section mt-8'>

                    <h2 className='text-center text-2xl md:text-xl lg:text-2xl font-bold'>Currently cooking: <span>{currentCooking.length}</span></h2>
                    <div className="divider w-3/5 mx-auto mt-2" ></div>


                    <div className="overflow-x-auto">
                        <table className="table">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>

                                </tr>
                            </thead>
                            <tbody>

                                {currentCooking.map((currentInfo, ind) => (
                                    <tr key={ind} className="hover text-xs text-center border-y-2">
                                        <td className='p-0'>{ind + 1}</td>
                                        <td className='p-2  text-[14 font-semibold px]'>{currentInfo.food_name}</td>
                                        <td className='p-2 text-[14 font-semibold px]'><span className='mr-1'>{currentInfo.cooking_time}</span>min</td>
                                        <td className='p-2 text-[14 font-semibold px]'><span className='mr-1'>{currentInfo.total_calories}</span>Cal</td>

                                    </tr>
                                ))}



                            </tbody>
                        </table>
                    </div>


                    <div className='flex gap-5 justify-between mt-8'>
                        <h2 className='font-bold text-lg md:text-[13px]'>Total Time: <span className='mx-2'>{totalTime}</span> Min</h2>
                        <h2 className='font-bold text-lg md:text-[13px]'>Total Calories: <span className='mx-2'>{totalCalories}</span> Cal</h2>
                    </div>

                </div>


            </div>

        </>
    )
}

export default CookingInfo