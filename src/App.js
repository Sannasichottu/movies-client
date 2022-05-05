import './App.css';
import { useState} from 'react';
import { ColorBox } from './colors/ColorBox';
import MovieList from './movies/MovieList';
import { Welcome } from './Welcome';
import { AddMovie } from './movies/AddMovie';
import {NotFound} from './NotFound'
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { MovieDetails } from './movies/MovieDetails';
import { EditMovie } from './movies/EditMovie';
import { Mode } from './game/Mode';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { TicTacToe } from './game/TicTacToe';
import { BasicForm } from './BasicForm';



export default function App() {
  
  const history = useHistory();
  const [mode, setMode] = useState("dark");


  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

 
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={1} style={{borderRadius: "0px", minHeight: "100vh"}}>
        <div className="App">
          
          <AppBar position="sticky">
            <Toolbar variant="dense">
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./home")}>Home</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./movies")}>Movies</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./addmovies")}>Add Movies</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./colorgame")}>Color Game</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./mode")}>Mode</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./tictactoe")}>Tic-Tac-Toe</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./basicform")}>Basic Form</Button>
              <Button 
                startIcon ={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon /> }
                variant="text" 
                style={{marginLeft: "auto"}} 
                color="inherit" 
                onClick={() => setMode(mode ==='light'? 'dark' : 'light')}>  
              {mode==='light'? 'Dark' : 'Light'} Mode</Button>
            
            </Toolbar>
        </AppBar>
        
          <Switch>
            <Route path="/films">
              <Redirect to='/movies' />
            </Route>

            <Route path="/mode">
              <Mode />
            </Route>

            <Route path="/movies/edit/:id">
              <EditMovie />
            </Route>

            <Route path="/movies/:id">
              <MovieDetails />
            </Route>

          

            <Route path="/movies">
              <MovieList  /> 
            </Route>

            <Route path="/addmovies">
                <AddMovie />
            </Route>

            <Route path="/colorgame">
              <ColorBox />
            </Route>

            <Route path="/tictactoe">
              <TicTacToe />
            </Route>

            <Route path="/basicform">
              <BasicForm/>
            </Route>

            <Route path="/">
                <Welcome />
            </Route>

            <Route path="**">
              <NotFound />
            </Route>
          </Switch>      
        </div>
        </Paper>
     </ThemeProvider> 
  );
}


