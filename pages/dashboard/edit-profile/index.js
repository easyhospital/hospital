import React, {useContext} from 'react';
import EditUser from '../../../src/components/EditUser';
import { FirebaseContext } from '../../../firebase';
import Router from 'next/router';

const EditProfile = ({user}) => {
    const { usuario } = useContext(FirebaseContext);

        if(usuario == null) {
           Router.push('/')
        }

    return ( 
        <div>
        <EditUser/>
        </div>
     );
}
 
export default EditProfile;