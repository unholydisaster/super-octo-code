import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar"
import Footer from "@/components/Footer";

export default function Layouts({children}){

    return(
        <>
        <Head>
            <title>
                Rahacode.com
            </title>
        </Head>
        <main>
        <Navbar/>
        {children}
        <Footer/>
        </main>
        </>
    )
}