const initialState = {
    userINF: [],
    token: localStorage.getItem("token")
}

const user = (state = initialState, action) =>{
    switch(action.type){
        case "register/post/pending":{
            return{
                ...state,
                loading: true
            }
        }
        case "register/post/fullfilled":{
            return{
                ...state,
                loading: false
            }
        }
        case "register/post/rejected":{
            return{
                ...state,
                error: action.error
            }
        }
        case "login":{
            return{
                ...state,
                loading: true
            }
        }
        case "login/post/fullfilled":{
            return{
                ...state,
                loading: false
            }
        }
        case "login/post/rejected":{
            return{
                ...state,
                error: action.error
            }
        }
        case "user/get/pending":
            return{
                ...state,
                loading: true
            }
        case "user/get/fullfilled":
            return{
                ...state,
                userINF: [
                    ...state.userINF,
                    action.payload
                ],
                loading: false
            }
        case "user/get/rejected":
            return{
                ...state,
                error: action.error
            }
        default:
            return{
            ...state
            }
        
    }
}
export default user;
export const registerUser = (firstname, lastname, login, email, password, passwordValid)=>{
    return async (dispatch)=>{
        dispatch({type: "register/post/pending"})
        try{
            await fetch("http://localhost:4000/user/signup", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({firstname, lastname, login, email, password, passwordValid})
            })
            dispatch({type: "register/post/fullfilled"})

        }
        catch(err){
            dispatch({type: "register/post/rejected", error: err.toString()})
        }
    }
}

export const loginUser = (email, password)=>{
    return async (dispatch)=>{
        dispatch({type: "login/post/pending"})
        try{
            const data =  await fetch("http://localhost:4000/user/signin", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({email,password})
            })
            const token = await data.json()
            localStorage.setItem("token", token )
            dispatch({type: "login/post/fullfilled"})

        }
        catch(err){
            dispatch({type: "login/post/rejected", error: err.toString()})
        }
    }
}

export const getUser = ()=>{
    return async (dispatch)=>{
        dispatch({type: "user/get/pending"})
        try{
            const data = await fetch(`http://localhost:4000/user`)
            const user = await data.json()
            dispatch({type: "user/get/fullfilled", payload: user})
        }
        catch(err){
            dispatch({type: "user/get/rejected", error: err.toString()})
        }
    }
}