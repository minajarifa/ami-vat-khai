import useUsers from "../../Hooks/useUsers/useUsers";
import User from "./User/User";


const Users = () => {
  
    const [users]=useUsers();
    console.log(users);
    return (
        <div className="grid grid-cols-3">
            {
                users.map(user=><User user={user} key={user._id}></User>)
            }
        </div>
    );
};

export default Users;