import { useState } from 'react';
import { useContext, createContext } from "react";



const ThemeContext = createContext(null);


export function Mode() {
  const [mode, setMode] = useState("light");
  const styles = { height:"150px", background: !(mode === "light") ? "black" : "white" };
  return (
    <ThemeContext.Provider value={[mode, setMode]}>
      <div className="App" style={styles}>
        <List />
      </div>
    </ThemeContext.Provider>
  );
}
const List = () => (
  <ul>
    <ListItem value="light" />
    <ListItem value="dark" />
  </ul>
);
const ListItem = ({ value }) => (
  
    <Button className='button' value={value} />
 
);
const Button = ({ value }) => {
  const [mode, setMode] = useContext(ThemeContext);

  const styles = {
    background: mode === "light" ? "black" : "white",
    color: !(mode === "light") ? "black" : "white",
    height: "25px",
    width: "100px",
    margin: "20px"
  };

  return (
    <button onClick={() => setMode(value)} style={styles}>
      {value}
    </button>
  );
};
