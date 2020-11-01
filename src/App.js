import React, { useState, useEffect } from 'react';
import './App.css';
import auth from './firebase';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Run once when the component loads...
    auth.onAuthStateChanged( user => {
      console.log("user: " + user);
      
      if (user) {
        // User is signed in.
        setUser(user)
      } else {
        // No user is signed in.
        setUser(null)
      }
    });
  }, [])

  const login = (e) => {
    // it goes to the google server and comes back with the response either pass or fail
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(username, password)
      // .then(response => {
      //   setUser(response.user);
      // })
      .catch(error => {
        setError(error.message)
      })
  }

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(username, password)
      // .then(response => {
      //   console.log(response);
      // })
      .catch(error => {
        setError(error.message)
      })
  }
  console.log(user);

  // value={username} and username is initially set as blank.
  // everytime we type something in the input it triggers the event so we need to update the state.

  return (
    <div className="App">
      <h1>My login system</h1>

      { user ? <p>Logged in</p> : <p>You are logged out</p>}

      {!user ? (
        <form action="">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="enter username" /> 
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password" />
          <button onClick={login}>Login</button>
          <button type="submit" onClick={register}>Register</button>
          {error && <p>{error}</p>}
        </form> 
      ) : (
        <button onClick={e => auth.signOut()}>Logout</button>
      )}
        <button onClick={e => auth.sendPasswordResetEmail(username)
          .catch(error => setError(error.message))}>Forgot Password?</button>
    </div>
  );
}

export default App;
