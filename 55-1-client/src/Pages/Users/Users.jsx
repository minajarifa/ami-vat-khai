import useUsers from "../../Hooks/useUsers/useUsers";
import User from "./User/User";


const Users = () => {
  
    const [users]=useUsers();
    
    return (
        <div >
            <h1 className="text-3xl text-center">users : {users.length}</h1>
           <div className="grid grid-cols-3">
           {
                users.map(user=><User user={user} key={user._id}></User>)
            }
           </div>
        </div>
    );
};

export default Users;