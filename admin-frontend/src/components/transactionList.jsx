import {
  Briefcase,
  Film,
  ShoppingBasket,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";

const transactions = [
  {
    title: "Salary",
    date: "Today • 12:30 PM",
    amount: "+ ₹45,000",
    credit: true,
    icon: Briefcase,
  },
  {
    title: "Netflix",
    date: "Yesterday • 08:15 PM",
    amount: "- ₹499",
    credit: false,
    icon: Film,
  },
  {
    title: "Grocery Store",
    date: "Yesterday • 06:20 PM",
    amount: "- ₹850",
    credit: false,
    icon: ShoppingBasket,
  },
  {
    title: "Zomato",
    date: "13 May • 08:45 PM",
    amount: "- ₹320",
    credit: false,
    icon: UtensilsCrossed,
  },
  {
    title: "Amazon",
    date: "12 May • 09:10 PM",
    amount: "- ₹1,299",
    credit: false,
    icon: ShoppingBag,
  },
  {
    title: "Freelance Work",
    date: "12 May • 11:15 AM",
    amount: "+ ₹5,000",
    credit: true,
    icon: Briefcase,
  },
];

export default function TransactionList() {
  return (
    <div className="mt-6 pb-24">

      {/* Heading */}

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-[16px] font-semibold text-gray-500">
          May 2024
        </h2>

        <button className="text-[#6115BD] text-sm font-semibold">
          ⊚
        </button>

      </div>

      {/* One Single Card */}

      <div className="bg-white rounded-[22px] shadow-md overflow-hidden">

        {transactions.map((item, index) => {
          const Icon = item.icon;

          return (
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
                  className={`h-[56px] w-[56px] rounded-full flex items-center justify-center ${
                    item.credit
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  <Icon size={23} />
                </div>

                <div>

                  <h3 className="text-[17px] font-semibold text-[#1A1A1A]">
                    {item.title}
                  </h3>

                  <p className="text-[13px] text-gray-500 mt-1">
                    {item.date}
                  </p>

                </div>

              </div>

              {/* Right */}

              <div className="flex flex-col items-end gap-2">

                <p
                  className={`text-[17px] font-bold ${
                    item.credit
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.amount}
                </p>

                <span
                  className={`text-[11px] font-medium px-3 py-1 rounded-full ${
                    item.credit
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.credit ? "Income" : "Expense"}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}