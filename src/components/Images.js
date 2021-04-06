import React, { useState, useEffect } from 'react';
import { getImages } from '../services/getImages';
import ImageCard from './ImageCard';

const Images = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    getImages(page).then(response => {
      if (response) {
        setImages([...images, ...response])
      }
    })
  }, [page])

  const loadMore = () => {
    setPage(page + 1)
  }

  return (
      <div>
        <button type='button' className='btn btn-primary' onClick={() => loadMore()}>Show more</button>
        <div className='row row-cols-4'>
        {
          images && images.map((pic) => {
            return <ImageCard pic={pic} key={pic.id} />
          })
        }
        </div>
      </div>
  )
}

export default Images;