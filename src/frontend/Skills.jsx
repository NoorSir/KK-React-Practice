import img3 from './images/3.jpg';
function Skills(){
    return(
        <>
            {/* <!-- Skils section --> */}

<div className="container-fluid struggle-skills" style={{backgroundColor: "rgb(0, 0, 0)"}}>
<div className="row">
    <div className="col-10 col-sm-6 col-md-5 col-lg-5  mt-2 ">
        <img className="struggle_img" src={img3} alt="struggle-img"/>
    </div>
    <div className="col-10 col-sm-5 col-md-7 col-lg-7 mr-2  " >
        <h4 className="mt-4 mt-sm-0" id="myskills">Read About My Skills!</h4> 
        <div className="struggle-text">
            <h6 className="mt-2 skills-head">Adobe PS</h6>
            <div className="container-skills  ">
                <div className="skills ps"></div>
            </div>

            <h6 className="mt-2 skills-head">Html</h6>
            <div className="container-skills ">
                <div className="skills html"></div>
            </div>
            <h6 className="mt-2 skills-head">Css</h6>
            <div className="container-skills  ">
                <div className="skills css"></div>
            </div>

            <h6 className="mt-2 skills-head">Bootstrap</h6>
            <div className="container-skills  ">
                <div className="skills bootstrap"></div>
            </div>

            <h6 className="mt-2 skills-head">C++</h6>
            <div className="container-skills  ">
                <div className="skills c-plus"></div>
            </div>

            <h6 className="mt-2 skills-head">PHP/Laravel</h6>
            <div className="container-skills  ">
                <div className="skills php"></div>
            </div>
        </div>
        <div className="row "> 
        <button type ="submit" className="hire btn  col-4 col-sm-4 col-md-3"><a target="blank" Name="nav-link" href="https://www.fiverr.com/zeeshan_noorr">Hire Me!</a></button>
        <button onClick="getId()" type ="submit" className="about btn col-4 col-sm-4 col-md-3 "> <a href="#about-myself">About Me</a> </button>
        </div>
    </div>
</div>
</div>
        </>
    );
}
export default Skills;