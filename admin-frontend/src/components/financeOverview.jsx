import { motion } from "framer-motion";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
} from "lucide-react";

export default function FinanceOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      className="mx-5 mt-8"
    >

      <h2 className="mb-4 text-xl font-bold text-gray-800">
        This Month
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {/* Income */}

        <div className="rounded-3xl bg-white p-5 shadow-lg">

          <div className="flex items-center justify-between">

            <div className="rounded-2xl bg-green-100 p-3">

              <ArrowDownLeft
                className="text-green-600"
                size={24}
              />

            </div>

            <span className="text-green-600 text-sm font-semibold">
              +12%
            </span>

          </div>

          <p className="mt-5 text-gray-500">
            Income
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            ₹82,400
          </h3>

        </div>

        {/* Expenses */}

        <div className="rounded-3xl bg-white p-5 shadow-lg">

          <div className="flex items-center justify-between">

            <div className="rounded-2xl bg-red-100 p-3">

              <ArrowUpRight
                className="text-red-500"
                size={24}
              />

            </div>

            <span className="text-red-500 text-sm font-semibold">
              -8%
            </span>

          </div>

          <p className="mt-5 text-gray-500">
            Expenses
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            ₹31,850
          </h3>

        </div>

      </div>

      {/* Savings */}

      <div className="mt-5 rounded-3xl bg-gradient-to-r from-[#4B0082] via-[#7A1FA2] to-[#E91E63] p-6 text-white shadow-xl">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-white/80">
              Total Savings
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              ₹50,550
            </h2>

          </div>

          <div className="rounded-2xl bg-white/20 p-4">

            <Wallet size={30} />

          </div>

        </div>

        <div className="mt-6">

          <div className="mb-2 flex justify-between text-sm">

            <span>Monthly Goal</span>

            <span>78%</span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/20">

            <div className="h-full w-[78%] rounded-full bg-white"></div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}