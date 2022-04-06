const initialState = {
    conversation: []
}

const conversation = (state= initialState, action)=>{
    switch(action.type){
        case "conversation/get/pending":
            return{
                ...state,
                loadingConversation: true,
                error: null
            }
        case "conversation/get/fullfilled":
            return{
                ...state,
                conversation:[
                    ...action.payload
                ],
                loadingConversation: false,
            }
        case "conversation/get/rejected":
        return{
            ...state,
            error: action.error
        }
        default:{
            return{
                ...state
            }
        }
    }
}

export default conversation

export const postConversation = ()=>{
    return async (dispatch, getState)=>{
        const state = getState()
        dispatch({type:"conversation/get/pending"})
        try{
            const data = await fetch("http://localhost:4000/conversation",{
                method: "GET",
                headers: {
                    Authorization: `Bearer ${state.application.token}`,
                    "Content-type": "application/json"
                }
            })
            const conversation = await data.json()
            dispatch({type: "conversation/get/fullfilled", payload: conversation})
        }
        catch(err){
            dispatch({type: "conversation/get/rejected", error: err.toString()})

        }
    }
}

export const getConversation = ()=>{
    return async (dispatch, getState)=>{
        const state = getState()
        dispatch({type:"conversation/get/pending"})
        try{
            const data = await fetch(`http://localhost:4000/conversation`,{
                method: "GET",
                headers: {
                    Authorization: `Bearer ${state.application.token}`,
                    "Content-type": "application/json"
                }
            })
            const conversation = await data.json()
            dispatch({type: "conversation/get/fullfilled", payload: conversation})
        }
        catch(err){
            dispatch({type: "conversation/get/rejected", error: err.toString()})

        }
    }
}