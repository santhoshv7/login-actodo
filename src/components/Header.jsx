
import Login from "../pages/Login"
import Landing from "../pages/Landing"
function Header(props){
    return(
        <>
        <h1 className="text-3xl font-medium">Hello {props.username}!</h1>
        <p>I help you to manage your activities :)</p>
        </>
    )
}

export default Header