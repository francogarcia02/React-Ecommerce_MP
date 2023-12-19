import './SlideList.css';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import SlideItem from './SlideItem/SlideItem'

const SlideList = ({productos}) =>{
    return(
        <div className="m-2">
            <h4 className="m-0 p-3 text-uppercase center-align">Productos mas buscados</h4>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlide={true}
                loop={true}
                slidesPerView={5}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{el:'.swiper-pagination',clickable:true}}
                navigation={ {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                } }
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper_container p-3'
            >
                <div>
                    {productos && productos.map(prod => (
                        <SwiperSlide>
                            <SlideItem key={prod.id} prod={prod}/>
                        </SwiperSlide>
                    ))}
                </div>

                <div className="slider-controler p-2">
                    <div className="swiper-button-prev slider-arrow">

                    </div>
                    <div className="swiper-button-next slider-arrow">

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </Swiper>
        </div>
    )
}

export default SlideList