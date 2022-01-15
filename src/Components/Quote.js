import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {quoteActions ,RandomActions, favoriteActions} from "../Redux/Store"
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../App.css'

export default function Quote() {  const history=useHistory();
  const handleHistory = () => history.push('/');
  const data=useSelector(state=>state.anime);
  const favList=useSelector(state=>state.favorite);
  
  

  const quote=useSelector(state=>state.quote)
  const dispatch=useDispatch();
  const handleNewQuote=()=>{
    dispatch(RandomActions.getQuote(data))
    // const quote=data.findIndex((_,findIndex)=>{
    //   findIndex===Math.floor(Math.random() * data.length) + 1;})
  }
  const handleAddFav=()=>{
    dispatch(favoriteActions.addFavorite(quote))
  }

  const exist=favList.includes(quote);
  console.log(exist)
  const favColor=exist?"#ba000d":"rgba(0,0,0,0.4)"


  
  return (
    <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${quote.url})`,backgroundSize:"cover",backgroundRepeat:"no-repeat" ,height:"100vh",width:"100vw",overflow:"hidden"}}>
    <div className="buttons" style={{display:"flex" ,justifyContent:"space-between ",padding:"0.5rem"}}>
    <ArrowBackIcon style={{fontSize:"3rem" ,cursor:"pointer",color:"rgba(255,255,255,0.9)" }}onClick={() => handleHistory()}></ArrowBackIcon >
<div style={{display:"flex",justifyContent:"space-between",width:"25rem"}}>    <Link to="favorite"><button >Show Favorite</button></Link>
    <Link to="add-quote"><button>Add Quote</button></Link></div>
    </div>
    
     
    <div className="container"  >
      
      {/* <div style={{display:"flex"}} >
          <div alt="" style={{width:"20%" ,backgroundImage:`url(${quote.url})`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}} /> 
          <div>
          <h1>{quote.anime}</h1>
      <h3>{quote.character}</h3>
      <p>{quote.quote}</p>
          </div>
        </div>
        <button onClick={handleNewQuote}>New Quote</button> */}
        


        <div class="quote-container" id="quote-container"  style={{positon:"absolute"}}>
        <div class="quote-text">
            <i class="fas fa-quote-left"></i>
            <span id="quote">{quote.quote} </span>              
        </div>
        <div class="quote-author">
            <span id="author">{quote.character}</span>
        </div>
        <div class="button-container">
            <FavoriteIcon  onClick={handleAddFav} style={{fontSize:"4rem" ,cursor:"pointer",color:favColor}}></FavoriteIcon>
            <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
        </div>
    </div>
    
       
      
    </div>
    </div>
  )
}
