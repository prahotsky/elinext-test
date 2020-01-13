import React, { useEffect, useState } from "react"

import { IMAGES_LIST, API_URL } from "../../constants/"
import "../../styles/images.scss"

const Main = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    Promise.all(
      IMAGES_LIST.map(async (imageNum) =>
        fetch(`${API_URL}${imageNum}`).then((res) => res.json())
      )
    ).then((images) => setImages(images))
  }, [])

  return (
    <div className="container">
      {!!images.length &&
        images.map((image, index) => (
          <img key={index} className="image" src={image.url} alt="" />
        ))}
    </div>
  )
}

export default Main
