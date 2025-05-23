import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { doctors } from "../assets/assets";

export const AppContext = createContext()



const AppContextProvider = (props) => {
    const value = {
        doctors,
    }

    return (
       
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider