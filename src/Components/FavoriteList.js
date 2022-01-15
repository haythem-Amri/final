import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {favoriteActions} from "../Redux/Store"
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router"
import "./favorite.css"





export default function FavoriteList() {
    
    const favList=useSelector(state=>state.favorite);
    const dispatch=useDispatch();
    const history = useHistory();
    const handleHistory = () => history.push('/quote');
      const HandleRemoveFav=(id)=>{
        dispatch(favoriteActions.deleteFavorite(id))
      }
    return (
        <>
        <ArrowBackIcon style={{color:"white",position:"absolute",top:"1em",left:"1em",fontSize:"3rem",cursor:"pointer"}} onClick={handleHistory}>back</ArrowBackIcon>
        
        <div clasName="favContainer"  >
             
           
            <div style={{paddingTop:"10rem" ,textAlign:"center",color:"#f1f1f1"}}>
            {favList.map((el)=>(
                <div class="quote-container" id="quote-container" style={{marginBottom:"3rem" ,backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${el.url})`,backgroundSize:"cover",backgroundRepeat:"no-repeat" }}> 
                <div style={{display:"flex",justifyContent:"flex-end"}}> 
                <CancelIcon onClick={()=>HandleRemoveFav(el.id)} style={{fontSize:"3rem",cursor:"pointer"}} ></CancelIcon>
                </div>
                
                <div class="quote-text">
                    <i class="fas fa-quote-left"></i>
                    <span id="quote">{el.quote}</span>              
                </div>
                
                <div class="quote-author">
                    <span id="author" style={{color:"#f2f2f2"}}>{el.character}</span>
                </div>
                

            </div>
              
            


        
              
  ))}
            
        </div>

            </div>
            </>
    )
}
