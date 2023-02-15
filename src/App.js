import { Container, Switch, withStyles } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header/header'
import Definition from './components/Definition/definition'
import './App.css';
import { grey } from '@material-ui/core/colors';

function App() {

  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState('en');
  const [lightMode, setLightMode] = useState(false);
  const [word, setWord] = useState([]);

  const dictionaryApi = async() => {
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      setMeaning(data.data);
    }catch(error){
      console.log(error);
    }
  }

  const ThemeChanger = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  useEffect(() => {
    dictionaryApi();
  }, [category, word]);

  return (
    <div className='app' style={{height: '100vh', backgroundColor: lightMode ? '#fff' : '#282c34', 
      color: lightMode ? 'black' : 'white', transition: 'all 0.5s linear'}}> 
        <Container maxWidth='md' style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
          <div style={{position: 'absolute', top: 0, right: 15, paddingTop: 10}}>
            <ThemeChanger checked={lightMode} onChange={() => {setLightMode(!lightMode)}}/></div>


        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} lightMode={lightMode}/>
        {meaning && 
        <Definition word={word} meaning={meaning} category={category} lightMode={lightMode}/>}
        
        </Container>
    
    </div>
  )
 
}

export default App;
