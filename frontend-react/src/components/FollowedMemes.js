import {Context} from "../store";
import {useState, useEffect, useContext} from "react";
import {message} from 'antd';
import {Link} from "react-router-dom";

function FollowedMemes(){
  const[state]=useContext(Context);
  const[memes, setMemes]=useState([]);

  useEffect(()=>{
    getMemes();
  },[])

  function getMemes(){
    fetch("http://localhost:8081/api/meme/followed/" + state.auth.username)
    .then(response=>{
      if(response.ok){
        return response.json();
      }else{
        throw new Error("Error fetching memes!");
      }
    })
    .then(data=>{
      setMemes(data);
    })
    .catch(error=>{
      message.error(error.toString());
    });
  }

  const displayFollowedUserMemes=(meme, index)=>{
    return (
      <div key={index}>
        <Link to={`/memes/${meme.memeID}`}><img src={meme.imageURL} width="150" height="150"/></Link>
        <Link to={`/memes/${meme.memeID}`}>
        <h2>{meme.memeName}</h2>
        </Link>
        <Link to={`/user/${meme.userName}`}>
        <p><b>Author: </b> {meme.userName}</p>
        </Link>
      </div>
    )
  }
  
  if(memes.length==0){
    return (<h3>Not following any users</h3>);
  }else{
    return(
      <div>
        {memes.map((meme, index)=>(
          displayFollowedUserMemes(meme, index)
        ))};
      </div>
    )
  }
}

export default FollowedMemes;