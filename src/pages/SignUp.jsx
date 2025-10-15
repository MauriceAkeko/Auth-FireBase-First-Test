import '../styles/SignUp.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert("Compte créé avec succès !");
      navigate("/User", { state: { email: user.email } });
    } catch (error) {
      alert(error.message);
    };

  };

  return (
    <section className='sign_main'>
      <div className='sign_container'>
        <h3 className='sign_title'>Créez votre compte</h3>

        <form onSubmit={handleSubmit}>
          <input
            className='sign_input'
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className='sign_input'
            type="password"
            placeholder='Mot de passe'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className='sign_button' type="submit">
            Créer un compte
          </button>
        </form>

        <p className='log_text'>
          Vous possédez déjà un compte ?{" "}
          <Link to="/Login" className='log_link'>Connectez-vous</Link>
        </p>
      </div>
    </section>
  );
}
