import { motion } from "framer-motion";

import NavbarTransactions from "../components/navbarTransactions";
import SearchTransactions from "../components/searchTransactions";
import TransactionFilters from "../components/transactionFilters";
import TransactionList from "../components/transactionList";
import BottomNav from "../components/bottomNav";

export default function Transactions() {
  return (
    <div className="min-h-screen bg-[#ECEEF5] flex justify-center items-center">

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
          bg-[#F7F7FB]
          rounded-[30px]
          shadow-2xl
          overflow-hidden
        "
      >

        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <NavbarTransactions />
        </motion.div>


        {/* =========================
            CONTENT
        ========================== */}

        <div
          className="
            absolute
            inset-x-0
            top-[82px]
            bottom-[78px]
            overflow-y-auto
            no-scrollbar
            px-5
          "
        >

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
            <SearchTransactions />
          </motion.div>


          {/* Filters */}

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
            <TransactionFilters />
          </motion.div>


          {/* Transaction List */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <TransactionList />
          </motion.div>

        </div>


        {/* =========================
            BOTTOM NAV
        ========================== */}

        <BottomNav active="home" />

      </motion.div>

    </div>
  );
}