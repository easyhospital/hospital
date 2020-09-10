import React, { useEffect, useState } from 'react';
import firebase from '../firebase';
import Router from 'next/router';

function useAutenticacion() {
    const [ usuarioAutenticado, guardarUsuarioAutenticado] = useState(null);

    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if( user ) {
                guardarUsuarioAutenticado(user);
                         
            } else {
                guardarUsuarioAutenticado(null);
                console.log('error en useAutenticacion')
                Router.push('/');
                
            }
        });
        return () => unsuscribe();
    }, []);

    return  usuarioAutenticado ;
}
export default useAutenticacion;