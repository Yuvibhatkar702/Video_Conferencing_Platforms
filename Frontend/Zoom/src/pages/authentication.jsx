import React from 'react'

export default function Authentication() {


  // const [username,setUsetname] = React.useState();
  // const [password,setPassword] = React.useState();
  // const [name,setName] = Reaact.useState();
  // const [error,setError] = React.useState();
  // const [massage,setMassage] = React.useState();

  // const [formState, setFormState] = React.useState(0);

  // const [open, setOpen] = React.useState(false);

  return (
    <div className="login">
        <div className="right">
            {/* <div>
              <Button id='btn' variant={formState === 0 ? "contained" : ""} onClick={() => {setFormState(0)}}>Sign In</Button>
              <Button id='btn' variant={formState === 1 ? "contained" : ""} onClick={() => {setFormState(1)}}>Sign Up</Button>
            </div> */}

            <form method="post" action="/login/check">
              {/* { formState === 1 ? 
                <input type='text' name='fullName' placeholder='Full Name' id='text' />
               : null   } */}
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
