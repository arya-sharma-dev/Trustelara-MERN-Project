import {
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const recentPayments = [
  {
    name: "Rahul",
    color: "from-[#6115BD] to-[#8B5CF6]",
  },
  {
    name: "Priya",
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "Aman",
    color: "from-sky-500 to-cyan-400",
  },
  {
    name: "Neha",
    color: "from-orange-500 to-yellow-400",
  },
  {
    name: "Aryan",
    color: "from-green-500 to-emerald-400",
  },
];

export default function ScanActions() {
  return (
    <div className="mt-6">

      {/* Recent Payments */}

      <div className="rounded-[28px] bg-white p-5 shadow-lg">

        <div className="mb-5 flex items-center justify-between">

          <div>

            <h2 className="text-[18px] font-bold text-[#1B1B1B]">
              Recent Payments
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Pay someone again
            </p>

          </div>

          <button
            className="
              flex
              items-center
              gap-1
              text-[14px]
              font-semibold
              text-[#6115BD]
            "
          >

            View All

            <ChevronRight size={16} />

          </button>

        </div>

        <div className="flex gap-5 overflow-x-auto hide-scrollbar">

          {recentPayments.map((person) => (

            <button
              key={person.name}
              className="
                group
                flex
                min-w-[70px]
                flex-col
                items-center
              "
            >

              <div
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  ${person.color}
                  text-lg
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:scale-105
                `}
              >

                {person.name.charAt(0)}

              </div>

              <span className="mt-3 text-[12px] font-semibold text-gray-700">

                {person.name}

              </span>

            </button>

          ))}

        </div>

      </div>

      {/* Security Card */}

      <div
        className="
          mt-5
          overflow-hidden
          rounded-[28px]
          bg-gradient-to-br
          from-[#4B0082]
          via-[#6115BD]
          to-[#8E24AA]
          p-5
          text-white
          shadow-xl
        "
      >

        <div className="flex items-center justify-between">

          <div>

            <div className="flex items-center gap-2">

              <ShieldCheck
                size={20}
                className="text-green-300"
              />

              <h3 className="text-[18px] font-bold">

                Safe & Secure

              </h3>

            </div>

            <p className="mt-3 max-w-[220px] text-[14px] leading-6 text-white/80">

              Every payment is protected using
              SBI's bank-grade encryption and
              secure UPI authentication.

            </p>

          </div>

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-white/15
              backdrop-blur-md
            "
          >

            <ShieldCheck size={30} />

          </div>

        </div>

      </div>

      {/* Tips */}

      <div className="mt-5 rounded-[24px] bg-white p-5 shadow-lg">

        <h3 className="text-[17px] font-bold text-[#1B1B1B]">

          💡 Tips

        </h3>

        <ul className="mt-4 space-y-3 text-[14px] text-gray-600">

          <li>
            • Hold your phone steady while scanning.
          </li>

          <li>
            • Ensure the QR code is fully visible.
          </li>

          <li>
            • Verify the merchant name before paying.
          </li>

        </ul>

      </div>

    </div>
  );
}