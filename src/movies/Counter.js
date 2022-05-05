import {useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';

export default function Counter(){
    const [like,setLike] = useState(0);
    const [dislike,setDislike] = useState(0);


    useEffect(() => {
      console.log("like updated..",like)

    },[like, dislike])
    return(
      <div className='counter-container'>
        <IconButton className='likes-dislikes' onClick={() =>{setLike(like + 1)}} aria-label="like" color="primary"> 
        <Badge badgeContent={like} color="primary">
         👍
        </Badge>
        </IconButton>

        

        <IconButton className='likes-dislikes' onClick={() =>{setDislike(dislike + 1)}} aria-label="dislike" color="error"> 
        <Badge badgeContent={dislike} color="error">
        👎
        </Badge>
        </IconButton>
              
        
      </div>
      
    );
}