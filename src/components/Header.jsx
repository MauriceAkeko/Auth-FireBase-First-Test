import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";




export default function Header() {

    return(
        <header className='head_main'>

         <Link to='/' className='head_link'>
         <IoIosHome className='head_ico' />
        <p className='head_text'>
            Accueil
        </p>
        </Link>

        <Link to='/Login' className='head_link'>
        <FaUser className='head_ico' />
        <p className='head_text'>
            Se connecter
        </p>
        </Link>

        <Link to='/User' className='head_link'>
         <FaUserCircle className='head_ico' />
        <p className='head_text'>
            Voir profil
        </p>
        </Link>
        </header>
    )
}

