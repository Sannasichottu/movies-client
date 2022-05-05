import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory, useParams } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from 'yup';
import { API_URL } from '../global-constants.js';

const formValidationSchema= yup.object({
  name:yup
      .string()
      .required("why not fill tis field🎃"),
  rating:yup
      .number()
      .max(20,"rating goes beyond level")
      .required("why not fill this field🎃"),
  summary:yup
      .string()
      .min(20,"Type more please")
      .required("why not fill tis field🎃"),
  poster:yup
      .string()
      .min(4,"Invalid poster")
      .required("why not fill tis field🎃"),
  trailer:yup
      .string()
      .min(4,"invalid trailer")
      .required("why not fill tis field🎃")
})


export function EditMovie() {
    const { id } = useParams();
    
    const [movie, setMovie] = useState(null);

    useEffect(() => {
      fetch(`${API_URL}/movies/${id}`,{method:"GET"})
      .then((data) => data.json())
      .then((mv) => setMovie(mv))
      
    },[id])
   
 return movie ? <UpdateMovie movie={movie}  /> : ""; 
 
}

function UpdateMovie({movie}){
  
  const formik = useFormik({
    initialValues: {
      name: movie.name,
      rating: movie.rating,
      summary: movie.summary,
      poster: movie.poster,
      trailer: movie.trailer},
    // validate: validateForm,
    validationSchema: formValidationSchema,
    onSubmit: (updateMovie) => {
      console.log("onSumbit", updateMovie)
      editMovie(updateMovie);
    }
  });
  
  
  const history = useHistory();
  const editMovie = (updateMovie) => {

   
    
    
    fetch(`${API_URL}/movies/${movie._id}`,
    {
      method:"PUT",
      body:JSON.stringify(updateMovie),
      headers:{'Content-Type':'application/json'},
    }).then(() => history.push("/movies"))
    

  
  };

  return (

    <form onSubmit={formik.handleSubmit} className='add-movie-form'>
      <TextField
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the name'
        variant="standard" 
        error={formik.errors.name && formik.touched.name}
        helperText={formik.errors.name && formik.touched.name && formik.errors.name}/>


      <TextField
        className='add-movie-input'
        id="rating"
        name="rating"
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the rating'        
        variant="standard" 
        error={formik.errors.rating && formik.touched.rating}
        helperText={formik.errors.rating && formik.touched.rating && formik.errors.rating}/>
        

      <TextField
        id="summary"
        name="summary"
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the summary'       
        variant="standard"
        error={formik.errors.summary && formik.touched.summary}
        helperText={formik.errors.summary && formik.touched.summary && formik.errors.summary} />
        

      <TextField
        id="poster"
        name="poster"
        value={formik.values.poster}summary
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label='Enter the poster'
        variant="standard" 
        error={formik.errors.summary && formik.touched.summary}
        helperText={formik.errors.summary && formik.touched.summary && formik.errors.summary}/>
        

<TextField
       id="trailer"
       name="trailer"
       value={formik.values.trailer}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       label='Enter the trailer'
       variant="standard"
       error={formik.errors.trailer && formik.touched.trailer}
       helperText={formik.errors.trailer && formik.touched.trailer && formik.errors.trailer}/>


      <Button type='submit' variant="outlined" >Save</Button>

    </form>

  );
}