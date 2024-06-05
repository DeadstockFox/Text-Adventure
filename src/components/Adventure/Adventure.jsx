import { useDispatch } from "react-redux";


const Adventure = () => {

    const dispatch = useDispatch();


    return (
        <>
        Hello

        <button onClick={() => dispatch({ type: 'LOGOUT' })} >Logout</button>
        </>

    )


}

export default Adventure;