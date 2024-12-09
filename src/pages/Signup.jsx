import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



function Signup(props) {
    const users = props.users;
    const setUsers = props.setUsers;

    const [eUsername, setEusername] = useState();
    const [ePassword, setEpassword] = useState();
    const [econfPassword, setEconfpassword] = useState();
    const [passwordMatch, setPasswordmatch] = useState(true);

    const navigate = useNavigate();

    function handleEuser(event){
        setEusername(event.target.value)
    }

    function handleEpassword(event) {
        setEpassword(event.target.value)
    }

    function handleEconfpassword (event) {
        setEconfpassword(event.target.value)
    }

    function addUser(){
        

        if (ePassword === econfPassword){
            console.log("matching pw")
        setUsers([...users,{username:eUsername, password:ePassword}])
        navigate('/')
        }
        else
        {
            console.log("password not matching")
            setPasswordmatch (false);
        }
    }



    return (<>

        <div className=' p-10' style={{ background: "linear-gradient(90deg, #FAD961, #F76B1C)" }}>
            <div className='bg-[#EFEFEF] border rounded-md p-10' style={{ background: "linear-gradient(90deg, #FFF9ED, #FDA085)" }}  >
                <h1 className='text-3xl font-medium'>Hey Hi</h1>
                <p>Sign up here :)</p>

                <div className='flex flex-col gap-2 my-2'>
                    <input type="text" className='p-1 bg-transparent border border-black rounded-md w-52' placeholder='User Name' onChange={handleEuser}></input>
                    <input type="text" className='p-1 bg-transparent border border-black rounded-md w-52' placeholder='Password' onChange={handleEpassword}></input>
                    <input type="text" className='p-1 bg-transparent border border-black rounded-md w-52' placeholder='Confirm Password' onChange = {handleEconfpassword}></input>
                    <button className='bg-[#FCA201] rounded-md p-1 w-24' onClick={addUser}>Sign Up</button> { passwordMatch ? <p> </p> : <p className='text-red-500'>Password not matching</p>}
                    <p>Already have an account?</p> <Link to={"/"} className='underline'>Login</Link>


                </div>


            </div>


        </div>




    </>)
}
export default Signup