// import logo from './logo.svg';
import portfolio from './frontend/documents/portfoliozeeshan.pdf';
import './index.css';
import Header from './frontend/Header';
import Footer from './frontend/Footer';
import Main from './frontend/Main';

import Card from './frontend/Cards';
import CardsArray from "./frontend/CardsArray";
import Skills from './frontend/Skills';
import Service from './frontend/Servics';
import About from './frontend/About';



function Cards(ny){
  return(
    <Card  
    g1={ny.g1} 
    title={ny.title}
    text={ny.text}
    />
  );
}

function App() {


  return (
    <>
    
      <Header/>
      <div className="body-content">
          <Main/>
          <Skills/>
          <Service/>
          <div className=" container-fluid portfolio mb-2"><br/>
              <div className="text-center mt-3"><h4>Portfolio</h4></div>
                <div className="row mt-4 mx-5  mx-sm-0 mx-md-0 ">
                {CardsArray.map(Cards)}
                </div>
          
                <form className="mb-5 text-center pt-sm-5 mt-3 my-md-5  pt-md-5 pt-lg-0 mt-lg-4 col 12 col-md-12 col-lg-12" method="get" action={portfolio}>
                  <button type ="submit" className="my-md-4 my-lg-4 mb-5 my-sm-4 view btn " id="view" >View All</button>
                </form> 
        </div>
        
          <About/>
      </div>
      <Footer/>

      
    </>
  );
}

export default App;
