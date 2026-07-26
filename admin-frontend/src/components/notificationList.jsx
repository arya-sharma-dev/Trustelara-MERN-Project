import {
  Wallet,
  Bell,
  ShieldAlert,
  Gift,
  Receipt,
  Smartphone,
} from "lucide-react";

const notifications = [
  {
    section: "Today",
    title: "Salary Credited",
    desc: "₹45,000 has been credited to your Savings Account",
    time: "12:30 PM",
    icon: Wallet,
    color: "green",
  },
  {
    section: "Today",
    title: "Bill Reminder",
    desc: "Electricity bill of ₹1,245 is due tomorrow",
    time: "10:15 AM",
    icon: Receipt,
    color: "blue",
  },
  {
    section: "Today",
    title: "YONO Offer",
    desc: "Get up to 20% off on hotel bookings",
    time: "09:00 AM",
    icon: Gift,
    color: "purple",
  },
  {
    section: "Today",
    title: "Security Alert",
    desc: "Login detected on a new device",
    time: "08:45 AM",
    icon: ShieldAlert,
    color: "red",
  },
  {
    section: "Yesterday",
    title: "UPI Payment",
    desc: "₹850 paid to Grocery Store",
    time: "06:30 PM",
    icon: Smartphone,
    color: "green",
  },
  {
    section: "Yesterday",
    title: "Netflix",
    desc: "₹499 debited via Debit Card",
    time: "04:20 PM",
    icon: Bell,
    color: "red",
  },
];

export default function NotificationList() {
  const sections = ["Today", "Yesterday"];

  return (
    <div className="px-5 py-5">

      {/* Filters */}

      <div className="mb-7 flex gap-3 overflow-x-auto hide-scrollbar">

        <button className="rounded-full bg-[#6115BD] px-4 py-2 text-sm font-semibold text-white">
          All
        </button>

        <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50">
          Transactions
        </button>

        <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50">
          Offers
        </button>

        <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50">
          Alerts
        </button>

      </div>

      {sections.map((section) => (

        <div
          key={section}
          className="mb-7"
        >

          <h2 className="mb-3 text-[15px] font-semibold text-gray-500">
            {section}
          </h2>

          <div className="overflow-hidden rounded-3xl bg-white shadow-md">

            {notifications
              .filter((item) => item.section === section)
              .map((item, index, arr) => {

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
              ${index !== notifications.length - 1
                        ? "border-b border-gray-100"
                        : ""
                      }
            `}
                  >

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110
                      ${item.color === "green"
                          ? "bg-green-100 text-green-600"
                          : item.color === "blue"
                            ? "bg-sky-100 text-sky-600"
                            : item.color === "purple"
                              ? "bg-purple-100 text-[#6115BD]"
                              : "bg-red-100 text-red-500"
                        }`}
                    >

                      <Icon size={20} />

                    </div>

                    <div className="flex-1">

                      <div className="flex items-start justify-between">

                        <h3 className="text-[15px] font-semibold text-[#1B1B1B]">
                          {item.title}
                        </h3>

                        <span className="text-[11px] text-gray-400">
                          {item.time}
                        </span>

                      </div>

                      <p className="mt-1 pr-2 text-[13px] leading-5 text-gray-500">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                );

              })}

          </div>

        </div>

      ))}

      {/* Bottom Spacing */}

      <div className="h-6" />

    </div>

  );
}