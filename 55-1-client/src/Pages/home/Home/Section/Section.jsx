
const Section = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const users = { email, password };
    console.log(users);
   fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(users)
   })
   .then(res=>res.json())
   .then(data=>{
   if(data.insertedId){
    console.log(data);
    alert('add insertedId')
   }
   })
  };
  return (
    <div className=" my-20">
      <div class="hero-content flex-col ">
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleAddUser} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                class="input input-bordered"
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
                required
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <input type="submit" value="Add user" name="" id="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section;
