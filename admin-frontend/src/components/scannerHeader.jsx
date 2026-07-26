import {
  ChevronLeft,
  CircleHelp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ScannerHeader() {
  const navigate = useNavigate();

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-b-[34px]
        bg-gradient-to-br
        from-[#4B0082]
        via-[#6115BD]
        to-[#8E24AA]
        px-6
        pt-10
        pb-8
        text-white
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-pink-400/15 blur-3xl"></div>

      {/* Top Row */}

      <div className="relative flex items-center justify-between">

        {/* Back */}

        <button
          onClick={() => navigate(-1)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white/15
            backdrop-blur-md
            transition-all
            duration-200
            hover:bg-white/20
            active:scale-95
          "
        >
          <ChevronLeft size={22} />
        </button>

        {/* Title */}

        <h1 className="text-[22px] font-bold tracking-tight">
          Scan QR
        </h1>

        {/* Help */}

        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white/15
            backdrop-blur-md
            transition-all
            duration-200
            hover:bg-white/20
            active:scale-95
          "
        >
          <CircleHelp size={21} />
        </button>

      </div>

      {/* Bottom Glow */}

      <div className="absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
  );
}