import {useContext} from 'react'
import {Context} from "../store"
import Navbar from "../components/Navbar"
import AddMemeForm from '../components/AddMemeForm';
import './Pages.css'
import { useHistory } from "react-router-dom";



function AddMeme() {
  const [state] = useContext(Context)
  console.log(state);

  const history = useHistory()
  const handler = () => {
    //Redirect to another route
    history.push("/new") 
  }
  
  if (!state.auth.token) {
    handler();
  }

  function itemSubmitHandler(number){
    if(number === 1){
      document.getElementById("numbrike").innerHTML = "Õnnestus";
    }else{
      document.getElementById("numbrike").innerHTML = "Failed";
    }

  }


  return (
    <div className="App">
      <Navbar/>
      <div className="grid-container">
        <div className="grid-item1">
          <h1 id="tervitus">Image Upload</h1>
        </div>
        <div className="grid-item1">
          <AddMemeForm onPictureUpload={itemSubmitHandler}/>
        </div>
        <br></br>
        <div className="grid-item1">
          <span id="numbrike"></span>
        </div>
      </div>
    </div>
  );
}

export default AddMeme
