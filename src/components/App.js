// App.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (user) => {
        setUser(user);
    };

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user.email}!</h2>
                    <button onClick={() => setUser(null)}>Logout</button>
                </div>
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
