import {
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function SecurityCard() {
  return (
    <div
      className="
        mt-6
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
      {/* Background Glow */}

      <div className="absolute hidden"></div>

      <div className="flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-4">

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
            <ShieldCheck
              size={34}
              className="text-white"
            />
          </div>

          <div>

            <h2 className="text-[22px] font-bold">
              Safe & Secure
            </h2>

            <p className="mt-2 max-w-[190px] text-sm leading-6 text-white/80">
              Your payments are protected using
              SBI's bank-grade security and
              encrypted UPI transactions.
            </p>

          </div>

        </div>

        {/* Arrow */}

        <button
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white/15
            backdrop-blur-md
            transition
            duration-200
            hover:bg-white/20
            active:scale-95
          "
        >
          <ChevronRight size={24} />
        </button>

      </div>

      {/* Bottom Text */}

      <div className="mt-6 border-t border-white/15 pt-4">

        <p className="text-[13px] text-white/70">
          ✓ RBI Compliant &nbsp;&nbsp; • &nbsp;&nbsp;
          256-bit Encryption &nbsp;&nbsp; • &nbsp;&nbsp;
          Secure UPI
        </p>

      </div>

    </div>
  );
}