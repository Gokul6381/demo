import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Post() {
 const navigate=useNavigate()
 const[name,setName]=useState('')
 const[image,setimage]=useState(null)

 const saveImage=(e)=>{
    setimage(e.target.files[0])
 }

 const submitImage=()=>{
    const formData= new FormData()
    formData.append('image',image)
    formData.append('name',name)

    axios.post('http://127.0.0.1:8000/image',formData,
      { headers: {'content-type':"multipart/form-data",},}
    )
    .then(resposne=>console.log(resposne))

    navigate('/')
 }

 return(
  <div>
  <form  onSubmit={submitImage}>
        <div>
            <label>Name:</label>
            <input type="text" name="name" id="name" onChange={(event)=>{setName(event.target.value)}} required></input>
        </div>

        <div>
            <label>Image:</label>
            <input type="file" name="image" id="image" onChange={saveImage} required></input>
        </div>

        <button type="submit">Upload</button>
    </form>
  </div>
 )


}

export default Post;
