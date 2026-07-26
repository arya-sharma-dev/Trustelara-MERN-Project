import { motion } from "framer-motion";

import {
  ChevronLeft,
  Settings,
  Shield,
  Bell,
  Globe,
  Moon,
  Smartphone,
  CircleHelp,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import BottomNav from "../components/bottomNav";

export default function SettingsPage() {
  const navigate = useNavigate();

  const settings = [
    {
      icon: Shield,
      title: "Security",
      subtitle: "Password, MPIN & Biometrics",
    },
    {
      icon: Bell,
      title: "Notifications",
      subtitle: "Manage notification preferences",
    },
    {
      icon: Globe,
      title: "Language",
      subtitle: "English",
    },
    {
      icon: Moon,
      title: "Appearance",
      subtitle: "Light Mode",
    },
    {
      icon: Smartphone,
      title: "Device Management",
      subtitle: "Trusted Devices",
    },
    {
      icon: CircleHelp,
      title: "Help & Support",
      subtitle: "FAQs and Contact SBI",
    },
  ];

  /* =========================
     PAGE ANIMATION
  ========================== */

  const pageVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  /* =========================
     HEADER ANIMATION
  ========================== */

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -12,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* =========================
     CONTENT ANIMATION
  ========================== */

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },

    visible: (delay) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#ECEEF5]">

      {/* =========================
          PHONE FRAME
      ========================== */}

      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          w-[390px]
          h-[844px]
          overflow-hidden
          rounded-[32px]
          bg-[#F5F6FA]
          shadow-2xl
        "
      >

        {/* =========================
            SCROLL AREA
        ========================== */}

        <div className="h-full overflow-y-auto pb-28 hide-scrollbar">

          {/* =========================
              HEADER
          ========================== */}

          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="
              bg-gradient-to-r
              from-[#4B0082]
              via-[#7A1FA2]
              to-[#E91E63]
              rounded-b-[35px]
              px-6
              pt-8
              pb-8
              text-white
            "
          >

            <div className="flex items-center justify-between">

              {/* Back Button */}

              <motion.button
                whileTap={{
                  scale: 0.9,
                }}

                whileHover={{
                  scale: 1.03,
                }}

                transition={{
                  duration: 0.15,
                }}

                onClick={() => navigate("/dashboard")}
                className="
                  rounded-full
                  bg-white/20
                  p-3
                  outline-none
                "
              >

                <ChevronLeft size={22} />

              </motion.button>


              {/* Title */}

              <div className="text-center">

                <h1 className="text-2xl font-bold">
                  Settings
                </h1>

                <p className="text-sm text-white/80">
                  Customize your app
                </p>

              </div>


              {/* Settings Icon */}

              <div className="
                rounded-full
                bg-white/20
                p-3
              ">

                <Settings size={22} />

              </div>

            </div>

          </motion.div>


          {/* =========================
              SETTINGS LIST
          ========================== */}

          <motion.div
            variants={contentVariants}
            custom={0.15}
            initial="hidden"
            animate="visible"
            className="
              mx-5
              mt-6
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-lg
              divide-y
            "
          >

            {settings.map((item, index) => {

              const Icon = item.icon;

              return (

                <button
                  key={index}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    p-5
                    text-left
                    transition-all
                    duration-200
                    hover:bg-gray-50
                    active:scale-[0.99]
                  "
                >

                  {/* Left */}

                  <div className="flex items-center gap-4">

                    <div className="
                      rounded-2xl
                      bg-purple-100
                      p-3
                    ">

                      <Icon
                        className="text-[#7A1FA2]"
                        size={22}
                      />

                    </div>


                    <div>

                      <h3 className="font-semibold text-[#1B1B1B]">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.subtitle}
                      </p>

                    </div>

                  </div>


                  {/* Arrow */}

                  <ChevronRight
                    className="text-gray-400"
                    size={20}
                  />

                </button>

              );

            })}

          </motion.div>


          {/* =========================
              APP INFORMATION
          ========================== */}

          <motion.div
            variants={contentVariants}
            custom={0.25}
            initial="hidden"
            animate="visible"
            className="
              mx-5
              mt-8
              rounded-3xl
              bg-white
              p-5
              shadow-lg
            "
          >

            {/* Version */}

            <div className="flex justify-between">

              <span className="font-semibold">
                App Version
              </span>

              <span className="text-gray-500">
                v2.0.0
              </span>

            </div>


            {/* Build */}

            <div className="mt-4 flex justify-between">

              <span className="font-semibold">
                Build
              </span>

              <span className="text-gray-500">
                YONO Redesign
              </span>

            </div>

          </motion.div>


        </div>


        {/* =========================
            BOTTOM NAVIGATION
        ========================== */}

        <BottomNav />

      </motion.div>

    </div>
  );
}