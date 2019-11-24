import React from 'react'
import {TextBlockStyles} from '../stylesheets/style'
import {about} from '../libs/about.json'


const Main = () => {
  return (
    <TextBlockStyles>
        <div className="p-5">
            {about.map((text, i) => (<p key={i} className="para-styled">{text}</p>))}
        </div>
      </TextBlockStyles>
  )
}

export default Main