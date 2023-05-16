import React from 'react'
import './Slider.scss'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const slideImages = [
  {
    url: 'https://icms-image.slatic.net/images/ims-web/2b334705-1eef-4362-985f-e8cb9f915cc9.webp?scm=1003.4.icms-zebra-100031632-2885430.OTHER_6502370570_7712197',
    caption: 'Slide 1'
  },
  {
    url: 'https://icms-image.slatic.net/images/ims-web/0d3ac12a-dfa2-432e-9c53-496c2379146e.webp?scm=1003.4.icms-zebra-100031632-2885430.OTHER_6502370568_7712197',
    caption: 'Slide 2'
  },
  {
    url: 'https://icms-image.slatic.net/images/ims-web/c11d74d0-c353-4905-9d91-cac68c9dc063.webp?scm=1003.4.icms-zebra-100031632-2885430.OTHER_6502370567_7712197_1200x1200.jpg',
    caption: 'Slide 3'
  },
];

const Slider = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slider;