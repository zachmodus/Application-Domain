import React, { useEffect, useState } from 'react'
import {collection,getDocs} from 'firebase/firestore'
import {db} from './firebase'

export default function ListUsers() {
    const[users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    },[])

    function getUsers() {
        const usercollecitonRef = collection (db,'users')
        getDocs(usercollecitonRef)
        .then(response => { 
        console.log(response)
        })
        .catch(error => console.log(error.message))
    }


    return (
        <div>
            <h4>ListUsers</h4>
        </div>
    )
}
