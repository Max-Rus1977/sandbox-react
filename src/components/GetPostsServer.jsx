import React, { useEffect, useState } from "react";
import axios from "axios";
import PagTitle from "./PagTitle";

function Posts(props) {

  return (
    <div className='wrapp-post'>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

function AddNewPost() {

  const [users, setUsers] = useState([]);

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setUsers(response.data);
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className='box-post'>
      <PagTitle title='Получение постов с сервера с помощю "useEffect"' />
      {/*Кнопка была нужна для получения постов без useEffect*/}
      <button onClick={fetchPosts}>GET POSTS</button>
      {users.map(items => <Posts
        key={items.id}
        id={items.id}
        title={items.title}
        body={items.body}
      />
      )}

    </div>
  )
}

export default AddNewPost;