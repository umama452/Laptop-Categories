// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add axios call here
//     console.log('Signing up with:', form);
//     navigate('/LaptopCard'); // redirect after signup
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full mb-3 p-2 border rounded"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full mb-3 p-2 border rounded"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full mb-3 p-2 border rounded"
//             value={form.password}
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//             required
//           />
//           <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
//             Sign Up
//           </button>
//         </form>
//         {/* <p className="text-center mt-4">
//         Already have an account?{' '}
//           <Link to="/login" className="text-blue-500 underline">
//           Login
//           </Link>
//         </p> */}
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      
      // Save token to localStorage (optional for auth)
      localStorage.setItem('token', res.data.token);

      alert('Signup successful!');
      navigate('/'); // Redirect to home
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-3 p-2 border rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
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
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
