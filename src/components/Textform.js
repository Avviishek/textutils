import React ,{ useState } from 'react'

export default function Textform(props) {
      const [text , setText] = useState("Enter Text Here");
     
      const dothis = () =>{
        console.log("listening");
        let newText = text.toUpperCase();
        setText(newText);
   }
   const dothis2 = () =>{
    console.log("listening");
    let newText = text.toLowerCase();
    setText(newText);
}
const clear = () =>{
  console.log("listening");
  let newText = ' ';
  setText(newText);
}





      const listen = (event) =>{
            console.log("updated text {value}")
        setText(event.target.value);
      }
  return (
  //const [text , setText] = useState("Enter TYext Here");
    <div>
<div className="mb-3"style={{color: props.mode==='dark'?'white':'#042743'}}>
<label for ="myBox" className="form-label">{props.title}</label>
<textarea className="form-control" value={text} onChange={listen} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
<button className = "btn btn-primary mx-3" onClick={dothis} > Convert to uppercase </button>
<button className = "btn btn-primary mx-3" onClick={dothis2} > Convert to lowercase </button>
<button className = "btn btn-primary mx-3" onClick={clear} > Clear Text </button>

</div>
<div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
<h5 >Entered Text Details  </h5>

<p>Text length : {text.length -(text.split(" ").length -1)  }  </p>

<p>No of words : {text.split(" ").length}  </p>

<h5> Preview </h5>
<p>{text}</p>
</div>

        
    </div>
  )
}
