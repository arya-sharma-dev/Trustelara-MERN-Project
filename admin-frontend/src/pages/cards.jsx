import { motion } from "framer-motion";

import {
  ArrowLeft,
  CreditCard,
  Snowflake,
  ShieldCheck,
  Lock,
  Globe,
  Gift,
  Settings2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import CardPreview from "../components/cardPreview";
import CardOption from "../components/cardOption";
import BottomNav from "../components/bottomNav";

export default function Cards() {
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
      y: -12,
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
     CARD PREVIEW ANIMATION
  ========================== */

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 25,
      rotateX: 8,
      scale: 0.96,
    },

    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,

      transition: {
        delay: 0.12,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  /* =========================
     CARD OPTIONS ANIMATION
  ========================== */

  const optionVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },

    visible: (delay) => ({
      opacity: 1,
      x: 0,

      transition: {
        delay,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };


  return (

    <div className="min-h-screen flex justify-center bg-[#ECEEF5]">

      {/* =========================
          MOBILE SCREEN
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
          rounded-[30px]
          bg-[#F7F7FB]
          shadow-2xl
        "
      >

        {/* =========================
            SCROLL AREA
        ========================== */}

        <div className="h-full overflow-y-auto hide-scrollbar pb-24">

          {/* =========================
              HEADER
          ========================== */}

          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="
              sticky
              top-0
              z-20
              bg-white
              border-b
              border-gray-100
            "
          >

            <div className="flex items-center gap-4 px-5 pt-4 pb-3">

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

                onClick={() => navigate(-1)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F3EEFF]
                  outline-none
                "
              >

                <ArrowLeft
                  size={20}
                  className="text-[#6115BD]"
                />

              </motion.button>


              {/* Heading */}

              <div>

                <h1 className="text-[22px] font-bold text-[#1B1B1B]">
                  My Cards
                </h1>

                <p className="text-[13px] text-gray-500">
                  Manage your debit card
                </p>

              </div>

            </div>

          </motion.div>


          {/* =========================
              CARD PREVIEW
          ========================== */}

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="px-5 pt-4"
            style={{
              perspective: 1000,
            }}
          >

            <CardPreview />

          </motion.div>


          {/* =========================
              CARD CONTROLS
          ========================== */}

          <div
            className="
              mx-5
              mt-5
              overflow-hidden
              rounded-[24px]
              bg-white
              shadow-lg
            "
          >

            {/* Card Management */}

            <motion.div
              variants={optionVariants}
              custom={0.28}
              initial="hidden"
              animate="visible"
            >

              <CardOption
                title="Card Management"
                subtitle="View card details, status & limits"
                icon={CreditCard}
              />

            </motion.div>


            {/* Freeze Card */}

            <motion.div
              variants={optionVariants}
              custom={0.36}
              initial="hidden"
              animate="visible"
            >

              <CardOption
                title="Freeze Card"
                subtitle="Temporarily disable your card"
                icon={Snowflake}
                toggle
              />

            </motion.div>


            {/* Card Limits */}

            <motion.div
              variants={optionVariants}
              custom={0.44}
              initial="hidden"
              animate="visible"
            >

              <CardOption
                title="Card Limits"
                subtitle="ATM, POS & online transaction limits"
                icon={ShieldCheck}
              />

            </motion.div>


            {/* Manage PIN */}

            <motion.div
              variants={optionVariants}
              custom={0.52}
              initial="hidden"
              animate="visible"
            >

              <CardOption
                title="Manage PIN"
                subtitle="Change or regenerate your card PIN"
                icon={Lock}
              />

            </motion.div>


            {/* International Usage */}

            <motion.div
              variants={optionVariants}
              custom={0.60}
              initial="hidden"
              animate="visible"
            >

              <CardOption
                title="International Usage"
                subtitle="Enable or disable overseas transactions"
                icon={Globe}
                toggle
              />

            </motion.div>


            {/* Card Offers */}

            <motion.div
              variants={optionVariants}
              custom={0.68}
              initial="hidden"
              animate="visible"
            >

              <CardOption
                title="Card Offers"
                subtitle="Rewards, cashback & merchant offers"
                icon={Gift}
              />

            </motion.div>


            {/* More Controls */}

            <motion.div
              variants={optionVariants}
              custom={0.76}
              initial="hidden"
              animate="visible"
            >

              <CardOption
                title="More Controls"
                subtitle="Replacement card & additional settings"
                icon={Settings2}
              />

            </motion.div>

          </div>


          {/* Bottom Space */}

          <div className="h-6"></div>

        </div>


        {/* =========================
            BOTTOM NAVIGATION
            KEEP OUTSIDE MOTION
        ========================== */}

        <BottomNav active="cards" />

      </motion.div>

    </div>
  );
}