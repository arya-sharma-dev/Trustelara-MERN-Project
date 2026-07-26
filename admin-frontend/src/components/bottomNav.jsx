import {
  House,
  Wallet,
  Grid2x2,
  CreditCard,
  ScanLine,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function BottomNav({ active = "home" }) {
  const navigate = useNavigate();

  const tabs = [
    {
      id: "home",
      label: "Home",
      icon: House,
      route: "/dashboard",
    },
    {
      id: "pay",
      label: "Pay",
      icon: Wallet,
      route: "/payments",
    },
    {
      id: "scan",
      label: "Scan QR",
      icon: ScanLine,
      route: "/scan",
    },
    {
      id: "services",
      label: "Services",
      icon: Grid2x2,
      route: "/services",
    },
    {
      id: "cards",
      label: "Cards",
      icon: CreditCard,
      route: "/cards",
    },
  ];

  return (
    <nav
      className="
        absolute
        bottom-0
        left-0
        right-0
        z-50
        h-[78px]
        rounded-b-[30px]
        border-t
        border-gray-200
        bg-white
      "
    >
      <div className="flex h-full items-center justify-around">

        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => navigate(tab.route)}
              className="
                relative
                flex
                h-full
                w-[20%]
                flex-col
                items-center
                justify-center
                outline-none
                select-none
              "
            >

              {/* Icon */}

              <Icon
                size={22}
                strokeWidth={isActive ? 2.4 : 2}
                className={`
                  transition-colors
                  duration-150
                  ease-out
                  ${
                    isActive
                      ? "text-[#6115BD]"
                      : "text-gray-400"
                  }
                `}
              />


              {/* Label */}

              <span
                className={`
                  mt-1
                  text-[11px]
                  leading-none
                  transition-colors
                  duration-150
                  ease-out
                  ${
                    isActive
                      ? "font-semibold text-[#6115BD]"
                      : "font-medium text-gray-500"
                  }
                `}
              >
                {tab.label}
              </span>


              {/* Active Indicator */}

              <span
                className={`
                  absolute
                  bottom-[7px]
                  h-[3px]
                  w-6
                  rounded-full
                  bg-[#6115BD]
                  transition-all
                  duration-200
                  ease-out
                  ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }
                `}
              />

            </button>
          );
        })}

      </div>
    </nav>
  );
}