import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import './style.css'
function Loading() {
  return (
    <div>
        <div className="app">
          <PropagateLoader color={"#dc3545"}  size={35} />
        </div>
    </div>
  )
}

export default Loading