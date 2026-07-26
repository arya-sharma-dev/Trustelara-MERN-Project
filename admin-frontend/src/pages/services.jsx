import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ServicesHeader from "../components/servicesHeader";
import ServicesSearch from "../components/servicesSearch";
import ServicesTabs from "../components/servicesTabs";

import BankingTab from "../components/bankingTab";
import LifestyleTab from "../components/lifestyleTab";
import RewardsTab from "../components/rewardsTab";

import BottomNav from "../components/bottomNav";

export default function Services() {
  const [activeTab, setActiveTab] = useState("banking");

  return (
    <div className="min-h-screen flex justify-center bg-[#ECEEF5]">

      {/* Phone Frame */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
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
            SCROLLABLE AREA
        ========================== */}

        <div className="h-full overflow-y-auto hide-scrollbar pb-24">

          {/* Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ServicesHeader />
          </motion.div>


          {/* Search */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.08,
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ServicesSearch />
          </motion.div>


          {/* Tabs */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.14,
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ServicesTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </motion.div>


          {/* =========================
              TAB CONTENT
          ========================== */}

          <AnimatePresence mode="wait">

            {activeTab === "banking" && (
              <motion.div
                key="banking"
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="px-5 pb-8"
              >
                <BankingTab />
              </motion.div>
            )}


            {activeTab === "lifestyle" && (
              <motion.div
                key="lifestyle"
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="px-5 pb-8"
              >
                <LifestyleTab />
              </motion.div>
            )}


            {activeTab === "rewards" && (
              <motion.div
                key="rewards"
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pb-8"
              >
                <RewardsTab />
              </motion.div>
            )}

          </AnimatePresence>


          {/* Bottom Space */}

          <div className="h-8" />

        </div>


        {/* =========================
            BOTTOM NAVIGATION
        ========================== */}

        <BottomNav active="services" />

      </motion.div>

    </div>
  );
}