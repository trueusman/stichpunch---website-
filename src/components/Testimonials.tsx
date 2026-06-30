import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";
import SectionHeading from "./SectionHeading";

const reviews = [
  {
    id: 1,
    name: "sarah johnson",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    date: "3 months ago",
    review: "stichpunch delivered my logo digitized perfectly in under 4 hours the quality was outstanding zero thread breaks on the first run",
  },
  {
    id: 2,
    name: "mike torres",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    date: "6 months ago",
    review: "ive used many digitizing services but none match stichpunch fast professional and the vector redraw was pixel perfect",
  },
  {
    id: 3,
    name: "emma williams",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    date: "1 year ago",
    review: "their team is fantastic great designs excellent customer service and they handle revisions so quickly highly recommended",
  },
  {
    id: 4,
    name: "james miller",
    image: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    date: "2 months ago",
    review: "outstanding digitizing quality every stitch was perfect and the turnaround time was impressive will definitely use again",
  },
  {
    id: 5,
    name: "lisa anderson",
    image: "https://i.pravatar.cc/150?img=48",
    rating: 5,
    date: "5 months ago",
    review: "loved the work the logo embroidery came out exactly as expected professional team and amazing quality",
  },
  {
    id: 6,
    name: "david chen",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    date: "8 months ago",
    review: "best embroidery digitizing service ive ever used the attention to detail is remarkable and the prices are very reasonable",
  },
];

const Stars = () => <div className="stars">★★★★★</div>;

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonial-section">
      <SectionHeading
        badge="Client Reviews"
        badgeIcon={Star}
        title="Excellent"
        subtitle="Based on 200+ Google Reviews"
        accent="blue"
        align="center"
      />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="review-card">
              <div className="card-top">
                <div className="avatar-box">
                  <img src={item.image} alt={item.name} />
                  <div className="google-badge">G</div>
                </div>
                <div className="user-info">
                  <h3>{item.name}</h3>
                  <span className="verified">✔ Verified</span>
                  <small>{item.date}</small>
                </div>
              </div>
              <Stars />
              <p className="review-text">{item.review}</p>
              <button className="read-more">Read More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
