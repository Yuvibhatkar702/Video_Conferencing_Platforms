import React from 'react'

export default function Authentication() {


  const [username,setUsetname] = React.useState();
  const [password,setPassword] = React.useState();
  const [name,setName] = Reaact.useState();
  const [error,setError] = React.useState();

  const [formState, setFormState] = React.useState(0);


  return (
    <div className="login">
        <div className="right">
            <form method="post" action="/login/check">
                <input type="text" name="email" placeholder="Email address or phone number" id="text" size="50" />
                <input type="password" name="password" placeholder="password" id="text" />
                <button>Log in</button>
                <a href="#">Forgotten password?</a>
                <hr />
            </form>

            <form method="get" action="/Sign">
                <button id="new">Create New account</button>
            </form>           
        </div>
    </div>
        
  )
}
