import { createContext } from "react";



export const productContext=createContext<{cart:any,setCart:any}|null>(null)