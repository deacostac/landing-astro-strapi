import React, { useRef } from 'react'
//import { ReactComponent as Flecha } from '../assets/flecha_slider.svg';
//import styled from 'styled-components';
import img from "../../assets/flecha_slider.svg";

export const Slider = ({props}) => {
  const slideShow = useRef(null);

  const siguiente = () =>{
    if(slideShow.current.children.length > 0){
      console.log('Siguiente')
      
      // Obtenemos el primer elemento del slideshow.
			const primerElemento = slideShow.current.children[0];

      slideShow.current.style.transition = `300ms ease-out all`;

      const tamañoSlide = slideShow.current.children[0].offsetWidth;

      // Movemos el slideshow
			slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () =>{
        // Reiniciamos la posicion del Slideshow.
      slideShow.current.style.transition = 'none';
      slideShow.current.style.transform = `translateX(0)`;

      // Tomamos el primer elemento y lo mandamos al final.
      slideShow.current.appendChild(primerElemento);

      slideShow.current.removeEventListener('transitionend', transicion);
      }

      slideShow.current.addEventListener('transitionend', transicion);

    }
  }
  
  const anterior = () => {
		console.log('Anterior');
		if(slideShow.current.children.length > 0){
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideShow.current.children.length - 1;
			const ultimoElemento = slideShow.current.children[index];
			slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild);
			
			slideShow.current.style.transition = 'none';
			const tamañoSlide = slideShow.current.children[0].offsetWidth;
			slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				slideShow.current.style.transition = `300ms ease-out all`;
				slideShow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

  return (
    <div className='flex flex-col overflow-hidden'>
      <h1 className='flex py-2 text-center w-full justify-center'>Componente de react</h1>
      
          <div className='ContenedorPrincipal relative'>
            <div className='ContenedorSlideshow flex flex-nowrap' ref={slideShow}>
            {props.map((prop, i) => {
              return (
                <div className=' min-w-full overflow-hidden z-10 relative [transition:.3s ease all]' key={i}>
                  <a>
                    <img className='w-full align-top' src={prop.href} alt="" />
                  </a>
                  <div className='bg-slate-400 text-white w-full text-center absolute bottom-0 py-3 opacity-70' key={i}>
                    <p>{prop.text}</p>
                  </div>
                </div>
                )
              })}
            </div>
            <div className='absolute top-0 z-20 w-full h-full pointer-events-none'>
              <button onClick={anterior} className='cursor-pointer absolute w-12 h-full text-center [transform:rotate(180deg)] [pointer-events:all]'>
                <img src={img}/>
              </button>
              <button onClick={siguiente} className='cursor-pointer absolute w-12 h-full text-center right-0 [pointer-events:all]'>
                <img src={img}/>
              </button>
            </div>
          </div>
      
    </div>
  )
}

export default Slider;
