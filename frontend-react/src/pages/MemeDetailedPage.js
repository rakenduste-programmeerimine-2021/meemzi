import {Table, message, Button, Tooltip} from "antd"
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {useState, useEffect, useContext } from "react";
import {Context} from "../store";
import {EditOutlined, StarOutlined, StarFilled} from '@ant-design/icons';

function MemePage(){
  const {memeID}=useParams();
  const [state]=useContext(Context)
  const [data, setData]=useState([]);
  const [likeData, setLikeData]=useState([]);
  var rows;
  var tempArray=[];

  useEffect(()=>{
    fetch("http://localhost:8081/api/meme/" + memeID
    ).then((response)=>{
      if(response.ok){
        return response.json()
      }else{
        throw new Error("Error fetching the meme!");
      }
    }).then((data)=>{
      setData(data)
      if(state.auth.username !=undefined){
        checkLike();
      }
    }).catch(error=>{
      message.error(error.toString());
    });
  }, [rows, data])

  async function checkLike(){
    fetch("http://localhost:8081/api/meme/like/" + state.auth.username
    ).then((response)=>{
      if(response.ok){
        return response.json()
      }else{
        throw new Error("Error fetching the meme!");
      }
    }).then((allData)=>{
      for(var i=0; i<allData.length; i++){
        tempArray.push(allData[i].memeID)
      }
      setLikeData(tempArray)
    }).catch(error=>{
      message.error(error.toString());
    });
  }

  const likeMeme=()=>{
    const data={
      userName: state.auth.username,
      memeID: memeID
    }
    fetch("http://localhost:8081/api/meme/like",{
      method: "PUT",
      body: JSON.stringify(data),
      headers: {"Content-Type":"application/json"}
    }).then(response=>{
      if(response.ok){
        return response.json()
      }else{
        throw new Error("Meme has already been liked")
      }
    }).then(()=>{
      message.success("Meme liked successfully!")
    }).catch(error=>{
      message.error(error.toString())
    });
  }

  const unLikeMeme=()=>{
    const data={
      userName: state.auth.username,
      memeID: memeID
    }
    fetch("http://localhost:8081/api/meme/unlike",{
      method: "PUT",
      body: JSON.stringify(data),
      headers: {"Content-Type":"application/json"}
    }).then(response=>{
      if(response.ok){
        return response.json()
      }else{
        throw new Error("Meme has already been unliked")
      }
    }).then(()=>{
      message.success("Meme unliked successfully!")
    }).catch(error=>{
      message.error(error.toString())
    });
  }

  //Too tierd to continue and gotta study for other examx
}

export default MemePage;