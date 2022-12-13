import Awarddata from './Awarddata';
import AwardCard from './AwardCard';



import pic1 from '../images/arrowleft.png';
import pic2 from '../images/arrowright.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
  
      <div className={className}
        style={{ ...style, display: "none", }}
        onClick={onClick} />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className}
        style={{ ...style, display: "none", }}
        onClick={onClick} />
  
  
    );
  }
  

export default class Awards extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
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
      <div className='container Award mt-5 p-3'>
        <h1 className='heading text-center text-light pt-3 ' >Award</h1>
        <Slider  ref={c => (this.slider = c)} {...settings}>
           {
Awarddata.map((val,ind)=>{
  return  <div>
    
    <AwardCard key={ind} date={val.date} imgsrc={val.imgsrc} para={val.para}/>
    
    </div>
})


           }
        </Slider>
        <div style={{ textAlign: "center" }}>
         
            <img src={pic1} alt="" srcset=""  className="button arrows m-2 " onClick={this.previous} width="20px"   />
            <img src={pic2} alt="" srcset=""  className="button arrows" onClick={this.next}   width="20px"   />
         
        </div>
      </div>
    );
  }
}