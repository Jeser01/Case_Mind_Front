import { SignupForm } from '../components/SignupForm'
import '../css/Signup.css'

export function Signup(){
    return(
        <div className="container">
            <div className="inforSide">
                <h1 className="signupTitle">Crie sua <span className="purple">conta</span> em apenas alguns segundos!</h1>
                <img className="signupImage" src="/signup.png" alt="" width={150}/>
            </div>
            <div className="signup">
                <div className="formContainer">
                    <div>
                        <SignupForm />
                    </div>
                </div>
            </div>
        </div>
    )
}