import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";

const WalkingVisitorForm = () => {
  const formRef = useRef(null);

  // Premium Unsplash images
  const images = {
    entrance:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tennis:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    lounge:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
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
      {/* Hero with Tilt Effect */}
      <motion.section
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 36, 99, 0.7), rgba(10, 36, 99, 0.7)), url(${images.entrance})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          variants={staggerContainer}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            Walking Visitor Pass
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
          >
            Experience our world-class facilities with a day pass registration
          </motion.p>
          <motion.button
            variants={fadeIn("up", "spring", 0.6, 1)}
            onClick={scrollToForm}
            className="bg-[#FFC857] hover:bg-[#F4A261] text-[#0A2463] px-8 py-4 rounded-sm font-bold flex items-center gap-2 mx-auto transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC857]/30"
          >
            Register Now
            <CheckCircle className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            ref={formRef}
            variants={fadeIn("right", "spring", 0.2, 1)}
            className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#FFC857]/10 rounded-full filter blur-xl" />
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#0A2463]/10 rounded-full filter blur-xl" />

            <h2 className="text-3xl font-bold text-[#0A2463] mb-6 relative z-10">
              Visitor Registration
            </h2>
            <div className="relative z-10">
              <iframe
                src="https://admin.masteraix.io/widget/form/6887779168399"
                style={{
                  width: "100%",
                  height: "1200px",
                  border: "none",
                  borderRadius: "3px",
                }}
                id="inline-6887779168399"
                data-form-name="Walking-Visitor Form"
                data-layout-iframe-id="inline-6887779168399"
                data-form-id="6887779168399"
                data-height="600"
                title="Walking-Visitor Form"
              />
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 1)}
            className="space-y-8"
          >
            {/* Tennis Court Card */}
            <motion.div
              variants={zoomIn(0.4, 1)}
              className="relative rounded-xl overflow-hidden shadow-xl h-64 group"
              whileHover={{ y: -10 }}
            >
              <img
                src={images.tennis}
                alt="Tennis courts"
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463] to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Championship Courts
                </h3>
                <p className="text-white/90">
                  12 premium clay and hard courts with professional lighting
                </p>
              </div>
            </motion.div>

            {/* Guidelines Card */}
            <motion.div
              variants={fadeIn("up", "spring", 0.6, 1)}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4 flex items-center gap-3">
                <AlertCircle className="text-[#FFC857]" />
                Visitor Guidelines
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#FFC857] mr-2">•</span>
                  Valid photo ID required for all visitors
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC857] mr-2">•</span>
                  Proper athletic attire required in sports areas
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC857] mr-2">•</span>
                  Children must be supervised at all times
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC857] mr-2">•</span>
                  No outside food or beverages
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC857] mr-2">•</span>
                  Photography restricted in private member areas
                </li>
              </ul>
            </motion.div>

            {/* Lounge Card */}
            <motion.div
              variants={zoomIn(0.8, 1)}
              className="relative rounded-xl overflow-hidden shadow-xl h-64 group"
              whileHover={{ y: -10 }}
            >
              <img
                src={images.lounge}
                alt="Luxury lounge"
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463] to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Premium Lounge
                </h3>
                <p className="text-white/90">
                  Relax in our members-only lounge with gourmet refreshments
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Location Section */}
        <motion.section
          variants={fadeIn("up", "spring", 1, 1)}
          className="mt-16 bg-[#0A2463] rounded-xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="text-[#FFC857]" />
                Our Location
              </h2>
              <div className="space-y-4 mb-6">
                <p className="text-xl font-medium">The SSK WORLD CLUB</p>
                <p className="text-white/90">
                  Pathardi - Gaulane road, Pathardi,
                  <br />
                  Nashik, Maharashtra, India
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <Phone className="text-[#FFC857] flex-shrink-0" />
                  <span>+91 77700 01005</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#FFC857] flex-shrink-0" />
                  <span>info@thesskworld.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-[#FFC857] flex-shrink-0" />
                  <span>Daily: 6:00 AM - 10:00 PM</span>
                </div>
              </div>
              <button className="bg-[#FFC857] hover:bg-[#F4A261] text-[#0A2463] px-6 py-3 rounded-sm font-bold flex items-center gap-2 transition-all duration-300">
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="h-96 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59996.38557342982!2d73.76746801612664!3d19.974045126605333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb3204dc31df%3A0x51309c622e9dd627!2sIshani%20Enterprises%20French%20Door%20Designer%20Studio!5e0!3m2!1sen!2sin!4v1747053705894!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="SSK World Club Location"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default WalkingVisitorForm;
