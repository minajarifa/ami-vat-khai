import { useLoaderData } from "react-router-dom";

const Update = () => {
  const LoadedData = useLoaderData();
  console.log(LoadedData);
  const handleUpdateBtn = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    const users = { email, password };
    fetch(`http://localhost:5000/users/${LoadedData._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(users)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1>update user name {LoadedData.email}</h1>
      <div className=" my-20">
        <div class="hero-content flex-col ">
          <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUpdateBtn} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  class="input input-bordered"
                  defaultValue={LoadedData?.email}
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  class="input input-bordered"
                  defaultValue={LoadedData?.password}
                  required
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <input type="submit" value="Update" name="" id="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
