import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AlbumDetailsPhotos = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState([]);

  
  const Navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then(response => response.json())
      .then(data => {
        setAlbum(data);
      })
      .catch(error => {
        console.error('Error fetching album:', error);
      });
  }, [id]);

  const onNav = () =>{
    Navigate(`/albums/${id}`);

    };
return(
    <>
    {album?.map((Album) => (
        <div>
            <p>{album.url}</p>
            <p>{album.thumbnailUrl}</p>
            
        </div>
    )
    )
    }
    <p>I really tried, but there is no photos in this JSON!!!</p>
    <button onClick={() => onNav()}>Return</button>
</>
)
}

export default AlbumDetailsPhotos;