const initialState = {
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
        default:
            return{
            ...state
            }
        
    }
}
export default user;
export const registerUser = (name,email, password)=>{
    return async (dispatch)=>{
        dispatch({type: "register/post/pending"})
        try{
            await fetch("", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({name,email,password})
            })
            dispatch({type: "register/post/fullfilled"})

        }
        catch(err){
            dispatch({type: "register/post/rejected", error: err.toString()})
        }
    }
}

export const registerUser = (name,email, password)=>{
    return async (dispatch)=>{
        dispatch({type: "login/post/pending"})
        try{
            const data =  await fetch("", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({name,email,password})
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