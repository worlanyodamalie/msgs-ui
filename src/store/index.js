import { createStore } from 'vuex'

export default createStore({
    state(){
        return {
            user: []
        }
    },
    mutations: {
        adduser( state , item){
            state.user = item 
        }
    },
    getters:{
        getUser(state){
            return state.user;
        }
    }
});