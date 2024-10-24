import React from 'react'

const Banner = () => {
    return (
        <>

            <section className='hero_section_main max-w-[1280px] mx-auto px-2 xl:px-0'>


                <div
                    className="hero h-[380px] md:h-[540px] rounded-xl"
                    style={{
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundImage: "url(https://media.istockphoto.com/id/877309726/photo/male-chef-garnishing-food-in-kitchen.jpg?s=612x612&w=0&k=20&c=U2wynKNuBJSd86sqyY3ivCT3EsqmllPe4k1cDwOgVLc=)",
                    }}>
                    <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-[20px] md:text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                            <p className="mb-5 w-full text-xs md:text[15px]">
                                Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                            </p>
                            <div className='flex justify-center items-center gap-6 h-full'>
                                <button className="btn bg-green-400 border-none rounded-full py-3 px-4  md:px-8 text-lg h-full">Explore Now</button>
                                <button className="btn btn-outline py-3 h-full border-2 border-green-100 rounded-full px-4 md:px-8 text-white text-lg">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>



            </section>

        </>
    )
}

export default Banner