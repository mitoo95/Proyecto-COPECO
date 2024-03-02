import React from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { database } from "../../firebaseConfig";

function ForgotPassword (){

    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database,emalVal).then(data=>{
            alert("Revise su correo")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(
        <div className="App">
            <h1 class="letrasFormulario" >Olvido Contraseña</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input name="email"
                    placeholder="Correo electronico"
                    type='email'
                    className="form-control rounded"
                /><br/><br/>
                <button className="btn btn-primary">Reset</button>
            </form>
        </div>
    )

}

export default ForgotPassword;