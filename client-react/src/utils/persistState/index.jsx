export const persistState = (storageKey , state) => {
    //eslint-disable-next-line
    localStorage.setItem( storageKey , JSON.stringify(state) );
};