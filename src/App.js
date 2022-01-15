import React from 'react'
import Quote from './Components/Quote'
import Home from './Components/Home'
import AddQuote from './Components/AddQuote'
import FavoriteList from './Components/FavoriteList'
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Switch>
        <Route path="/" exact >
          <Home  ></Home>
        </Route>
        <Route path="/quote" >
          <Quote ></Quote>
        </Route>
        <Route path="/add-quote"><AddQuote></AddQuote></Route>
        <Route path="/favorite"> <FavoriteList></FavoriteList> </Route>
      </Switch>
      
    </>
  )
}
