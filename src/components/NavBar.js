

const NavBar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">ApperMarket</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
           <li className="nav-item">
             <a className="nav-link" href="/">Home</a>
           </li>
           <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle dropBtn" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Categories
             </a>
             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
               <a className="dropdown-item" href="/">Action</a>
               <a className="dropdown-item" href="/">Arcade</a>
               <a className="dropdown-item" href="/">Adventure</a>
               <a className="dropdown-item" href="/">Sports</a>
               <a className="dropdown-item" href="/">Strategy</a>
               <div className="dropdown-divider"></div>
               <a className="dropdown-item" href="/">Most Wanted</a>
               <a className="dropdown-item" href="/">Free To Play</a>
             </div>
           </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;
