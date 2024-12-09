import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link}  from 'react-router-dom'
import App from '../App';



function Login(props){
    const users = props.users;
    const navigate = useNavigate()

    const [eUsername, setEuser] = useState();
    const [ePassword, setEpassword] = useState();
    const [rUser, setRuser] = useState(true)

    function handleUInput(event){
        setEuser(event.target.value)
    }

    function handleUPassword(event){
        setEpassword (event.target.value)
    }

    function checkUser(){
        var userFound = false;

        users.forEach(function(item){

        

        if((eUsername == item.username) && (ePassword == item.password)){
            userFound = true;
            navigate("/landing",{state:{user:item.username}})

        }
        
            
        })

        if (userFound === false){
            setRuser(false)
        }

    }

    return(<>
        <div className='p-10' style={{ background: "linear-gradient(90deg, #FAD961, #F76B1C)" }}>
            <div className=" p-10 border rounded-md" style={{ background:"linear-gradient(90deg, #FFF9ED, #FDA085)" }}>
            <h1 className='text-3xl font-medium'>Hey Hi!</h1>
                {rUser ? <p>I help you manage your activities after you login! :) </p> : <p className='text-red-500'>Please sign up before login!</p>}

                <div className='flex flex-col gap-2 my-2'>
                    <input type= "text" placeholder='User Name' className='w-52 p-1 bg-transparent border border-black rounded-md' onChange = {handleUInput}></input>
                    <input type="text" placeholder='Password' className='w-52 p-1 bg-transparent border border-black rounded-md' onChange={handleUPassword}></input>
                    <button className='bg-[#8272DA] w-24 p-1 rounded-md' onClick = {checkUser}>Login</button>
                    <p>Don't have an account? <Link className="underline" to={"/signup"}>Sign Up</Link></p>

                </div>


        </div>


    </div>
    </>)
}

export default Login