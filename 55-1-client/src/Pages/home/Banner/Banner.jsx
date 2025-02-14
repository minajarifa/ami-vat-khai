const Banner = () => {
  return (
    <div
      className="hero h-[400px] rounded-3xl"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/sWP18QD/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
