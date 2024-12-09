import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer"; 
import { useLocation } from "react-router-dom"

function Landing(){

    const data = useLocation();
    return(
        <>
            <div className="p-16" style={{ background: "linear-gradient(90deg, #FAD961, #F76B1C)" }}>
                <div className=" p-10" style={{ background: "linear-gradient(90deg, #FFF9ED, #FDA085)" }} >
                    <Header username = {data.state.user}/>
                    <div className="flex my-5 justify-around gap-7 flex-wrap">
                        <Card bgcolor={"#8272DA"} title={"23\u00B0"} subtitle={"Chennai"} />
                        <Card bgcolor={"#FD6663"} title={"Dec 08"} subtitle={"18:30:34"} />
                        <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
                    </div>
                    <TodoContainer />


                </div>

            </div>

        </>

    )
}

export default Landing