import React, { useState, useEffect } from 'react';
import { getImages } from '../services/getImages';
import { per_page } from '../lib/constants';
import ImageCard from './ImageCard';

const Images = () => {
  const [images, setImages] = useState([]);
  const [perPage, setPerPage] = useState(per_page);

  useEffect(() => {
    getImages(perPage).then(response => {
      setImages(response);
    })
  }, [perPage])

  const loadMore = () => {
    setPerPage(perPage + 4)
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