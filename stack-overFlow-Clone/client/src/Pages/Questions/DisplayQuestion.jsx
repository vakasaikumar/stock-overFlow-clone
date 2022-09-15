import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'
import "../../App.css"
const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar/>
      <div className="home-container-2">
        <QuestionsDetails/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default DisplayQuestion