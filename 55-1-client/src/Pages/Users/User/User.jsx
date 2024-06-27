import { MdSecurityUpdate } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { email, password } = user;

  const handleDeleted = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deletedCount successfully");
        }
      });
  };
  return (
    <div className="m-5 flex">
      <div>
        <h1>{email}</h1>
        <h1>{password}</h1>
      </div>
      <div className="ml-5 ">
        <Link to={`/Update/${user._id}`}>
          <button>
            <MdSecurityUpdate />
          </button>
        </Link>
        <button
          className="text-red-700"
          onClick={() => handleDeleted(user._id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default User;
