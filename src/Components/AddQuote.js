import React, { useState } from 'react';
import { uuid } from 'uuidv4';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useSelector,useDispatch } from 'react-redux';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import {quoteActions } from "../Redux/Store"
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const theme = createTheme({
    palette: {
        primary: {
            main: "#525587",
        },
        secondary: {
            main: "#1b1438",

        }

    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25rem',

        },
    },
}));

export default function AddQuote() {
    const classes = useStyles();
    const [urAnime,setAnime]=useState('');
    const [urCharachter,setCharachter]=useState('');
    const [urQuote,setQuote]=useState('');
    const [urUrl,setUrl]=useState('');
    const data=useSelector(state=>state.anime);
    const history=useHistory();
    const handleHistory = () => history.push('/quote');
    const dispatch=useDispatch();
    const handleAddQuote=()=>{
      urAnime && urCharachter && urQuote && urUrl && dispatch(quoteActions.addQuote({
          id:uuid(),
          anime:urAnime,
          character:urCharachter,
          quote:urQuote,
          url:urUrl,
        
        }))
      }

    
    return (
        <div  style={{height:"100vh",width:"100vw",backgroundImage:"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://wallpaperaccess.com/full/1920902.jpg')",backgroundSize:"cover" ,backgroundRepeat:"no-repeat" }}>
            <ArrowBackIcon style={{fontSize:"3rem" ,cursor:"pointer",color:"rgba(255,255,255,0.9)", }}onClick={() => handleHistory()}></ArrowBackIcon>

        <Box display="flex" justifyContent="center" alignItems="center" style={{height:"90vh"}} >
            <form className={classes.root} noValidate autoComplete="off" style={{height:"50vh"}} >
            

                <ThemeProvider theme={theme}>
                    <Box display="flex" flexDirection="column" alignItems="center" width="100%" height="90%" justifyContent="space-around">
                        <TextField id="filled-basic" label="Anime Name " variant="filled" color="secondary" type="text" style={{width:"100%",backgroundColor:"rgba(255,255,255,0.5)"}} onChange={(e)=>setAnime(e.target.value)} />
                        <TextField id="filled-basic" label="Charachter " variant="filled" color="secondary" type="text" style={{width:"100%",backgroundColor:"rgba(255,255,255,0.5)"}} onChange={(e)=>setCharachter(e.target.value)}/>
                        <TextField id="filled-basic" label="Quote " variant="filled" color="secondary" type="text" style={{width:"100%",
                        backgroundColor:"rgba(255,255,255,0.5)"}}
                        onChange={(e)=>setQuote(e.target.value)}/>
                        <TextField id="filled-basic" label="Url " variant="filled" color="secondary" type="text" style={{width:"100%",
                        backgroundColor:"rgba(255,255,255,0.5)"}}
                        onChange={(e)=>setUrl(e.target.value)}/>
                        <Link to="/quote" style={{ textDecoration: 'none', color:"#ba5cbc" }}>
                        <Button variant="contained" color="secondary" style={{ height: "3.5rem", width: "9rem" }} onClick={handleAddQuote} >
                            Add Quote
                        </Button>
                        </Link>
                    </Box>
                </ThemeProvider>


            </form>
        </Box>
        </div>

    );
}