import React from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Reveal';
import icon1 from '../../icons/icon 1.png'
import icon2 from '../../icons/icon 2.png'
import icon3 from '../../icons/icon 3.png'
import icon4 from '../../icons/icon 4.png'
import icon5 from '../../icons/icon 5.png'
import icon6 from '../../icons/icon 6.png'
import icon7 from '../../icons/icon 7.png'
import icon8 from '../../icons/icon 8.png'
import icon9 from '../../icons/icon 9.png'
import icon10 from '../../icons/icon 10.png'
import icon11 from '../../icons/icon 11.png'
import icon12 from '../../icons/icon 12.png'
import icon13 from '../../icons/icon 13.png'
import icon14 from '../../icons/icon 14.png'
import icon15 from '../../icons/icon 15.png'

const Skills = () => {
    return (
        <section id="skills" data-theme="cupcake" className='p-16 font-serif'>
            <Fade bottom>
            <h1 className='text-center font-bold text-4xl my-10'>My Key SKILLS</h1>
            <div className=' w-[70%] mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 py-12'>

            <Flip top>
            <img src={icon1} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon2} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon3} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon4} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon5} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon6} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon7} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon8} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon9} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon10} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon11} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon12} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon13} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon14} className='h-20 w-16' alt="" />
            </Flip>
            <Flip top>
            <img src={icon15} className='h-20 w-16' alt="" />
            </Flip>

            </div>
            </Fade>
        </section>
    );
};

export default Skills;