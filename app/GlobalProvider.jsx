'use client'

import {CartProvider}  from "../context/CartContext";
import {AuthProvider} from '../context/AuthContext';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SessionProvider} from  'next-auth/react'

export function GlobalProvider({ children }) {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <AuthProvider>
        <CartProvider>
          <SessionProvider>
          {children}
          </SessionProvider>
         
          </CartProvider>
      </AuthProvider>
    </>
  );
}

