import {
  Send,
  Smartphone,
  ReceiptText,
  Wallet,
} from "lucide-react";

const actions = [
  {
    title: "Send Money",
    icon: <Send size={22} />,
  },
  {
    title: "UPI/Lite",
    icon: <Wallet size={22} />,
  },
  {
    title: "Pay Bills",
    icon: <ReceiptText size={22} />,
  },
  {
    title: "Recharge",
    icon: <Smartphone size={22} />,
  },
];

export default function QuickActions() {
  return (
    <div className="mt-6">

      {/* Heading */}

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-xl font-bold text-gray-900">
          Quick Actions
        </h2>

        
      </div>

      {/* Actions */}

      <div className="grid grid-cols-4 gap-4">

        {actions.map((action, index) => (
          <button
            key={index}
            className="flex flex-col items-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md transition hover:scale-105">

              <div className="text-[#6B21D8] size={20}">
                {action.icon}
              </div>

            </div>

            <span className="mt-1.5 text-center text-[11px] leading-4 font-medium text-gray-700">
              {action.title}
            </span>

          </button>
        ))}

      </div>

    </div>
  );
}