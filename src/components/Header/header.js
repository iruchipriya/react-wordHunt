import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react';
import categories from '../data/category';
import './header.css';

const header = ({setCategory, category, setWord, word, lightMode}) => {

    const darkTheme = createTheme({
        palette: {
          type: lightMode? 'light' : 'dark',
        },
      });

      const handleChange = (language) => {
        setCategory(language);
        setWord('')

      }

  return (
    <div className='header'>
        <span className='title'>Word Hunt</span>

        <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
            <TextField 
            className='search' 
            value={word}
            onChange={(e)=> setWord(e.target.value)}
            label="Search Word" />
            <TextField 
                className='select' 
                select
                onChange={(e)=> handleChange(e.target.value)}
                label='Language'
                helperText=''>
                    {categories.map((option) => (
                        <MenuItem 
                            key={option.label}
                            value={option.label}>
                                {option.value}
                        </MenuItem>
                    ))} 
            </TextField>
            </ThemeProvider>
        </div>
    </div>
  )
}

export default header