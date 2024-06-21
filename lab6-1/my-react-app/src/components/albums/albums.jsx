import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
const Albums = () => {
    const [albums, setAlbums] = useState([])
    const Navigate = useNavigate();
    useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/albums").then(response => response.json())
        .then(data => {setAlbums(data)})
        .catch(error => {
            console.error('Error fetching data:', error);
          });}, [])

    const onDelete = (AlbumId) =>{
        const newAlbums = albums.filter(Album => AlbumId!==Album.id)
        setAlbums(newAlbums);
        }

    const onNav = () =>{
        Navigate("/home");
    }

    const handleRedirect = (id) => {
        Navigate(`/albums/${id}`);
      };

    return(
        <>
        <div><button onClick={() => onNav()}>Home</button></div>
        {albums?.map((Album) => (
            <div>
                <div>{Album.title}</div>
                <div>{Album.id}</div>
                <div><button onClick={() => onDelete(Album.id)}>Delete</button></div>
                
                <button onClick={() => handleRedirect(Album.id)}>View Details</button>
            </div>
            
            
        )
        )
        }
    </>
    )
}

export default Albums;