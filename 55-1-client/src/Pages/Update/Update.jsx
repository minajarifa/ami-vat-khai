import { useLoaderData } from "react-router-dom";

const Update = () => {
    const useLoadedData = useLoaderData();
    console.log(useLoadedData);
    return (
        <div>
            <h1>update user name {useLoadedData.name}</h1>
        </div>
    );
};

export default Update;