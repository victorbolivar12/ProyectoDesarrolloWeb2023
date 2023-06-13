export const getPersistedState = (key,initial) => {
    try{
        //eslint-disable-next-line
        const rawState = localStorage.getItem(key);
        const state = JSON.parse(rawState);
        return state;
    }catch(err){
        console.log(err);
        console.error("error loading state with key " + key);
        return initial || null;
    }
};