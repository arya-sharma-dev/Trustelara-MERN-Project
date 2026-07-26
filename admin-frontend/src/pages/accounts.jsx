import { motion } from "framer-motion";
import {
  ChevronLeft,
  Bell,
  Landmark,
  Briefcase,
  PiggyBank,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/bottomNav";

export default function Accounts() {
  const navigate = useNavigate();

  const accounts = [
    {
      title: "Savings Account",
      number: "XXXX2846",
      balance: "₹2,48,540.25",
      icon: Landmark,
      gradient: "from-[#4B0082] to-[#7A1FA2]",
    },
    {
      title: "Salary Account",
      number: "XXXX9182",
      balance: "₹84,920.80",
      icon: Briefcase,
      gradient: "from-[#7A1FA2] to-[#E91E63]",
    },
    {
      title: "Fixed Deposit",
      number: "FD • 1458",
      balance: "₹8,00,000",
      icon: ShieldCheck,
      gradient: "from-[#E91E63] to-[#EC407A]",
    },
    {
      title: "Recurring Deposit",
      number: "RD • 7854",
      balance: "₹1,25,000",
      icon: PiggyBank,
      gradient: "from-[#512DA8] to-[#7A1FA2]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA] pb-32">

      {/* Header */}

      <div className="bg-gradient-to-r from-[#4B0082] via-[#7A1FA2] to-[#E91E63] rounded-b-[35px] px-6 pt-14 pb-8 text-white">

        <div className="flex items-center justify-between">

          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-full bg-white/15 p-3"
          >
            <ChevronLeft />
          </button>

          <div className="text-center">

            <h1 className="text-2xl font-bold">

              My Accounts

            </h1>

            <p className="text-sm text-white/80">

              SBI Account Overview

            </p>

          </div>

          <button className="rounded-full bg-white/15 p-3 relative">

            <Bell />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-400"></span>

          </button>

        </div>

      </div>

      {/* Total Balance */}

      <motion.div

        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}

        className="mx-5 -mt-8 rounded-3xl bg-gradient-to-r from-[#4B0082] via-[#7A1FA2] to-[#E91E63] p-6 text-white shadow-xl"

      >

        <p className="text-white/80">

          Total Balance

        </p>

        <h2 className="mt-2 text-4xl font-bold">

          ₹17,58,561

        </h2>

        <p className="mt-2 text-sm text-white/70">

          Across all SBI Accounts

        </p>

      </motion.div>

      {/* Accounts */}

      <div className="mx-5 mt-8">

        <h2 className="mb-4 text-xl font-bold text-gray-800">

          Your Accounts

        </h2>

        <div className="space-y-4">

          {accounts.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div

                key={index}

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: index * 0.1 }}

                className="rounded-3xl bg-white p-5 shadow-md"

              >

                <div className="flex justify-between items-center">

                  <div className="flex gap-4 items-center">

                    <div
                      className={`h-14 w-14 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white`}
                    >
                      <Icon size={26} />
                    </div>

                    <div>

                      <h3 className="font-bold text-gray-800">

                        {item.title}

                      </h3>

                      <p className="text-sm text-gray-500">

                        {item.number}

                      </p>

                    </div>

                  </div>

                  <ChevronRight className="text-gray-400" />

                </div>

                <div className="mt-5">

                  <p className="text-sm text-gray-500">

                    Available Balance

                  </p>

                  <h2 className="mt-1 text-3xl font-bold text-[#4B0082]">

                    {item.balance}

                  </h2>

                </div>

              </motion.div>

            );

          })}
                  </div>

      </div>

      {/* Quick Actions */}

      <div className="mx-5 mt-8">

        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Services
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <button className="rounded-3xl bg-white p-5 shadow-md transition hover:scale-105">

            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#4B0082] to-[#7A1FA2] text-white">

              📄

            </div>

            <h3 className="font-semibold">
              Account Statement
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Download PDF
            </p>

          </button>

          <button className="rounded-3xl bg-white p-5 shadow-md transition hover:scale-105">

            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#7A1FA2] to-[#E91E63] text-white">

              📘

            </div>

            <h3 className="font-semibold">
              Passbook
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              View History
            </p>

          </button>

          <button className="rounded-3xl bg-white p-5 shadow-md transition hover:scale-105">

            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#E91E63] to-[#EC407A] text-white">

              📬

            </div>

            <h3 className="font-semibold">
              Cheque Book
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Request Now
            </p>

          </button>

          <button className="rounded-3xl bg-white p-5 shadow-md transition hover:scale-105">

            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#512DA8] to-[#7A1FA2] text-white">

              👤

            </div>

            <h3 className="font-semibold">
              Nominee
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Manage
            </p>

          </button>

        </div>

      </div>

      {/* Recent Statement */}

      <div className="mx-5 mt-8">

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-xl font-bold text-gray-800">
            Mini Statement
          </h2>

          <button className="text-[#7A1FA2] font-semibold text-sm">
            View All
          </button>

        </div>

        <div className="rounded-3xl bg-white shadow-md divide-y">

          <div className="flex justify-between p-5">

            <div>

              <h3 className="font-semibold">
                Amazon India
              </h3>

              <p className="text-sm text-gray-500">
                Today • UPI
              </p>

            </div>

            <span className="font-bold text-red-500">
              -₹2,499
            </span>

          </div>

          <div className="flex justify-between p-5">

            <div>

              <h3 className="font-semibold">
                Salary Credit
              </h3>

              <p className="text-sm text-gray-500">
                Yesterday
              </p>

            </div>

            <span className="font-bold text-green-600">
              +₹48,000
            </span>

          </div>

          <div className="flex justify-between p-5">

            <div>

              <h3 className="font-semibold">
                Electricity Bill
              </h3>

              <p className="text-sm text-gray-500">
                Jul 16
              </p>

            </div>

            <span className="font-bold text-red-500">
              -₹1,850
            </span>

          </div>

        </div>

      </div>

      <BottomNav />

    </div>

  );

}