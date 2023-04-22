import { GlobalStyle} from "../styles/Globals.js";
import React from "react"
import Layouts from "@/layout/Layout.js";

export default function App({Component,pageProps}){
  return (
    <>
      <GlobalStyle/>
        <Layouts>
        <Component {...pageProps} />
        </Layouts>   
      </>
  )
}
