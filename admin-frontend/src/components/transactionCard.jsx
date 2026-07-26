import { Link } from "react-router-dom";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Briefcase,
  Film,
  ShoppingBasket,
} from "lucide-react";

const transactions = [
  {
    title: "Salary",
    date: "Today • 12:30 PM",
    amount: "+ ₹45,000",
    credit: true,
    icon: <Briefcase size={20} />,
  },
  {
    title: "Netflix",
    date: "Yesterday • 08:15 PM",
    amount: "- ₹499",
    credit: false,
    icon: <Film size={20} />,
  },
  {
    title: "Grocery Store",
    date: "Yesterday • 06:20 PM",
    amount: "- ₹850",
    credit: false,
    icon: <ShoppingBasket size={20} />,
  },
];

export default function TransactionCard() {
  return (
    <div className="mt-8">

      {/* Heading */}

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-[20px] font-semibold text-[#1B1B1B]">
          Recent Transactions
        </h2>

        <Link
          to="/transactions"
          className="text-[#6115BD] font-semibold text-[14px] hover:underline"
        >
          See All
        </Link>

      </div>

      {/* Card */}

      <div className="bg-white rounded-[22px] shadow-sm border border-gray-100">

        {transactions.map((item, index) => (

          <div
            key={index}
            className={`
              flex
              items-center
              justify-between
              px-5
              py-4
              transition-all
              duration-200
              hover:bg-[#FAFAFD]
              hover:scale-[1.01]
              active:scale-[0.99]
              ${
                index !== transactions.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }
            `}
          >

            {/* Left */}

            <div className="flex items-center gap-4">

              <div
                className={`
                  w-12
                  h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  ${
                    item.credit
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                  }
                `}
              >

                {item.icon}

              </div>

              <div>

                <h3 className="text-[15px] font-semibold text-[#1B1B1B]">
                  {item.title}
                </h3>

                <p className="text-[12px] text-gray-500 mt-1">
                  {item.date}
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="text-right">

              <p
                className={`
                  text-[15px]
                  font-semibold
                  ${
                    item.credit
                      ? "text-green-600"
                      : "text-red-500"
                  }
                `}
              >
                {item.amount}
              </p>

              <div className="mt-1">

                {item.credit ? (

                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Income
                  </span>

                ) : (

                  <span className="text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    Expense
                  </span>

                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}