// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add axios call here
//     console.log('Logging in with:', email, password);
//     navigate('/'); // redirect after login
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full mb-3 p-2 border rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full mb-3 p-2 border rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
//             Login
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Don’t have an account?{' '}
//           <Link to="/signup" className="text-blue-500 underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate , Link } from "react-router-dom";

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Fake token, or use API
//     const fakeToken = "abc123";
//     login(fakeToken);
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           className="border p-2 mb-3 block w-full"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           className="border p-2 mb-3 block w-full"
//           placeholder="Password"
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">
//           Login
//         </button>
//       </form>
//         <p className="text-center mt-4">
//         Don’t have an account?{' '}
//           <Link to="/signup" className="text-blue-500 underline">
//           Sign up
//           </Link>
//         </p>
//     </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);

      // Save token
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
