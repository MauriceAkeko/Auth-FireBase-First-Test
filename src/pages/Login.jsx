import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Connexion réussie !");
      navigate("/User", { state: { email: email } });
    } catch (error) {
      // Gestion d'erreurs améliorée comme montré ci-dessus
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='log_main'>
      <div className='log_container'>
        <h3 className='log_title'>Connectez-vous</h3>

        <form onSubmit={handleSubmit}>
          <input
            className='log_input'
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className='log_input'
            type="password"
            placeholder='Mot de passe'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <button 
            type="submit" 
            className='log_button' 
            disabled={loading}
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        <p className='log_text'>
          Vous n'avez pas de compte ?{" "}
          <Link to="/SignUp" className='log_link'>Inscrivez-vous</Link>
        </p>
      </div>
    </section>
  );
}