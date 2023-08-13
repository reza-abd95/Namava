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

const persistor = persistStore(store);

const inter = Inter({ subsets: ["latin"] });
// export const metadata = {
//   title: "Namava",
//   description: "Generated by Number One",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>

          <HeaderSticky/>
        </nav>
        <main>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading = {<div>loading ..</div>}>
              
              {children}
            </PersistGate>
          </Provider>
        </main>
        <FooterNavbar /*isFixed={!isIntersecting}*/ />
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
