import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AccountCard() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="rounded-[26px] bg-white p-6 shadow-xl">

      {/* Top */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-[17px] font-semibold text-gray-700">
            Savings Account
          </p>

          <p className="mt-1 text-sm tracking-[2px] text-gray-400">
            XXXX 1234
          </p>

        </div>

        <button
          onClick={() => setShowBalance(!showBalance)}
          className="rounded-full bg-[#F6F4FF] p-3 transition-all duration-200 hover:bg-[#EEE8FF] active:scale-95"
        >
          {showBalance ? (
            <Eye
              size={20}
              className="text-[#6B21D8]"
            />
          ) : (
            <EyeOff
              size={20}
              className="text-[#6B21D8]"
            />
          )}
        </button>

      </div>

      {/* Balance */}

      <div className="mt-8">

        <p className="text-sm font-medium text-gray-500">
          Available Balance
        </p>

        <div className="mt-2 h-[52px] flex items-center">

          {showBalance ? (

            <h2 className="text-[42px] font-bold tracking-tight text-gray-900 transition-all duration-300">

              ₹52,450.25

            </h2>

          ) : (

            <div className="flex gap-2">

              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>

            </div>

          )}

        </div>

      </div>

      {/* Bottom */}

      <button className="mt-6 text-[15px] font-semibold text-[#6B21D8] transition hover:opacity-80">

        View Balance

      </button>

    </div>
  );
}