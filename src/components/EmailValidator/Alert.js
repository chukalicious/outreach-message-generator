const Alert = (props) => {
  return (
    <>
      {props.isDeliverable ? (
        <div className="w-full">
          <div className="flex alert alert-info shadow-lg max-w-xs mx-auto">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>
                The email address is valid!{" "}
                <span className="text-xl p-1">🙌</span>{" "}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="alert alert-error shadow-lg max-w-xs mx-auto">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                The email address is invalid{" "}
                <span className="text-xl p-1">😔</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
