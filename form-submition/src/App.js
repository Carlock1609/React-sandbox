import React from 'react';

import Post1 from './components/forms/Post-uncontrol';
import Post2 from './components/forms/Post-control';

const App = () => {
    const [form, setForm] = React.useState([])
    
    const onFormSubmit = (data) => {
        setForm([])
        setForm([data])
    }
    
    const displayForm = form.map((data) => {
        return (
            <div key={data.user}>
                <span>{data.discription}</span>{"   "}
                <span>{data.time}</span>
                <span>{data.user}</span>
            </div>
        )
    })

    return (
      <div>
        <h1>FORM HANDLING</h1>
        {/* <Post1 onFormSubmit={onFormSubmit} /> */}
        <Post2 onFormSubmit={onFormSubmit} />
        {displayForm}
      </div>
    )
};

export default App;

