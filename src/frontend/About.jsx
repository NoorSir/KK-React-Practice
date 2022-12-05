import cv from './documents/Zeeshan.pdf';
import fiverpic from './images/freelance-pic.jpg';
import profile from './images/noor.png';
import slidervideo from './videos/slidervideo.mp4';
import carouselvideo from './videos/carousel-video2.mp4';
function About(){
    return (
        <>
            {/* <!--About Myself Section  -->	 */}
            <div className="about-myself " id="about-myself"><h4 className="mt-5 mb-0 text-center">About Myself</h4>
                <div id="carouselExampleCaptions" className=" carousel slide " data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    
                    <div className="carousel-inner" >
                        <div className="carousel-item active text-center  sliderr" >
                            <video className='videoTag' autoPlay loop muted id="myVideo">
                                <source src={slidervideo} type="video/mp4"/>
                                Your browser does not support HTML5 video.
                            </video>
                            <div  className="col-8 mx-col-5 col-sm-9 col-md-10 col-lg-11">
                            <img  src={profile}className="slider-img-pic " alt="..." height=""/>
                        </div>


                        <div className="carousel-caption carousel-text">
                            <h5>Hi Guys Zeeshan Here from Pakistan</h5>
                            <p className="mt-sm-2">I am currently studying my BSCS Degree from Superior University. I love to learn new things and skills and I also believe in learning more about new things every day, it fascinate me to explore and develop myself.</p>
                            <form method="get" action={cv}>
                                <button type ="submit" className="cv btn" id="cv" >Download CV</button>
                            </form>
                        </div>
                    </div>

                    <div className="carousel-item sliderr">
                            <video className='videoTag' autoPlay loop muted id="myVideo2">
                                <source src={carouselvideo} type="video/mp4"/>
                                Your browser does not support HTML5 video.
                            </video>
                            
                            <div className="mt-0 carousel-caption carousel-text2">
                            <h3>My Hobby</h3>
                            <p>I love to play video games, watching movies & learning new things .</p>
                            </div>
                    </div>
                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        {/* <!-- Freelance Section --> */}
            <div className="  mt-5">
                <div className="freelancer-pic ">
                    <img src={fiverpic} alt="" width="100%" height="300px"/>
                    <div className="  col-12 freelance">
                        <div className="freelance-content col-sm-12 col-md-12   col-lg-12 ">
                        <b className="text-center col-12">Have any Project in Mind?</b>
                        <h5 className="text-center col-12 col-sm-12 col-md-12   col-lg-12 ">I'm Available for Freelancing</h5>
                        </div> 
                    <div className="col-md-12 text-center">
                        <button type ="submit" className="mx-4 mx-sm-5 mx-md-5  hire freelance-btn btn text-center "> <a target="blank" href="https://www.fiverr.com/zeeshan_noorr">Hire Me!</a></button>
                        </div>
                    </div>
                </div>
            </div>

        {/* <!-- FLoating WhatsApp Icon--> */}
            <a href="https://api.whatsapp.com/send?phone=923104862197&text=Feel Free To Call." className="float" target="_blank" rel="noreferrer">
                <i className="fa fa-whatsapp my-float"></i>
            </a>
        </div>
</>
    
    );
}
export default About;