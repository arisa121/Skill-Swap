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
    <div className="w-full h-[70vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 h-full bg-gray-50">
              {/* Text Section */}
              <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {slide.title}
                </h1>
                <h2 className="text-3xl font-semibold text-indigo-600">
                  {slide.subtitle}
                </h2>
                <p className="text-gray-600 text-lg">{slide.description}</p>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[80%] md:w-[70%] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
