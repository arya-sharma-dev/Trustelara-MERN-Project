import PaymentSection from "./paymentSection";

import {
  Gift,
  Wallet,
  Receipt,
  PiggyBank,
  HandCoins,
  Car,
  Building2,
  CreditCard,
} from "lucide-react";

export default function RewardsTab() {

  const earnPoints = [
    {
      label: "UPI Payments",
      icon: CreditCard,
    },
    {
      label: "Bill Payments",
      icon: Receipt,
    },
    {
      label: "Savings",
      icon: Building2,
    },
    {
      label: "FD / RD",
      icon: PiggyBank,
    },
   
  ];

  return (
    <div className="space-y-6">

      {/* Reward Summary */}

      <div className="rounded-[24px] bg-white p-5 shadow-md">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-[18px] font-bold text-gray-900">
              YONO Reward Points
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your loyalty rewards summary
            </p>

          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3EEFF]">

            <Gift
              size={26}
              className="text-[#6B21D8]"
            />

          </div>

        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-[#F8F8FC] p-4">

            <p className="text-xs text-gray-500">
              Available
            </p>

            <h3 className="mt-2 text-xl font-bold">
              1,250
            </h3>

          </div>

          <div className="rounded-2xl bg-[#F8F8FC] p-4">

            <p className="text-xs text-gray-500">
              Unlocking
            </p>

            <h3 className="mt-2 text-xl font-bold">
              2,100
            </h3>

          </div>

          <div className="rounded-2xl bg-[#F8F8FC] p-4">

            <p className="text-xs text-gray-500">
              Expiring
            </p>

            <h3 className="mt-2 text-xl font-bold">
              350
            </h3>

          </div>

          <div className="rounded-2xl bg-[#F8F8FC] p-4">

            <p className="text-xs text-gray-500">
              Total Points
            </p>

            <h3 className="mt-2 text-xl font-bold">
              4,850
            </h3>

          </div>

        </div>

        <div className="mt-6 flex gap-3">

          <button
            className="
              flex-1
              h-[46px]
              rounded-xl
              bg-[#6B21D8]
              text-sm
              font-semibold
              text-white
            "
          >
            Redeem Now
          </button>

          <button
            className="
              flex-1
              h-[46px]
              rounded-xl
              border
              border-[#6B21D8]
              bg-white
              text-sm
              font-semibold
              text-[#6B21D8]
            "
          >
            Know More
          </button>

        </div>

      </div>

      <PaymentSection
        title="Ways to Earn Points"
        items={earnPoints}
      />

    </div>
  );
}