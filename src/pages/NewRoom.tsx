//Autentication system


//Images
import illustrationImg from '../assets/images/illustration.svg'
import logoImg  from '../assets/images/logo.svg'

//Components
import { Link } from 'react-router-dom'
import '../styles/auth.scss'
import { Button } from '../components/Button'


export function NewRoom (){

    //const {user} = useContext(AuthContext)

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
                <h2>Criar uma nova sala</h2>
                <form action="">
                    <input
                     type="text"
                     placeholder='Digite o código da sala' 
                    />
                    <Button type='submit'>Criar sala</Button>
                </form>
                <p>Quer entrar em umsa sala existente?<Link to='/home'>clique aqui</Link></p>
            </div>
        </main>
    </div>
    )
}