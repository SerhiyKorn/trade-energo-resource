import React from 'react'
import {TextBlockStyles} from '../stylesheets/style'
import {about} from '../libs/about.json'


const Main = () => {
  return (
    <TextBlockStyles>
        <div className="text-center">
        <h2 className="text-center mt-3">Про нас</h2>
        <hr className="mb-4" />
        </div>
        <div className="mb-5">
            {about.map((text, i) => (<p key={i} className="para-styled">{text}</p>))}
        </div>
      </TextBlockStyles>
  )
}

export default Main