
function Cards(props){
    return(
        <>

			<div className=" mt-3 col-12 col-sm-6 col-md-4 col-lg-3" id="myportfolio">     
					<div className="content">
						<div className="content-overlay"></div>
						<img src={props.g1} alt="" width="100%"/>
						<div className="content-details fadeIn-bottom">
							<h6 className="content-title">{props.title}</h6>
							<p className="content-text">{props.text}</p>
						</div>
					</div>
			</div>
					
        </>
    );
}
export default Cards;