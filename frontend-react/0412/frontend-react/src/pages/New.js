import {useContext} from "react"
import {Context} from "../store"
import Navbar from "../components/Navbar"
import { useHistory } from "react-router-dom";


function New(){
    const history = useHistory()
    const [state] = useContext(Context)
    
    const handler = () => {
        //Redirect to another route
        history.push("/AddMeme") 
    }

    if (!state.auth.token) {
        handler();
    }
   
    return(
        <div>
            <Navbar/>
            <h1 id="tervitus">New Gifs Feed</h1>
            <br/>
        </div>
    )
}

export default New