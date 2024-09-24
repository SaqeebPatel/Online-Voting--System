import React, { useEffect, useState } from 'react'
import axios  from 'axios'
const damo = () => {
   const [user, setuser]= useState([]);
   

   useEffect(()=>{

        const fetchUser = async ()=>{
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setuser(response.data)
            }
            catch(error){
                console.log(error)
            } 
        }
   

   fetchUser();
},[]);


  return (
    <div>
      <h2>user</h2>
      <table>
        <ta
      </table>
    </div>
  )
}

export default damo
