import React, { useState } from "react";
import PagTitle from "./PagTitle";

function Posts(props) {
  //debugger
  return (
    <div className='wrapp-post'>
      <h3>{props.H3title}</h3>
      <p>{props.pbody}</p>
      <button onClick={() => props.removePost(props.id)} className='delite'>❌</button>
    </div>
  )
}

function AddNewPost() {

  const [users, setUsers] = useState([
    { id: 1, title: 'Titl1', body: 'Lorem ipsum dolor sit amet consectetur' },
    { id: 2, title: 'Titl2', body: 'adipisicing elit. Modi, inventore.' },
    { id: 3, title: 'Titl3', body: ' sit amet consectetur' },
  ]);

  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');

  function removePost(id) {
    setUsers(users.filter(data => data.id !== id))
  }

  function chengesTiyle(event) {
    setTitleValue(event.target.value)
  }

  function chengesBody(event) {
    setBodyValue(event.target.value)
  }

  function addPost(event) {
    event.preventDefault();
    if (titleValue !== '' && bodyValue !== '') {
      const newPost = {
        id: Date.now(),
        title: titleValue,
        body: bodyValue
      }
      setUsers([...users, newPost]);
      setTitleValue('');
      setBodyValue('');
    } else {
      alert('заполните поле')
    }
  }

  return (
    <div className='box-post'>
      <PagTitle title='Добавление и удаление постов' />
      <form>
        <input value={titleValue} onChange={chengesTiyle} type="text" />
        <input value={bodyValue} onChange={chengesBody} type="text" />
        <button className='add-post' onClick={addPost}>add</button>
      </form>
      {users.map(items => <Posts
        key={items.id}
        id={items.id}
        H3title={items.title}
        pbody={items.body}
        removePost={removePost}
      />
      )}

    </div>
  )
}

export default AddNewPost;