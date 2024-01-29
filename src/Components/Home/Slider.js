"use client"
import React, {useState, useEffect} from 'react';
import Link from "next/link";
import BtnSlider from './BtnSlider';
import Image from 'next/image';
import './Slider.css'

const Slider = ()=> {
    
    const [slideIndex, setSlideIndex] = useState(1)
    const [dataSlider, setDataSlider] = useState([])

    useEffect(()=>{
        const dataFech = async ()=>{
            const res = await fetch('http://localhost:3000/api/mock')
                .then(async res => {
                    const data = await res.json()
                    setDataSlider(data.data)
                })
        } 
        dataFech()
    },[])
   
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(slideIndex ===  dataSlider.length ? 1 : slideIndex + 1);
        }, 8000);
        return () => clearInterval(interval);
      }, [slideIndex]);    

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    } 

    return (
         <div className="container-slider">
            {dataSlider.map(( item ) => {
                return (
                    <div
                        key={ item.id }
                        className={slideIndex === item.id ? "slide active-anim" : "slide"}
                    >   
                        <div className="tittleSliderContainer">                        
                            <h2>{ item.title }</h2>
                            <h2>{ item.subTitle }</h2>
                        </div>
                        <div className="subTittleSliderContainer">
                            <h3>{ item.text }</h3>
                        </div>
                        {
                        slideIndex === 4?(
                            <div className="btn-container">    
                                <Link href="/contact">
                                    <button className="btn-basic">CONTACTANOS {'>'} </button>
                                </Link>
                            </div>
                            ):(
                            <div className="btn-container">    
                                <Link href="/product">
                                    <button className="btn-basic">CONOCE MÁS {'>'} </button>
                                </Link>
                            </div>) 
                        }
                        <Image width='1600' height='500'  src={item.img} alt={item.text} />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {dataSlider.map((item, index) => (
                    <div key={item.id}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div> 
    )
}

export default Slider; 