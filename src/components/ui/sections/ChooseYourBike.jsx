import BikeCard from "../cards/BikeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function ChooseYourBike() {
  const data = [
    {
      image: "/content/st1.png",
      title: "Klager GSX 250 R",
      subtitle: "(Fashion , Twin Disc)",
      price: "$490",
      discount: "$590",
    },
    {
      image: "/content/st2.png",
      title: "Klager GSX 250 R",
      subtitle: "(Fashion , Twin Disc)",
      price: "$490",
      discount: "$590",
    },
    {
      image: "/content/st3.png",
      title: "Klager GSX 250 R",
      subtitle: "(Fashion , Twin Disc)",
      price: "$490",
      discount: "$590",
    },
    {
      image: "/content/st4.png",
      title: "Klager GSX 250 R",
      subtitle: "(Fashion , Twin Disc)",
      price: "$490",
      discount: "$590",
    },
    {
      image: "/content/st5.png",
      title: "Klager GSX 250 R",
      subtitle: "(Fashion , Twin Disc)",
      price: "$490",
      discount: "$590",
    },
    {
      image: "/content/st6.png",
      title: "Klager GSX 250 R",
      subtitle: "(Fashion , Twin Disc)",
      price: "$490",
      discount: "$590",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-3xl sm:text-4xl">Choose Your Bike</h1>
        <div className="flex items-center">
          <hr className="border w-full border-primary" />
          <button className="bg-gradient-to-r from-primary to-secondary font-semibold text-white text-nowrap px-16 py-1.5 rounded-full">
            25% OFF
          </button>
          <hr className="border w-full border-secondary" />
        </div>
      </div>
      <div className="py-5 sm:py-10">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <BikeCard
                title={item.title}
                image={item.image}
                price={item.price}
                discount={item.discount}
                subtitle={item.subtitle}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ChooseYourBike;
