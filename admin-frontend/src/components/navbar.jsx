import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex items-start justify-between px-6 pt-8">

      {/* Left Side */}

      <div>

        <p className="text-sm font-medium text-white/90">
          Good Morning,
        </p>

        <h1 className="mt-1 text-[30px] font-bold leading-none text-white">
          Arya
        </h1>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-4">

        {/* Notification */}

        <div className="relative">

          <button
            onClick={() => navigate("/notifications")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-200 hover:bg-white/20 active:scale-95"
          >

            <Bell
              size={22}
              className="text-white"
            />

          </button>

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">

            3

          </span>

        </div>

        {/* Profile */}

        <button
          onClick={() => navigate("/profile")}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-200 hover:bg-white/20 active:scale-95"
        >
          <User
            size={22}
            className="text-white"
          />
        </button>

      </div>

    </div>
  );
}