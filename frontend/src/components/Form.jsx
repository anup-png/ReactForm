import React, { useState } from 'react'

const Form = () => {

    const [formData,setFormData] = useState({
        username:" ",
        email:" ",
        password:" "
,
    })
    function HandleMe(e){

        const {name,value} =e.target ;
        setFormData((prevData)=>({
          ...prevData,
          [name]:value
        }))
    }
    function onBubmit(e){
        e.preventDefault();
        console.log(formData.username);
    }

  return (
    <div>
        <form onSubmit={onBubmit}>
            <input name="username" type="text" value={formData.username} onChange={HandleMe}/>
            <input name="email" type="email" value={formData.email} onChange={HandleMe}/>
            <input name="password" type="password" value={formData.password} onChange={HandleMe}/>
            <button type='submit'> click here to submit</button>
        </form>
    </div>
  )
}

export default Form