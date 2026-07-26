import { motion } from "framer-motion";

import Navbar from "../components/navbar";
import AccountCard from "../components/accountCard";
import QuickActions from "../components/quickActions";
import TransactionCard from "../components/transactionCard";
import BottomNav from "../components/bottomNav";

export default function Dashboard() {

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


    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 18,
        },

        visible: (delay) => ({
            opacity: 1,
            y: 0,

            transition: {
                delay: delay,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };


    return (

        <div className="min-h-screen bg-[#ECEEF5] flex justify-center items-center">

            {/* Mobile Screen */}

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
                    "
                >

                    <Navbar />

                </motion.div>


                {/* =========================
                    CONTENT
                ========================== */}

                <div
                    className="
                        absolute
                        top-[120px]
                        bottom-[78px]
                        left-0
                        right-0
                        px-5
                        overflow-hidden
                    "
                >

                    {/* Account Card */}

                    <motion.div
                        variants={cardVariants}
                        custom={0.05}
                        initial="hidden"
                        animate="visible"
                    >

                        <AccountCard />

                    </motion.div>


                    {/* Quick Actions */}

                    <motion.div
                        variants={cardVariants}
                        custom={0.18}
                        initial="hidden"
                        animate="visible"
                    >

                        <QuickActions />

                    </motion.div>


                    {/* Transactions */}

                    <motion.div
                        variants={cardVariants}
                        custom={0.31}
                        initial="hidden"
                        animate="visible"
                    >

                        <TransactionCard />

                    </motion.div>

                </div>


                {/* =========================
                    BOTTOM NAVIGATION
                    DO NOT WRAP IN MOTION
                ========================== */}

                <BottomNav />

            </motion.div>

        </div>

    );
}