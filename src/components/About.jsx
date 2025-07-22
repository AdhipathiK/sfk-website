// src/components/About.jsx
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import your images
import shiv1 from '../assets/images/shiv1.jpg';
import shiv2 from '../assets/images/shiv2.jpg';
import shiv3 from '../assets/images/shiv3.jpg';
import shiv4 from '../assets/images/shiv4.jpg';

const images = [shiv1, shiv2, shiv3, shiv4];

const highlights = [
  "Empower newcomers: Practical advice on visas, careers, UK culture, and entrepreneurship.",
  "Community Leadership: Built a support network of 17,000+ international students across the UK.",
  "Business Bridge: Connect local businesses, universities, and students for mutual success.",
  "Content & Voice: Host the Careers Beyond Degree podcast, amplifying stories of global professionals.",
  "Startup Experience: Led tech-driven and AI-powered ventures; mentored with Like Minded Females (LMF) Network."
];

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true
  };

  return (
    <section className="bg-white rounded-2xl shadow-2xl max-w-4xl mx-auto px-6 py-12 mt-12">
      {/* Image Carousel */}
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-sm">
          <Slider {...settings}>
            {images.map((src, idx) => (
              <div key={idx}>
                <img
                  src={src}
                  alt={`Shivika Pratap ${idx + 1}`}
                  className="rounded-2xl w-full h-64 object-cover shadow-md"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-2 text-center">Hi, I'm Shivika Pratap</h1>
        <h2 className="text-xl font-semibold text-blue-600 mb-6 text-center">
          Founder • Community Builder • Podcast Host • Advocate for International Success
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto text-center">
          From New Delhi to the UK, my mission is simple: <span className="font-semibold text-blue-700">to help young professionals and students thrive in a new country</span>. 
          I’m the founder of <span className="font-bold">Startup Freshie Kit</span> and <span className="font-bold">Avika Limited</span>, host of the <span className="italic">Careers Beyond Degree</span> podcast, and a passionate connector of communities.
        </p>
      </motion.div>

      {/* Animated Highlights */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.17 } }
        }}
        className="mb-8"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">What I Do</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {highlights.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.12 }}
              className="font-medium"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">My Philosophy</h3>
        <blockquote className="pl-4 border-l-4 border-blue-500 italic text-gray-600">
          “Resilience, kindness, and community are the foundations of growth. I believe in celebrating every win, simplifying the tough stuff, and making your journey less overwhelming—and a lot more exciting.”
        </blockquote>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 text-center"
      >
        <h3 className="text-xl font-semibold text-blue-800 mb-3">Let’s Connect!</h3>
        <p className="text-gray-700 mb-4">
          Whether you’re launching a business, seeking your next big break, or navigating a new culture, I’m here to help you succeed.
        </p>
        <a
          href="mailto:hello@startupfreshiekit.com"
          className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}
