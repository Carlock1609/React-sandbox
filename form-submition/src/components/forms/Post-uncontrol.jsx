import React from 'react';
import { useForm } from 'react-hook-form';

// REACT-HOOK-FORM is ment for uncontrolled  input handling
// That means not handling your input fields or settign the value
const Post = (props) => {
    const { register, handleSubmit } = useForm();
    
    return (
        <form onSubmit={handleSubmit(props.onFormSubmit)}>
          <input ref={register} name="discription" />
          <input ref={register} name="time" />
          <button type="submit" value="Submit">Submit</button>
        </form >
    );
  };
  
  export default Post;





// THIS is a mixture of controleld and uncontrolled. Learn another way.
// const Post = (props) => {
//   const [discription, setDiscription] = React.useState('');
//   const [time, setTime] = React.useState('');
//   const { register, handleSubmit } = useForm();
//   console.log(discription);
//   console.log(time);
  
//   return (
//       <form onSubmit={handleSubmit(props.onFormSubmit)}>
//         <input ref={register} name="discription" value={discription} onChange={(e) => setDiscription(e.target.value)} />
//         <input ref={register} name="time" value={time} onChange={(e) => setTime(e.target.value)} />
//         <button type="submit" value="Submit">Submit</button>
//       </form >
//   );
// };

// export default Post;