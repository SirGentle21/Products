import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <navbar className="navbar">
        <div className="main-div">
          <ul>
            <li className="list">Home</li>
            <li className="list">About</li>
            <li className="list">Contact</li>
          </ul>
        </div>
        <div className="second-div">
          <ul>
            <li className="landing">Landing</li>
            <li className="btn"><button>Buy Now</button></li>
          </ul>
        </div>
      </navbar>
    </>
  )
}

export default Navbar;
