import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


 export function ColorBox() {
 const [color, setColor] = useState("");
  const styles = { backgroundColor: color };
  // const colors=['teal', 'orange', 'lavender']

  const [colors, setColors] = useState(['teal', 'orange', 'lavender']);
  return (
    <div className='add-color-container'>
       <TextField  
          className='add-color'
          value={color} 
          style={styles} 
          onChange={(event) =>setColor(event.target.value)} 
          placeholder='Enter the Color'
          id="standard-basic" 
           
          variant="standard" />
       
       <Button onClick={() => setColors([...colors, color])} variant="outlined">AddColor</Button>
       {colors.map((clr,index) =>( <AddColor key={index} color={clr} /> ))}
      
    </div>
  );
}

function AddColor({color}){
  const styles={backgroundColor:color , height:'25px', width:'200px',marginTop:'10px'}
  return(
    <div  className='color-container' style={styles}></div>
  );
}

