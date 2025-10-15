import '../styles/User.css';
import { useLocation } from "react-router-dom";

import {Link} from 'react-router-dom';

export default function User(){
    const location = useLocation();
    const { email } = location.state || {};
    return(
        <section className='user_main'>
              <h2>Bienvenue sur ton profil !</h2>
      {email ? (
        <p>Ton adresse e-mail : <strong>{email}</strong></p>
      ) : (
        <p>Aucune information trouvée.</p>
      )}
        </section>
    )
}


