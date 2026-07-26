import { motion } from "framer-motion";

import PaymentHeader from "../components/paymentHeader";
import PaymentSearch from "../components/paymentSearch";
import PaymentSection from "../components/paymentSection";
import BottomNav from "../components/bottomNav";

import {
  UserRound,
  Landmark,
  Users,
  Building2,
  ScanLine,
  MapPin,
  Smartphone,
  Globe2,
  BatteryCharging,
  Lightbulb,
  Tv,
  CreditCard,
  Gift,
  Percent,
  Headphones,
  CircleHelp,
} from "lucide-react";

export default function Payments() {

  /* =========================
     PAYMENT DATA
  ========================== */

  const transferMoney = [
    { label: "To Contact", icon: UserRound },
    { label: "To Account", icon: Landmark },
    { label: "Self Transfer", icon: Users },
    { label: "Bank Transfer", icon: Building2 },
  ];

  const upiServices = [
    { label: "Scan QR", icon: ScanLine },
    { label: "UPI ID", icon: MapPin },
    { label: "Approve to Pay", icon: Smartphone },
    { label: "International", icon: Globe2 },
  ];

  const payBills = [
    { label: "Mobile Recharge", icon: BatteryCharging },
    { label: "Electricity", icon: Lightbulb },
    { label: "DTH", icon: Tv },
    { label: "Credit Card", icon: CreditCard },
  ];

  const offers = [
    { label: "Rewards", icon: Gift },
    { label: "Offers", icon: Percent },
    { label: "Support", icon: Headphones },
    { label: "Help", icon: CircleHelp },
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
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  /* =========================
     SEARCH ANIMATION
  ========================== */

  const searchVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.12,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  /* =========================
     SECTION ANIMATION
  ========================== */

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 18,
      scale: 0.98,
    },

    visible: (delay) => ({
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        delay,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };


  return (

    <div className="min-h-screen flex justify-center items-center bg-[#ECEEF5]">

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
            PAGE CONTENT
        ========================== */}

        <div className="px-5 pt-2 pb-[90px]">

          {/* Header */}

          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >

            <PaymentHeader />

          </motion.div>


          {/* Search */}

          <motion.div
            variants={searchVariants}
            initial="hidden"
            animate="visible"
          >

            <PaymentSearch />

          </motion.div>


          {/* =========================
              PAYMENT SECTIONS
          ========================== */}

          <div className="space-y-4">

            {/* Transfer Money */}

            <motion.div
              variants={sectionVariants}
              custom={0.20}
              initial="hidden"
              animate="visible"
            >

              <PaymentSection
                title="Transfer Money"
                items={transferMoney}
              />

            </motion.div>


            {/* UPI Services */}

            <motion.div
              variants={sectionVariants}
              custom={0.30}
              initial="hidden"
              animate="visible"
            >

              <PaymentSection
                title="UPI Services"
                items={upiServices}
              />

            </motion.div>


            {/* Pay Bills */}

            <motion.div
              variants={sectionVariants}
              custom={0.40}
              initial="hidden"
              animate="visible"
            >

              <PaymentSection
                title="Pay Bills"
                items={payBills}
              />

            </motion.div>


            {/* Offers & Support */}

            <motion.div
              variants={sectionVariants}
              custom={0.50}
              initial="hidden"
              animate="visible"
            >

              <PaymentSection
                title="Offers & Support"
                items={offers}
              />

            </motion.div>

          </div>

        </div>


        {/* =========================
            BOTTOM NAVIGATION
            KEEP FIXED
        ========================== */}

        <BottomNav active="pay" />

      </motion.div>

    </div>

  );
}