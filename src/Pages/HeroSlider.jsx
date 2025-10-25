import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      title: "Learn New Skills Online",
      subtitle: "With Top Educators",
      description:
        "Discover valuable courses and learn from the best minds around the world. Powered by passion & community.",
      image: "https://i.postimg.cc/YCb0vCf6/1704377916771.png",
    },
    {
      id: 2,
      title: "Upgrade Your Career",
      subtitle: "With Expert-Led Classes",
      description:
        "Join interactive lessons and gain practical skills that help you grow faster.",
      image:
        "https://i.postimg.cc/V6y86xTD/ways-to-practice-English-and-speak-in-English-like-a-native-English-speaker.webp",
    },
    {
      id: 3,
      title: "Learn Anytime, Anywhere",
      subtitle: "Your Skills, Your Schedule",
      description:
        "Access your learning sessions from any device — study at your own pace.",
      image:
        "https://i.postimg.cc/TPss0BXc/Beginners-Yoga-Vol-2-2019-ff22c097-aa0a-4ecd-9726-3afaa32d2fea-800x.webp",
    },
  ];

  return (
    <div className="w-full h-[65vh] sm:h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 md:px-10 lg:px-20">
      <Swiper
        modules={[Pagination, Autoplay]}
        
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row items-center justify-between h-full md:gap-10">
              {/* Text Section */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  {slide.title}
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-indigo-600">
                  {slide.subtitle}
                </h2>
                <p className="text-base sm:text-lg md:text-lg text-gray-600">
                  {slide.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center md:mt-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[90%] sm:w-[85%] md:w-[70%] object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
