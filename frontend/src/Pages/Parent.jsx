import React, { useContext } from 'react'
import Home from '../Widgets/Home'
import { HashRouter, Route,Routes } from 'react-router-dom'
import Analytics from './Analytics';
import Settings from './Settings';
import Header from '../Widgets/Header';
import myContext from '../CreateContext';
import Login from './Login';
import Alert from './Alert'
import Signup from './Signup';
import AddSale from './AddSale';
import ShowSale from './ShowSale';


function Parent() {
  const c=useContext(myContext);
  const{loggedIn}=c;
  

  return (
    <>
    <HashRouter>
      <Alert/>
      {loggedIn && <Header/>}
      {/* <Header/> */}
    <Routes>
      <Route path='/'  element={loggedIn?<Home/>:<Login/>} />
      <Route path='/signup'  element={<Signup/>} />
      <Route path='/analytics' element={<Analytics/>}>
      <Route path='/analytics/addsale' element={<AddSale/>}/>
      <Route path='/analytics/showsale' element={<ShowSale/>}/>
      </Route>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>

    </HashRouter>
    
    </>
  )
}

export default Parent