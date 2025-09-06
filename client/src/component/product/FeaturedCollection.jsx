import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp";

const FeaturedCollection = () => {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={featured}
            alt="Vibe Drop"
            loading="lazy"
            className="rounded-3xl shadow-2xl border-4 border-white object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6">
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Comfort and Style: <br /> New Drop is Here
          </h1>
          <p className="text-lg text-gray-300">
            Fits that slay, comfort that stays. Our latest streetwear line is made to flex on them — no cap.
          </p>
          <p className="text-sm uppercase tracking-widest text-pink-400">
            Limited Stock
          </p>
          <Link
            to="/collections/all"
            className="inline-block px-6 py-3 rounded-full bg-white text-black font-bold text-lg hover:bg-pink-500 hover:text-white transition duration-300"
          >
            Shop the Drop
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
