import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Iva Ryan",
      role: "Marketing manager at Adobe",
      avatar: "https://i.pravatar.cc/100?img=1",
      tags: ["Content Creator", "Youtuber", "Growth Expert"],
      review:
        "I recently had the opportunity to use the platform, and I must say, the feature that allows you to set your own commission is a game changer!",
      rating: 5,
      earned: "$2M",
      place: "Helenuil",
      video: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
    {
      id: 2,
      name: "Sophia Lee",
      role: "Founder at StartUp",
      avatar: "https://i.pravatar.cc/100?img=2",
      tags: ["Entrepreneur", "Coach"],
      review:
        "This platform helped me scale my business. The analytics and growth tools are super powerful!",
      rating: 5,
      earned: "$1.2M",
      place: "New York",
      video: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
    },
    {
      id: 3,
      name: "David Kim",
      role: "Youtuber & Podcaster",
      avatar: "https://i.pravatar.cc/100?img=3",
      tags: ["Podcaster", "Influencer"],
      review:
        "The automation features saved me hours of work every week. Highly recommended for creators.",
      rating: 4,
      earned: "$800K",
      place: "Seoul",
      video: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-pink-900 to-gray-500 text-white">
      {/* Top Text */}
      <div className="text-center mb-12 px-4">
        <span className="bg-pink-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
          Testimonials
        </span>
        <h2 className="mt-4 text-2xl sm:text-4xl font-bold">
          Trusted by Creators & Proven by Results.
        </h2>
        <p className="mt-3 text-gray-300 text-sm sm:text-base">
          See how others grow with Growhubs — real stories, real success.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white text-gray-800 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
                {/* Left side (video / image) */}
                <div className="w-full md:w-1/3 h-48 md:h-auto">
                  <img
                    src={item.video}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right side */}
                <div className="w-full md:w-2/3 p-4 sm:p-6 flex flex-col justify-between">
                  {/* Profile */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex flex-col text-left">
                        <h4 className="font-semibold text-sm sm:text-base">
                          {item.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={
                            index < item.rating
                              ? "text-yellow-500 text-sm sm:text-base"
                              : "text-pink-700 text-sm sm:text-base"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                    {item.review}
                  </p>

                  {/* Rating + Earned */}
                  <div className="flex items-center justify-end">
                    <div className="text-right">
                      <p className="font-extrabold text-xl sm:text-2xl">
                        {item.earned}
                      </p>
                      <p className="text-xs text-gray-500">
                        Earned in {item.place}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
