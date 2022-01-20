//Autentication system
import { useAuth } from '../hooks/useAuth'

//Images
import illustrationImg from '../assets/images/illustration.svg'
import logoImg  from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

//Components
import '../styles/auth.scss'
import { Button } from '../components/Button'

//Navigate

import {useNavigate} from 'react-router-dom'



export function Home (){
    const navigate = useNavigate();
    const {user,signInWithGoogle} = useAuth();

    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle();
        }

        navigate('/new');
    }
   

    return(
    <div id='page-auth'>
        <aside>
            <img src={illustrationImg} alt="Ilustração" />
            <strong>Crie salas de Q&amp;A ao vivo</strong>
            <p>Tire as dúvidas da sua audiência em tempo-real</p>
        </aside>
        <main>
            <div className='main-content'>
                <img src={logoImg} alt="letmeask" />
                <button onClick={handleCreateRoom}className='create-room'>
                    <img src={googleIconImg} alt="logo do google" />
                    Crie sua sala com o google
                </button>
                <div className='separator'>ou entrar em uma salas</div>
                <form action="">
                    <input
                     type="text"
                     placeholder='Digite o código da sala' 
                    />
                    <Button type='submit' onClick={() => navigate('/new')}>Entrar na sala</Button>
                </form>
            </div>
        </main>
    </div>
    )
}