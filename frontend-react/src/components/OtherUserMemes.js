import {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom/cjs/react-router-dom.min";
import {Context} from "../store";
import {updateMemes} from "../store/actions";
import {Link} from "react-router-dom";
import {Col, Row, message} from "antd";

function OtherUserMemes(){
  const[state,dispatch]=useContext(Context);
  const[memes, setMemes]=useState([]);
  const{userName}=useParams();

  useEffect(()=>{
    fetch("http://localhost:8081/api/meme/")
    .then(response=>{
      if(response.ok){
        return response.json();
      }else{
        throw new Error("Error fetching memes!");
      }
    })
    .then(data=>{
      dispatch(updateMemes(data));
      setMemes(data);
    })
    .catch(error=>{
      message.error(error.toString());
    });
  },[])

  return(
    <>
      <Col>
        <Row>
        {memes.map((meme, index)=>(userName===meme.userName && ( 
          <div key={index}>
              <Link to={`/memes/${meme.memeID}`}>
              <div >
                <img src={meme.imageURL} title={meme.memeName} width="150" height="150"/>
                <b>{meme.memeName}</b>
              </div>
              </Link>
          </div>
        )))}
        </Row>
      </Col>
    </>
  )
}

export default OtherUserMemes;