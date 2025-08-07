import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import { Phone, Mail, MapPin, User, Calendar, Clock } from "lucide-react";
import { useRef } from "react";

const SSKSolitaireGuestForm = () => {
  const formRef = useRef(null);

  // High-quality Unsplash images matching luxury sports club theme
  const images = {
    hero: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    amenities:
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    pool: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      {/* Hero Section with Parallax Effect */}
      <motion.section
        className="relative h-[70vh] min-h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${images.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#0A2463]/80" />
        <motion.div
          variants={staggerContainer}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            SSK Solitaire Guest Experience
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
          >
            Register for exclusive access to our premium sports and wellness
            facilities
          </motion.p>
          <motion.button
            variants={fadeIn("up", "spring", 0.6, 1)}
            onClick={scrollToForm}
            className="bg-[#FFC857] hover:bg-[#F4A261] text-[#0A2463] px-8 py-4 rounded-sm font-bold flex items-center gap-2 mx-auto transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC857]/30"
          >
            Register Now
            <User className="h-5 w-5" />
          </motion.button>
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-16 h-16 border-2 border-[#FFC857]/30 rounded-full hidden md:block"
        />
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            ref={formRef}
            variants={fadeIn("right", "spring", 0.2, 1)}
            className="bg-white p-8 rounded-xl  border border-gray-100 relative overflow-hidden"
          >
            {/* Glowing accent */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFC857]/10 rounded-full filter blur-3xl" />
            <h2 className="text-3xl font-bold text-[#0A2463] mb-6 relative z-10">
              Guest Registration
            </h2>
            <div className="relative z-10">
              <iframe
                src="https://admin.masteraix.io/widget/form/6891f916306bf"
                style={{
                  width: "100%",
                  height: "600px",
                  border: "none",
                  borderRadius: "3px",
                }}
                id="inline-6891f916306bf"
                data-form-name="SSK-solitaire-Guest-Form"
                data-layout-iframe-id="inline-6891f916306bf"
                data-form-id="6891f916306bf"
                data-height="600"
                title="SSK-solitaire-Guest-Form"
              />
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 1)}
            className="space-y-8"
          >
            {/* Amenities Card */}
            <motion.div
              variants={zoomIn(0.4, 1)}
              className="relative rounded-xl overflow-hidden shadow-xl h-64 group"
            >
              <img
                src={images.amenities}
                alt="Luxury amenities"
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463] to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Premium Amenities
                </h3>
                <p className="text-white/90">
                  Access our world-class spa, gourmet dining, and luxury suites
                </p>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              variants={fadeIn("up", "spring", 0.6, 1)}
              className="bg-[#0A2463] text-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="text-[#FFC857]" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#FFC857] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">The SSK WORLD CLUB</p>
                    <p className="text-white/90">
                      Pathardi - Gaulane road, Pathardi,
                      <br />
                      Nashik, Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-[#FFC857] flex-shrink-0" />
                  <span className="text-white/90">+91 77700 01005</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-[#FFC857] flex-shrink-0" />
                  <span className="text-white/90">info@thesskworld.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-[#FFC857] flex-shrink-0" />
                  <span className="text-white/90">
                    Daily: 6:00 AM - 10:00 PM
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Pool Card */}
            <motion.div
              variants={zoomIn(0.8, 1)}
              className="relative rounded-xl overflow-hidden shadow-xl h-64 group"
            >
              <img
                src={images.pool}
                alt="Olympic pool"
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463] to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Elite Facilities
                </h3>
                <p className="text-white/90">
                  Championship courts, Olympic pool, and state-of-the-art
                  fitness center
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SSKSolitaireGuestForm;
