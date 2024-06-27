
import { FaTrash } from "react-icons/fa";
const user = ({user}) => {
    const{
        email,
        password
        
        }=user;
        const handleDelete = (_id)=>{
            console.log(_id);
            fetch(`http://localhost:5000/users/${_id}`,{
                method:'DELETE',

            })
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
            })
        }
    return (
        <div className="m-5 flex">
           <div>
           <h1>{email}</h1>
           <h1>{password}</h1>
           </div>
            <button onClick={()=>handleDelete(user._id)} className="ml-5 text-red-700"><FaTrash /></button>
        </div>
    );
};

export default user;