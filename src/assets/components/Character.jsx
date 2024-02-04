import { useState } from 'react'
import PropTypes from "prop-types";
import "./Character.css"

const Character = ({ character }) => {
  const [turned, setTurned] = useState(false)

  return (
    <div>
      <img
        className={turned ? "turned" : "image"}
        src={character.image}
        alt={character.name}
        onClick={() => setTurned(!turned)}
      />
    </div>
  )
}

Character.propTypes = {
  character: PropTypes.object

}

export default Character