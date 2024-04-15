import { useState } from "react";

function App() {


const [valorInput,setValorInput]= useState("");
const  [gifs,setGifs] = useState([])


const onChange = (e) =>{
const valor = e.target.value;
setValorInput(valor);
}

const getGifs = async(query) =>{
  const url = `https:/api.giphy.com/v1/gifs/search?api_key=WxoBymY5fjTdtGcAbgQ69vvfH3oVwQOX&q=${query}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}

const onSubmit= async (e) =>{

  e.preventDefault();
  const gifs = await getGifs(valorInput);
  setGifs(gifs);

  
}

  return (
    <div className="App">
      
      <form onSubmit={onSubmit}>
      <input onChange={e => onChange(e)}></input>
  

      </form>
      </div>
  )
}

export default App
