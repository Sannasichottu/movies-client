// import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from 'yup';
import { API_URL } from '../global-constants.js';

const formValidationSchema= yup.object({
  name:yup
      .string()
      .required("why not fill tis field🎃"),
  rating:yup
      .number()
      .max(10,"rating goes beyond level")
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

export function AddMovie() { 
  const history = useHistory();

  const formik = useFormik({
    initialValues: {name:'', rating:'',summary:'',poster:'',trailer:''},
    // validate: validateForm,
    validationSchema: formValidationSchema,
    onSubmit: (newMovie) => {
      console.log("onSumbit", newMovie)
      addMovie(newMovie);
    }
  });

  const addMovie = (newMovie) => {

    console.log("adding");
    
    console.log(newMovie);
    // setMovies([...Movies, newMovie]); 
      fetch(`${API_URL}/movies`,
      {
        mode:"no-cors",        
        method:"POST",
        body:JSON.stringify(newMovie),
        headers:{'Content-Type':'application/json'},
      })
      .then(() => history.push("/movies"))
  };

  
  return (

    <form  onSubmit={formik.handleSubmit} className='add-movie-form'>
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
        value={formik.values.poster}
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


      <Button variant="outlined" type='submit'>AddMovie</Button>

    </form>

  );
}

