

const user = ({user}) => {
    const{
        email,
        password
        
        }=user;
    return (
        <div className="m-5">
            <h1>{email}</h1>
            <h1>{password}</h1>
            <button>X</button>
        </div>
    );
};

export default user;