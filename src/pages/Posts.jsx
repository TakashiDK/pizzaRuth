import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  const data = async () => {
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // console.log(response);

      const dados = response.data;
      setPosts(dados);
    } catch (error){
      console.log(error);
    }
  }

  useEffect(()=> {
    data();

  }, [])

  return (
  <>
    <div>
      <h1>TESTEEEE</h1>
      <ul>
        {posts.map( post =>
          <li key={post.id}>{post.title}</li> )}
      </ul>
    </div>
  </>
)
}
export default Posts
