import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AlbumDetails = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState([]);
  const [editableTitle, setEditableTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  
  const Navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(response => response.json())
      .then(data => {
        setAlbum(data);
        setEditableTitle(data.title);
      })
      .catch(error => {
        console.error('Error fetching album:', error);
      });
  }, [id]);

  const handleTitleChange = (event) => {
    setEditableTitle(event.target.value);
  };

  const handleSave = () => {
    setAlbum(prevAlbum => ({
      ...prevAlbum,
      title: editableTitle,
    }));
    setIsEditing(false); 
  };

  const toggleEditing = () => {
    setIsEditing(true); 
  };
  const onNav = () =>{
    Navigate("/albums");
    };
    const handleRedirect = (id) => {
        Navigate(`/albums/${id}/photos`);
      };
  return (
    <div>
      <button onClick={onNav}>Return</button>
      <p>
        {isEditing ? (
          <input
            type="text"
            value={editableTitle}
            onChange={handleTitleChange}
          />
        ) : (
          album.title
        )}
      </p>
      {!isEditing && (
        <button onClick={toggleEditing}>Edit Title</button>
      )}
      {isEditing && (
        <button onClick={handleSave}>Save</button>
      )}
      <p>{album.id}</p>
      <button onClick={() => handleRedirect(album.id)}>View Photos</button>
    </div>
  );
};

export default AlbumDetails;
