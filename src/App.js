//import logo from './logo.svg';
import './App.css'
import Navbar  from './components/Navbar' ;
import Textform from './components/Textform';
import React, {useState} from 'react'
import Alert from './components/Alert'

function App() {
  const [mode , setMode] = useState('light') ;
  const toggleclick = () =>{
    if(mode === 'light'){
      setMode('dark') ;
      document.body.style.backgroundColor = '#042743';
       
      
    }else if(mode === 'dark'){
      setMode('light') ;
      document.body.style.backgroundColor = 'white';
      
     

    }    
  }
  return (
<>

 <Navbar title = "Textutils" aboutText = "About Textutils " mode = {mode} toggleclick = {toggleclick} />
 <Alert alert = 'This is an Alert'/>
<div className='container' mode= {mode}> 

<Textform title = "Enter Your Text Here" mode = {mode} />
<div className="mb-3" mode ={mode} div/>
</div>
<div className='container my-3' mode = {mode}>
    
    </div>
 </>
  
  )
}

export default App;
