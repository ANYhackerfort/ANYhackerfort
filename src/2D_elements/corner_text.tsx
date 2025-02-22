import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlask } from "@fortawesome/free-solid-svg-icons"
import "./text.css" // Import the CSS file

interface CornerTextProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  text: string
}

const CornerText: React.FC<CornerTextProps> = ({ position, text }) => {
  return (
    <div className={`corner-text ${position}`}>
      <FontAwesomeIcon icon={faFlask} />
      {" " + text}
    </div>
  )
}

export default CornerText
