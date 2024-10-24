import React, { useState } from "react"
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import SectionTitle from "./components/SectionTitle/SectionTitle"
import PostCards from "./components/PostCards/PostCards"
import CookingInfo from "./components/CookingInfo/CookingInfo"
import Footer from "./components/Footer/Footer"

function App() {

  // add want to cook counter state
  const [wantCook, setWantCook] = useState([])
  // add want to cook into when button click state
  const [currentCooking, setCurrentCooking] = useState([])
  // total time and calories state
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)


  // handle button for want to cook counter
  const handleWantToCook = (wantCookInfo) => {
    if (wantCook.includes(wantCookInfo)) {
      return alert("This item is already Added")
    }
    setWantCook([...wantCook, wantCookInfo])

  }

  // handle current cooking section
  const handleCurrentCooking = (id) => {

    // find the id that we need to remove
    const removeItems = wantCook.find((cookItem) => cookItem.id === id)
    // update the original want to cook table
    const updateWantCook = wantCook.filter((item) => item.id !== id)
    setWantCook(updateWantCook)
    setCurrentCooking([...currentCooking, removeItems])

    // calculate total time and calories

  }

  const handleTotalTimeAndCalories = (time, calories) => {

    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)

  }


  return (
    <>
      <Header ></Header>
      <Banner ></Banner>
      <SectionTitle ></SectionTitle>

      <div className="md:flex max-w-[1280px] mx-auto gap-4">
        <div className="w-full md:w-3/6 lg:w-3/6 xl:w-4/6">
          <PostCards

            handleWantToCook={handleWantToCook}

          >
          </PostCards>
        </div>
        <div className="w-full md:w-3/6 lg:w-3/6 xl:w-2/6 px-2 xl:px-0">
          <CookingInfo

            wantCook={wantCook}
            handleCurrentCooking={handleCurrentCooking}
            currentCooking={currentCooking}
            handleTotalTimeAndCalories={handleTotalTimeAndCalories}
            totalTime={totalTime}
            totalCalories={totalCalories}

          >

          </CookingInfo>
        </div>
      </div>

      <Footer ></Footer>

    </>
  )
}

export default App
