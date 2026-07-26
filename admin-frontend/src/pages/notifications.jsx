import { motion } from "framer-motion";

import {
  ChevronLeft,
  Settings2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import NotificationList from "../components/notificationList";
import BottomNav from "../components/bottomNav";

export default function Notifications() {
  const navigate = useNavigate();

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
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  /* =========================
     LIST ANIMATION
  ========================== */

  const listVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.15,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  return (
    <div className="flex min-h-screen justify-center bg-[#ECEEF5]">

      {/* =========================
          PHONE
      ========================== */}

      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          h-[844px]
          w-[390px]
          overflow-hidden
          rounded-[32px]
          bg-[#F7F7FB]
          shadow-2xl
        "
      >

        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="
            border-b
            border-gray-100
            bg-white
            px-5
            pt-6
            pb-4
          "
        >

          <div className="flex items-center justify-between">

            {/* Back */}

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

              onClick={() => navigate(-1)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#F3F4F6]
                outline-none
              "
            >

              <ChevronLeft size={20} />

            </motion.button>


            {/* Title */}

            <h1 className="text-[20px] font-bold text-[#1B1B1B]">
              Notifications
            </h1>


            {/* Settings */}

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

              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#F3F4F6]
                outline-none
              "
            >

              <Settings2
                size={19}
                className="text-[#6115BD]"
              />

            </motion.button>

          </div>

        </motion.div>


        {/* =========================
            NOTIFICATION LIST
        ========================== */}

        <div
          className="
            absolute
            inset-x-0
            top-[82px]
            bottom-[82px]
            overflow-y-auto
            hide-scrollbar
          "
        >

          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >

            <NotificationList />

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