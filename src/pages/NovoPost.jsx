import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import axios from 'axios';

function NovoPost() {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  
  const createPost = async (e) => 
  {
    e.preventDefault();

    const post = {title, body, userId:1};
    try{
      await axios.post('https://jsonplaceholder.typicode.com/posts', {body, post,});
      console.log(title, body)
    } catch (error){
      console.log(error);
    }
  }

  return (
  <>
    <div>
      <h1>NOVO POST</h1>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">
            <input type="text" name="title" id="title" placeholder="Digite o título" onChange={(e) => setTitle(e.target.value)}/>
          </label>
          <textarea name="body" id="body" placeholder='Digite o conteúdo' onChange={(e) => setBody(e.target.value)}></textarea>          
          <input type="submit" value="Criar Post" />
        </div>
      </form>
    </div>
  </>
)
}
export default NovoPost
