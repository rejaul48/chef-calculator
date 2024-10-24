
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';


const PostCards = ({ handleWantToCook }) => {

    const [allPost, setAllPost] = useState([])

    useEffect(() => {
        const handleAllPost = async () => {
            try {
                const res = await fetch('Data.json');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setAllPost(data)
            } catch (err) {
                console.error('Fetch error:', err);
            }
        }
        handleAllPost();
    }, []);


    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-5 px-2 xl:px-0'>

                {allPost.map((post, ind) => (
                    <Card
                        key={ind}
                        post={post}
                        handleWantToCook={handleWantToCook}
                    ></Card>
                ))}
            </div>
        </>
    )
}

export default PostCards