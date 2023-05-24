import React, { useState, useEffect } from 'react';
import './BtnLike.css';
import {GrLike, GrDislike} from "react-icons/gr"

export const BtnLike = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  // Verificar si el usuario ha dado "Me gusta" anteriormente
  useEffect(() => {
    const hasLiked = localStorage.getItem('liked');
    if (hasLiked) {
      setLiked(true);
    }
  }, []);

  const handleLikeClick = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      localStorage.setItem('liked', 'true'); // Almacenar "Me gusta" en el almacenamiento local
    } else {
      setLikes(likes - 1);
      setLiked(false);
      localStorage.removeItem('liked'); // Eliminar "Me gusta" del almacenamiento local
    }
  };

  const handleDislikeClick = () => {
    if (!disliked) {
      setDislikes(dislikes + 1);
      setDisliked(true);
    } else {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
  };

  return (
    <div>
      <button
        className={liked ? 'like-button active' : 'like-button'}
        onClick={handleLikeClick}
        disabled={liked} // Deshabilitar el botón si ya se ha dado "Me gusta"
      >
        <GrLike className='fs-4'/> ({likes})
      </button>
      <button
        className={disliked ? 'dislike-button active' : 'dislike-button'}
        onClick={handleDislikeClick}
      >
        <GrDislike className='fs-4'/> ({dislikes})
      </button>
    </div>
  );
};

