import { useEffect, useState } from 'react'

function UserLogin({ onLogin }) {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        fetch("https://localhost:7238/api/users/1")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Fetching user failed.")
                }
                return res.json();
            })
            .then(data => { 
                console.log("Fetched user:", data); 
                setUser(data);})
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        if (user) {
            console.log("Logging in with:", user)
            onLogin(user);
        }
    }

    return (
        <div className="modal-form-background">
        <div className="form-container">
            <div className="form-header">
                <h1>Login to Ventixe</h1>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <form className="form-box" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-input" type="text" id="username" name="username" value={loading ? "Loading..." : user?.userName || ""} disabled />
                </div>   
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-input" type="password" id="password" name="password" value="password" disabled />
                </div>   

                <button className="btn-box form" type="submit" disabled={loading || !user}>
                    <div className="btn-standard large">
                        Login
                    </div>
                </button>
            </form>
        </div>
    </div>
    )
}
export default UserLogin 