import React, { useState } from 'react';

// THIS is a mixture of controleld and uncontrolled. Learn another way.
const Post = (props) => {
  const [formData, setFormData] = useState({
      discription: '',
      time: '',
      user: ''
  })

  const {
      discription,
      time,
      user
  } = formData;

  console.log(formData)
    // this handles all onChange events on inputs ot keep it controlled.
    // ...formData puts each piece of state in a dictionary and updates each one. Rather ->
    // If we didnt spread, then it would create a dictionary for each one.
    // Event.target.name is then ame of the input set as the key, event.target.value is the value of the input getting set as the input   
  const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value})
  
  return (
      <form onSubmit={e => {
        //   preventDefault stops the form from reloading the browser
          e.preventDefault();
          props.onFormSubmit(formData);
        }
        }>
        <input name="user" value={user} onChange={(e) => onChange(e)} />
        <input name="discription" value={discription} onChange={(e) => onChange(e)} />
        <input name="time" value={time} onChange={(e) => onChange(e)} />
        <button type="submit" value="Submit">Submit</button>
      </form >
  );
};

export default Post;