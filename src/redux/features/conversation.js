const initialState = {
    conversation: []
}

const conversation = (state= initialState, action)=>{
    switch(action.type){
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
                    Authorization: `Bearer ${state.user.token.id}`,
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
            const data = await fetch("http://localhost:4000/conversation",{
                method: "GET",
                headers: {
                    Authorization: `Bearer ${state.user.token.id}`,
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