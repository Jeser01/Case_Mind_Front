import { LoginForm } from "../components/LoginForm"
import "../css/Login.css"

export function Login(){
    return(
        <div className="container">
            <div className="inforSide">
                <h1 className="loginTitle">Faça login na <span className="purple">plataforma</span>!</h1>
                <img className="loginImage" src="/login1.png" alt="" width={150}/>
            </div>
            <div className="login">
                <div className="formContainer">
                    <div>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}