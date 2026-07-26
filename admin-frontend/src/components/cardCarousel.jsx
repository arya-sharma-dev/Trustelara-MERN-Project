import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

const cards = [
  {
    account: "Savings Account",
    number: "**** 2846",
    balance: "₹2,48,540.25",
  },
  {
    account: "Salary Account",
    number: "**** 9182",
    balance: "₹84,920.80",
  },
  {
    account: "Current Account",
    number: "**** 4531",
    balance: "₹5,12,100.00",
  },
];

export default function CardCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % cards.length);
  };

  const prev = () => {
    setIndex((index - 1 + cards.length) % cards.length);
  };

  return (
    <div className="mx-5 mt-8">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-xl font-bold">
          My Accounts
        </h2>

        <div className="flex gap-2">

          <button
            onClick={prev}
            className="rounded-xl bg-white p-2 shadow"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="rounded-xl bg-white p-2 shadow"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>

      <motion.div
        key={index}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        className="rounded-3xl bg-gradient-to-r from-[#4B0082] via-[#7A1FA2] to-[#E91E63] p-6 text-white shadow-xl"
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-white/70">
              {cards[index].account}
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {cards[index].number}
            </h2>

          </div>

          <CreditCard size={34} />

        </div>

        <div className="mt-8">

          <p className="text-white/70">
            Available Balance
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {cards[index].balance}
          </h1>

        </div>

      </motion.div>

      <div className="mt-5 flex justify-center gap-2">

        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-8 bg-[#7A1FA2]"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}

      </div>

    </div>
  );
}