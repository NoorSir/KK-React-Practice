function Footer(){
	return(
		<>
			
	{/* // <!-- footer section --> */}
<footer className="text-center text-white" style={{backgroundColor: "#111111"}}>
		{/* <!-- Grid container --> */}
		<div className="container pt-4">
		  {/* <!-- Section: Social media --> */}
		  <section className="mb-4">
			{/* <!-- Facebook --> */}
			<a
			  className="btn btn-link btn-floating btn-lg text-dark m-1"
			  href="https://www.facebook.com/zeeshan.noor.3979"
			  role="button"
			  target="blank"
			  data-mdb-ripple-color="dark"
			  ><i className="fab fa-facebook-f"></i> 
			</a>
	  
			{/* <!-- Twitter --> */}
			<a
			  className="btn btn-link btn-floating btn-lg text-dark m-1"
			  href="https://twitter.com/ZNoorOfficial?t=UMl0YPZvngwuzEV0ItnuSw&s=09"
			  role="button"
			  target="blank"
			  data-mdb-ripple-color="dark"
			  ><i className="fab fa-twitter"></i>
			</a>
	  
			{/* <!-- Instagram --> */}
			<a
			  className="btn btn-link btn-floating btn-lg text-dark m-1"
			  href="https://www.instagram.com/zeeshannoorofficial/"
			  role="button"
			  target="blank"
			  data-mdb-ripple-color="dark"
			  ><i className="fab fa-instagram"></i>
			 </a>
	  
			{/* <!-- Linkedin --> */}
			<a
			  className="btn btn-link btn-floating btn-lg text-dark m-1"
			  href="https://www.linkedin.com/in/zeeshan-noor-01412824a"
			  role="button"
			  target="blank"
			  data-mdb-ripple-color="dark"
			  ><i className="fab fa-linkedin"></i>
			</a>
			{/* <!-- Github --> */}
			<a
			  className="btn btn-link btn-floating btn-lg text-dark m-1"
			  href="https://github.com/NoorSir"
			  role="button"
			  target="blank"
			  data-mdb-ripple-color="dark"
			  ><i className="fab fa-github"></i>
			</a>
		  </section>
		  {/* <!-- Section: Social media --> */}
		</div>
		{/* <!-- Grid container --> */}
	  
		{/* <!-- Copyright --> */}

		<div className="text-center text-dark p-3" style={{backgroundColor:"black"}}>
		  © 2022 Copyright:
		  <a className="text-dark" href="/">Noor</a>
		</div>
		{/* <!-- Copyright --> */}
</footer>



		</>
	);
}
export default Footer;