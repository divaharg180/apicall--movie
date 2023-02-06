import { createContext, useState } from "react";


export const GlobalContext = createContext({
    searchParm : '',
    handleOnChange : ()=>{},
    handleSubmit : () => {},
    movieList : [],
    loading : false
});

const GlobalState = ({children})=>{

    const [searchParam,setSearchParam] = useState('');

    const handleOnChange = ()=>{}
    const handleSubmit = () => {}
   
    const contextValue = {
        searchParm,
        handleOnChange,
        handleSubmit,
        movieList : [],
        loading : false
    };
    return(
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
};
export default GlobalContext;