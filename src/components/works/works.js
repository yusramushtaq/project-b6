import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/work1.png'
import Portfolio2 from '../../assets/work2.png'
import Portfolio3 from '../../assets/work3.png'
import Portfolio4 from '../../assets/work4.png'
import Portfolio5 from '../../assets/work5.png'
import Portfolio6 from '../../assets/work7.png'



const Works = () => {
    return(
        <section id='works'>
          <h2 className='workstitle'>My Portfolio</h2>
          <span className='worksDesc'>As a web designer, I specialize in crafting clean, minimalist interfaces that focus on user experience and functionality. With a passion for innovation, I strive to create visually appealing designs that seamlessly blend aesthetics with performance.</span>
           <div className='worksImgs'>
            <img src={Portfolio1} alt='Portfolio1' className='worksImg'/>
            <img src={Portfolio2} alt='Portfolio2' className='worksImg'/>
            <img src={Portfolio3} alt='Portfolio3' className='worksImg'/>
            <img src={Portfolio4} alt='Portfolio4' className='worksImg'/>
            <img src={Portfolio5} alt='Portfolio5' className='worksImg'/>
            <img src={Portfolio6} alt='Portfolio6' className='worksImg'/>
            
           </div>
           <button className='workBtn'>See More</button>
        </section>
    );
}
export default Works