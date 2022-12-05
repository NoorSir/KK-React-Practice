import img1 from './images/1.jpg';

import React from 'react';

import cv from './documents/Zeeshan.pdf';
function Main(){
    return(
     <>
			
	<div id="about" className="container-fluid bg " style={{padding: "unset", backgroundColor:" black"}}>
		<div className="tooltip_img">
			<img  src={img1} alt="" />
			<b>Hello, I am </b>
		</div>

		<div className="img_text col-12">
			<h4>Mr. Zeeshan Noor</h4>
			<p>I would love to design and develop your website</p>
			<form method="get" action={cv}>
			<button type ="submit" className="cv btn" id="" >Download CV</button>
			</form>
		</div>
	</div>				

</>
    );
}
export default Main;