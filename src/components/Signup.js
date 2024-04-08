import { useState} from 'react'
import axios from 'axios';
import phone from '../styles/images/2d9111c8986942157eb784b9611815fb.png'

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
        <div className="log-container">
    <div className="log-box">
        <div className="log-left-side">
            <img src={phone} alt="Your Image" />
        </div>
        <div className="log-right-side">
            <h2><span>A&A </span>Signup</h2>
            <form onSubmit={handleSignup}>
                <label htmlFor="username">Email:</label>
                <input
                className='log-input'
                 type="email"
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
                 required
                 />
                 <label htmlFor="username">Password:</label>
                 <input
                 className='log-input'
                 type="password"
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                 required
                 />
                 <label htmlFor="username">Confirm Password:</label>
                 <input
                 className='log-input'
                 type="password"
                 value={confirmPassowrd}
                 onChange={(e)=> setConfirmPassowrd(e.target.value)}
                 required
                 />
                 <div className="input-group checkbox-group">
                    <input type="checkbox" id="save-password" name="save-password" />
                    <label htmlFor="save-password">Save Password</label>
                </div>
                 <button type='submit' className='log-button'>Signup</button>
            </form>
        </div>
    </div>
</div>
    )
}

export default Signup