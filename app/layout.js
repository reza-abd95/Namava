"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import HeaderSticky from "@/app/(components)/HeaderSticky";
import Footer from "@/app/(components)/Footer";
import FooterNavbar from "./(components)/FooterNavbar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./redux/store";
import Loading from "./loading";
import { useState,useEffect } from "react";


const persistor = persistStore(store);

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 3000); 
  }, [contentLoaded]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
           <HeaderSticky/>
        </nav>
        <main>
          <Provider store={store}>
          <PersistGate persistor={persistor} loading = {<div>loading ..</div>}>
              {contentLoaded ? children : <Loading/>}
            </PersistGate>
          </Provider>
        </main>
        <FooterNavbar/>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}




