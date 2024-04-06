import { useContext, useState } from 'react';
import { UserContext } from '@/lib/UserContext';

export default function Login() {
  // Allows us to access the user state and update it within this page
  const [user, setUser] = useContext(UserContext);
  // Our email state that we'll use for our login form
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // We'll fill in the rest of this later
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Send Magic Link</button>
    </form>
  );
}