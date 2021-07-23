import React, { useEffect, useState } from 'react'
import {useWindowScroll} from 'react-use';

const ScrollTop = () => {
    const {y :pageYOffset} = useWindowScroll();
    const [visible, setVisble] = useState(false);

    useEffect(() => {
        if(pageYOffset > 300){
            setVisble(true);
        }else{
            setVisble(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          
        });
      };
    
    if(!visible){
        return false;
    }
    
    return (
        <>
        {visible && (<div className="scrollToTop_btn cursor-pointer text-center"  onClick={scrollToTop} >
            <i class="fas fa-chevron-up scrollToTop_icon"></i>
        </div>)}
        </>
    )
}

export default ScrollTop
