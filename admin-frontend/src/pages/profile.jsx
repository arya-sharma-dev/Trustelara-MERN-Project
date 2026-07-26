import { motion } from "framer-motion";

import {
  ChevronLeft,
  User,
  Shield,
  CreditCard,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import BottomNav from "../components/bottomNav";

export default function Profile() {
  const navigate = useNavigate();

  const menu = [
    {
      title: "Security",
      subtitle: "Password, MPIN & Biometrics",
      icon: Shield,
    },
    {
      title: "Cards",
      subtitle: "Manage Debit & Credit Cards",
      icon: CreditCard,
    },
    {
      title: "Notifications",
      subtitle: "Alerts & Messages",
      icon: Bell,
    },
    {
      title: "Settings",
      subtitle: "App Preferences",
      icon: Settings,
    },
    {
      title: "Help & Support",
      subtitle: "FAQs & Contact",
      icon: HelpCircle,
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
      y: -10,
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
          PHONE
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
          bg-[#F7F7FB]
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
              relative
              h-[205px]
              rounded-b-[30px]
              bg-gradient-to-br
              from-[#4B008B]
              via-[#6115BD]
              to-[#E61D67]
              text-white
            "
          >

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
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/15
                backdrop-blur-md
                outline-none
              "
            >

              <ChevronLeft size={22} />

            </motion.button>


            {/* Profile */}

            <div className="flex flex-col items-center">

              <div className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border-4
                border-white/20
                bg-white
                shadow-lg
              ">

                <User
                  size={28}
                  className="text-[#6115BD]"
                />

              </div>


              <h2 className="mt-2 text-[24px] font-bold">
                Arya Sharma
              </h2>


              <div className="
                mt-1
                rounded-full
                bg-white/20
                px-4
                py-1
                backdrop-blur-sm
              ">

                <span className="text-sm font-medium">
                  ⭐ Premium Customer
                </span>

              </div>

            </div>

          </motion.div>


          {/* =========================
              ACCOUNT DETAILS
          ========================== */}

          <motion.div
            variants={contentVariants}
            custom={0.12}
            initial="hidden"
            animate="visible"
            className="
              mx-5
              rounded-[24px]
              bg-white
              p-5
              shadow-lg
            "
          >

            <div className="mb-5 flex items-center justify-between">

              <h3 className="text-lg font-bold text-[#1B1B1B]">
                Account Details
              </h3>

              <span className="
                rounded-full
                bg-green-100
                px-3
                py-1
                text-xs
                font-semibold
                text-green-700
              ">
                Verified
              </span>

            </div>


            <div className="space-y-4">

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Customer ID
                </span>

                <span className="font-semibold text-[#1B1B1B]">
                  XXXXX12345
                </span>

              </div>


              <div className="flex justify-between">

                <span className="text-gray-500">
                  Mobile
                </span>

                <span className="font-semibold text-[#1B1B1B]">
                  +91 XXXXX XXXXX
                </span>

              </div>


              <div className="flex justify-between">

                <span className="text-gray-500">
                  Email
                </span>

                <span className="font-semibold text-[#1B1B1B]">
                  arya@email.com
                </span>

              </div>


              <div className="flex justify-between">

                <span className="text-gray-500">
                  Branch
                </span>

                <span className="font-semibold text-[#1B1B1B]">
                  Jaipur
                </span>

              </div>

            </div>

          </motion.div>


          {/* =========================
              MENU
          ========================== */}

          <motion.div
            variants={contentVariants}
            custom={0.22}
            initial="hidden"
            animate="visible"
            className="
              mx-5
              mt-6
              overflow-hidden
              rounded-[24px]
              bg-white
              shadow-lg
            "
          >

            {menu.map((item, index) => {

              const Icon = item.icon;

              return (

                <button
                  key={index}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    px-5
                    py-5
                    transition-all
                    duration-200
                    hover:bg-gray-50
                    active:scale-[0.99]

                    ${
                      index !== menu.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }
                  `}
                >

                  <div className="flex items-center gap-4">

                    {/* Icon */}

                    <div className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F4EEFF]
                    ">

                      <Icon
                        size={22}
                        className="text-[#6115BD]"
                      />

                    </div>


                    {/* Text */}

                    <div className="text-left">

                      <h3 className="
                        text-[16px]
                        font-semibold
                        text-[#1B1B1B]
                      ">
                        {item.title}
                      </h3>

                      <p className="
                        mt-1
                        text-[13px]
                        text-gray-500
                      ">
                        {item.subtitle}
                      </p>

                    </div>

                  </div>


                  {/* Arrow */}

                  <ChevronRight
                    size={20}
                    className="text-gray-400"
                  />

                </button>

              );

            })}

          </motion.div>


          {/* =========================
              LOGOUT
          ========================== */}

          <motion.div
            variants={contentVariants}
            custom={0.32}
            initial="hidden"
            animate="visible"
            className="mx-5 mt-7"
          >

            <motion.button
              whileTap={{
                scale: 0.97,
              }}

              transition={{
                duration: 0.15,
              }}

              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-[20px]
                border
                border-red-200
                bg-white
                py-4
                font-semibold
                text-red-500
                shadow-md
                transition-colors
                duration-200
                hover:bg-red-50
              "
            >

              <LogOut size={20} />

              Logout

            </motion.button>

          </motion.div>


        </div>


        {/* =========================
            BOTTOM NAVIGATION
            KEEP FIXED
        ========================== */}

        <BottomNav />

      </motion.div>

    </div>
  );
}