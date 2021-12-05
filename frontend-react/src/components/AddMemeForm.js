import axios from 'axios';
import React,{useState} from 'react';

function AddMemeForm(props){

    const [image, setImage] = useState(null);
    const handleClick = () => {
        try{
            console.log(image);
            axios.post('http://localhost:4000/image-upload', image)
            .then(res => {
                console.log('Axios response: ', res)
            }).then(function (response) {
                // handle success
                TryToUpload();
                console.log(response);
            }).catch(function (error) {
                // handle error
                console.log(error);
                props.onPictureUpload(0);
            });
      
        }catch (error) {
            console.error(error)
        }
    }
    const handleFileInput = (e) => {

        
      console.log('handleFileInput working!')
      console.log(e.target.files[0]);
      var b = document.getElementById('fileLabel');
      b.innerHTML = e.target.files[0].name;
      const formData = new FormData();
      formData.append('Pic', e.target.files[0]);
      console.log(formData);
      setImage(formData);
    }

    function TryToUpload(){
        console.log(document.getElementById("Desc_input").value);
        let descpritiontext = document.getElementById("Desc_input").value;
        if(descpritiontext.length < 1){
            props.onPictureUpload(0);
        }else{
            let userNameVariable = "user";
            let filenameVariable = 'Pic_';
            const Meme= {
                filename: filenameVariable,
                text: descpritiontext,
                userName: userNameVariable,
                
            };
            onFinish(Meme);
        }
        
    }

    const onFinish = (values) => {
        console.log('Success:', values)
        try{
            fetch('http://localhost:8081/api/post/create', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {'Content-Type':'application/json'}
            }).then(response => response.json())
            
            props.onPictureUpload(1);

        }catch (error) {
            console.error(error)
            props.onPictureUpload(0);
        }
    }

    return(
        <div>
            <textarea id="Desc_input"  rows="2" cols="40" placeholder="Description"/>

            <div className="file-input">
                <input type="file" id="file" className="file" onChange={handleFileInput}/>
                <label htmlFor="file">Select file</label>
            </div>
            <label id="fileLabel"></label>
            <br></br>
            <button className="uploadButton" onClick={handleClick}>Upload!</button>
        </div>
    )
}

export default AddMemeForm