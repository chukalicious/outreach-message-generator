import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-secondary text-secondary-content">
      <div className="flex-1">
        <button className="btn btn-ghost normal-case text-xl">
          Outreach Message Generator
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 bg-base-100 text-base-content rounded-xl">
          <li tabIndex={0}>
            <button>
              Choose a template
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </button>
            <ul className="p-2 bg-base-100">
              <li>
                <button>
                  <Link to="/hiring-manager">Hiring Manager</Link>
                </button>
              </li>
              <li>
                <button>
                  <Link to="/little-info-message">
                    Message with little info
                  </Link>
                </button>
              </li>
              <li tabIndex={0} className="dropdown dropdown-hover">
                <button>
                  For Peer
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </button>
                <ul className="dropdown-content p-2 bg-base-100">
                  <li>
                    <button>
                      <Link to="/email-to-peer">Email Message</Link>
                    </button>
                  </li>
                  <li>
                    <button>
                      <Link to="/linkedIn-to-peer">
                        LinkedIn Message (Short)
                      </Link>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
