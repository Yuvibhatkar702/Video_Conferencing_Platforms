import React from 'react'

export default function SignIn() {
  return (

    <form method="post" action="#">

      <div class="start">
        <div class="main">
          <div class="top">
            <h2>Sign Up</h2>
            <p>It's quick and easy.</p>
          </div>

          <hr />
          <input type="text" name="name" placeholder="Full Name" id="text" />
          <input type="number" name="mobile" placeholder="Mobile Number" id="text" />
          <input type="email" name="email" placeholder="Email id" id="text" />
          <input type="password" name="password" placeholder="password" id="text" />
          <fieldset>
            <legend name="gender">Gender</legend>
            <div>
              <input type="radio" name="gender" value="Male" />
              <label for="gender">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="Female" />
              <label for="gender">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="Other" />
              <label for="gender">Other</label>
            </div>
          </fieldset>

          <div class="dob" >
            <label for="dob">Date Of Birth: </label>
            <input type="date" name="dob" id="dob" />
          </div>

          <div class="btn">
            <button>Submit</button>
            <button type="reset">Reset</button>
          </div>
        </div> 
      </div>

    </form>

  )
}
