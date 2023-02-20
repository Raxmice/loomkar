import React from 'react'
import ProductsCard from '../components/landingpage/ProductsCard';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function ProductsSlider() {

    const products = [
        {
            'uid':'123',
            'avail':'Sale',
            'img1':'sarees/AUR04114-Edit_720x.webp',
            'img2':'sarees/AUR04126_720x.webp',
            'Product_name':'Purple Sambalpuri Saree With Border',
            'discount':'Rs. 2,450.00',
            'price':'Rs. 1,960.00',
            'plink':'/'  
        },
        {
            'uid':'456',
            'avail':'Sold out',
            'img1':'sarees/139_720x.webp',
            'img2':'sarees/140_720x.webp',
            'Product_name':'Multicolour Khadi Linen Saree With Orange Border Regular price',
            'discount':'Rs. 2,000.00',
            'price':'Rs. 1,800.00',
            'plink':'/'  
        },
        {
          'uid':'457',
          'avail':'Sale',
          'img1':'sarees/107_720x.webp',
          'img2':'sarees/108_720x.webp',
          'Product_name':'Pure Ajrakh Block Print Cotton Saree',
          'discount':'Rs. 2,800.00',
          'price':'Rs. 2,500.00',
          'plink':'/'  
        },
        {
          'uid':'458',
          'avail':'Sold out',
          'img1':'sarees/103_720x.webp',
          'img2':'sarees/104_720x.webp',
          'Product_name':'Pure Ajrakh Block Print Cotton Saree',
          'discount':'Rs. 2,800.00',
          'price':'Rs. 2,500.00',
          'plink':'/'  
        },
        {
          'uid':'459',
          'avail':'Sale',
          'img1':'sarees/107_720x.webp',
          'img2':'sarees/108_720x.webp',
          'Product_name':'Pure Ajrakh Block Print Cotton Saree',
          'discount':'Rs. 2,800.00',
          'price':'Rs. 2,500.00',
          'plink':'/'  
        },
        {
          'uid':'193',
          'avail':'Sale',
          'img1':'sarees/AUR04114-Edit_720x.webp',
          'img2':'sarees/AUR04126_720x.webp',
          'Product_name':'Purple Sambalpuri Saree With Border',
          'discount':'Rs. 2,450.00',
          'price':'Rs. 1,960.00',
          'plink':'/'  
      },
      {
        'uid':'488',
        'avail':'Sold out',
        'img1':'sarees/103_720x.webp',
        'img2':'sarees/104_720x.webp',
        'Product_name':'Pure Ajrakh Block Print Cotton Saree',
        'discount':'Rs. 2,800.00',
        'price':'Rs. 2,500.00',
        'plink':'/'  
      },
      {
        'uid':'956',
        'avail':'Sold out',
        'img1':'sarees/139_720x.webp',
        'img2':'sarees/140_720x.webp',
        'Product_name':'Multicolour Khadi Linen Saree With Orange Border Regular price',
        'discount':'Rs. 2,000.00',
        'price':'Rs. 1,800.00',
        'plink':'/'  
      }
    ];

  return (
    <div>
        <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            slidesPerView={3}
            spaceBetween={15}
            // navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
        >
            {
                products.map((element)=>{
                  return <SwiperSlide key={element.uid}>
                    <ProductsCard avail={element.avail} img1={element.img1} img2={element.img2} pname={element.Product_name} discount={element.discount} price={element.price} link={element.plink}/>
                  </SwiperSlide>
                })
              }
        </Swiper>
    </div>
  )
}
