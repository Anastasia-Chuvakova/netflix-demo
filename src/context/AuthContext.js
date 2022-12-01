import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export function AuthContextProvider({children}){

    return(
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}

export function UserAuth(){
   return useContext(AuthContext) 
}
