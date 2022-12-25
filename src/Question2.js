import React from 'react'

function Question2() {

    const handleSubmit = (e) => {
        // e.preventDefault();
        alert('Form Submitted successfully');

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input minLength='4' maxLength='10' required></input>

            <label>Email</label>
            <input type='email' required></input>

            <label>Password</label>
            <input type='password' minLength='4' required></input>

            <label>Gender</label>
            <input type=''></input>

            <button>Sumbit</button>
        </form>
    </div>
  )
}

export default Question2