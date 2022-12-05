// import {useRef} from 'react';
function Header(){
	
	
	return(
		<>
			
		{/* <!-- ============= COMPONENT ============== --> */}
	<nav className="autohide navbar navbar-expand-md navbar-dark">
	<div className="container-fluid" >
		<div className="animbrand">
		<a className="navbar-brand animate" href="https://noorsir.github.io/KK-React-Practice/">Noor</a>
		</div>
	<button className="navbar-toggler" style={{boxShadow:"unset"}} type="button" data-bs-toggle="collapse"  data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
		</button>
	<div className="collapse navbar-collapse justify-content-end" id="main_nav">

		<ul className="navbar-nav mx-auto">
			<li className="nav-item active dropdown" ><a className="nav-link " data-toggle="dropdown" href="https://noorsir.github.io/KK-React-Practice/"> Home</a></li>
			<li onClick="getId()" className="nav-item dropdown"><a className="nav-link"  href="#about-myself"> About Me </a></li>
			<li  className="nav-item"><a id="skills" className="nav-link" href="#myskills"  > My Skills </a></li>
			<li className="nav-item"><a id="portfolio" className="nav-link" href="#myportfolio" > Portfolio </a></li>
	
		</ul>

	</div> 
	</div> 
	</nav>
	{/* <!-- ============= COMPONENT END// ============== --> */}





		</>
	);
}
export default Header;

