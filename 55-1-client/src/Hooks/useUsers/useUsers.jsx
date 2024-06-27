import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]); 

 useEffect(()=>{
   fetch('http://localhost:5000/users')
   .then(response=>response.json())
   .then(data=>{
     setUsers(data)
  
   })
 },[])
  return [users];
};

export default useUsers;
