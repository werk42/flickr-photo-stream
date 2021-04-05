import React from 'react';
import { trimString } from '../lib/utils';
import './styles.css';

const ImageCard = ({pic}) => {

  const authorPage = `https://www.flickr.com/photos/${pic.owner}`;
  const photo = `${authorPage}/${pic.id}`;

  return(
    <div className='card'>
      <img className='img-responsive' src={pic.url_n} key={pic.id}></img>
      <div className='card-body'>
        <h4 className='card-title'><a href={photo} target='_blank' rel='noreferrer'>{pic.title}</a></h4>
        <p className='card-title'><b>By:</b> <a href={authorPage} target='_blank' rel='noreferrer'>{pic.ownername}</a></p>
        <p className="card-text"><b>Description: </b>{trimString(`${pic.description?._content}`, 150)}</p>
        <p className="card-text"><b>Tags: </b>{trimString(`${pic.tags}`, 150)}</p>
      </div>
    </div>
  )
}

export default ImageCard;