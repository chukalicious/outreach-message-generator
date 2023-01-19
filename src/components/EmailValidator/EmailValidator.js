const EmailValidator = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs mx-auto mt-20">
          <label className="label">
            <span className="label-text">Enter here:</span>
          </label>
          <input
            type="text"
            placeholder="Email address to verify"
            className="input input-bordered w-full max-w-xs input-primary"
          />
          <label className="label"></label>
          <button className="btn btn-primary">Valid?</button>
        </div>
      </form>
    </div>
  );
};

export default EmailValidator;
