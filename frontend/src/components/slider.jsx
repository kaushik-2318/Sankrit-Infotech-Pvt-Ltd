import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';


function slider() {
    const slidercontacts = [
        {
            name: "Jena Karlis",
            position: "Store Owner",
            words: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam dws,minim tempor labore quem eram duis noster aute amet eramfore quis sint minim.",
        },
        {
            name: "Sara Wilsson",
            position: "Designer",
            words: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velitfore eram velit suntaliqua nosterfugiat irure amet legam anim culpa.",
        },
        {
            name: "Matt Brandon",
            position: "Freelancer",
            words: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim veiit minim dolor enim duis veniam ipsum anim magna sunt elitfore quem dolore labore illum veniam.",
        },
        {
            name: "John Larson",
            position: "Entrepreneur",
            words: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
        },
        {
            name: "Saul Goodman",
            position: "Ceo & Founder",
            words: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusaniium quam, ultricies eget id, aliquam eget nibh et.Maecen aliquam, risus at semper.",
        },
    ]
    return (
        <>
            <div className="sliderimage w-full h-96">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {
                        slidercontacts.map((slidercontact, index) => (
                            <SwiperSlide className='flex justify-center items-center flex-col' key={index}>
                                <div className='font-bold text-3xl pb-2'>
                                    {slidercontact.name}
                                </div>
                                <div className='font-normal pb-6'>
                                    ({slidercontact.position})
                                </div>
                                <div className='font-light italic backdrop-blur-xl p-2 rounded-lg w-[78%] text-justify'>
                                    {slidercontact.words}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className='h-20'></div>
        </>
    )
}
export default slider
