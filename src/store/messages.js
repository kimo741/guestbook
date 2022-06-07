import {addMessage, delletMessage, getMessage ,editeMessage} from "../../firebase/methods/methods";
// , addMessage , delletMessage ,edtitMessage
const prefix = "category";

const state = {
    navVisability: false,
    messages: [],
    ShowModal: false,
}
const mutations = {
    GET_MESSAGES(state, payload) {
        state.messages = payload
    },
    NAV_TOGLE(state) {
        state.navVisability = !state.navVisability;
    },
    TOGLE_MODALE(state) {
        state.ShowModal = !state.ShowModal;
    },
    ADD_MESSAGES(state, payload) {
        state.messages.unshift(payload)
    },
    DELETE_MESSAGE(state, payload) {
        state.messages = payload
    }
};

const actions = {
    // async getCats( commit , payload) {
    //   const { data } = await api.get(`${prefix}/show-table?${payload}`);
    //   commit("GET_CATS", await data);
    //   return data;
    // },
    async getMessages({commit}, payload) {
        await getMessage("message").then((querySnapshot) => {
            let data = querySnapshot.docs.map((doc) => Object.assign({}, doc.data(), {id: doc.id}));
            commit("GET_MESSAGES", data);
            console.log(data)
        }).catch((err) => {
            console.log(err);
        });
    }, addMessages({commit}, payload) {
        addMessage("message", payload).then((doc) => {
            commit("ADD_MESSAGES", Object.assign({} , payload , {id: doc.id} ));
            console.log(payload)
        }).catch((err) => {
            console.log(err);
        });
    }, deleteMessage({ state ,  commit}, payloadId) {
       return  delletMessage("message", payloadId)
            .then(() => {
                commit("DELETE_MESSAGE" , state.messages.filter((m) => m.id !== payloadId  )
            )
            }).catch((err) => {
            console.log(err);
        });
    },
    async editeMessage({ state ,  commit} , payload ){
        await editeMessage("message" ,payload ).then((doc)=>{

        } )

    }

};
const getters = {
    cats: (state) => {
        return state.cats;
    },

    messages: (state) => {
        return state.messages;
    },
};

export default {
    namespaced: true, getters, mutations, actions, state,
};
