import React, { useState } from "react";

function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //axios.post to api/users/login
    // data = form

  };

  return (
    <div class="login-form">
      <form onSubmit={handleFormSubmit}>
        <input
          value={form.email}
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          value={form.password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
      </form>
      <button type="submit" id="login">
        Login
      </button>
    </div>
  );
}

export default LoginForm;
