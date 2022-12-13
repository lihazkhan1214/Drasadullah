
import Expcard from "./Expcard";

import Expdata from "./Expdata";


import pic1 from '../images/arrowleft.png'
import pic2 from '../images/arrowright.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (

    <img src={pic2} className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img src={pic1} className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick} />


  );
}




function Experience() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      
      {
        breakpoint: 788,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]

  };

  return (
    <>
      <div className="container Experience p-5">
      <div>
      <h1 className="text-center heading mt-5 ">Experience</h1>
      <Slider {...settings}>
      {
        Expdata.map((val,ind)=>{
           return <div>
            
            <Expcard date={val.date} title={val.title} para={val.para} />
            
            </div>
            
            
        })
       }
      </Slider>
    </div>



        
     


      
   
    </div>





    </>);
}

export default Experience;





