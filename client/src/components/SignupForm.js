import React from 'react'

function SignupForm() {
  return (
    <div className="signup-form">
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
      <button type="submit" id="signup">Sign Up</button>
    </div>
  )
}

export default SignupForm
