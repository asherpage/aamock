import { useState} from 'react'
import axios from 'axios';

const Signup = ({ onLogin }) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassowrd, setConfirmPassowrd] = useState("")
    const [error, setError] = useState('');


    const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassowrd) {
        setError('Passwords do not match');
        return;
    }
    try {
        const response = await axios.post('http://localhost:5000/api/signup', { email, password });
        if (response.data.success) {
            onLogin(response.data.user);
            // Clear text boxes
            setEmail('');
            setPassword('');
            setConfirmPassowrd('');
        } else {
            setError(response.data.message);
        }
    } catch (error) {
        console.error(error);
        setError('Internal server error');
    }
}

    return(
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input
                 type="email"
                 placeholder='Enter Email'
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
                 required
                 />
                 <input
                 type="password"
                 placeholder='Enter Password'
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                 required
                 />
                 <input
                 type="password"
                 placeholder='confirm Password'
                 value={confirmPassowrd}
                 onChange={(e)=> setConfirmPassowrd(e.target.value)}
                 required
                 />
                 <button type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Signup