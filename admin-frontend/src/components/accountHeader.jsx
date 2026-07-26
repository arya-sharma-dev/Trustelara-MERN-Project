import { ChevronLeft, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AccountHeader() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-[#4B0082] via-[#7A1FA2] to-[#E91E63] rounded-b-[35px] px-6 pt-14 pb-8 text-white"
    >
      <div className="flex items-center justify-between">

        <button
          onClick={() => navigate("/dashboard")}
          className="rounded-full bg-white/15 p-3"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="text-center">

          <h1 className="text-2xl font-bold">

            My Accounts

          </h1>

          <p className="text-white/80 text-sm">

            Manage all your accounts

          </p>

        </div>

        <button className="relative rounded-full bg-white/15 p-3">

          <Bell size={22} />

          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-400"></span>

        </button>

      </div>
    </motion.div>
  );
}