import { CreditCard, Wifi } from "lucide-react";

export default function CardPreview() {
  return (
    <div
      className="
        relative
        mx-auto
        w-[320px]
        h-[190px]
        overflow-hidden
        rounded-[24px]
        bg-gradient-to-br
        from-[#4B0082]
        via-[#6115BD]
        to-[#E91E63]
        p-5
        text-white
        shadow-xl
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-white/5 blur-2xl" />

      {/* Top */}
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[2px] text-white/70">
            State Bank of India
          </p>

          <h3 className="mt-1 text-[18px] font-semibold">
            Platinum Debit Card
          </h3>
        </div>

        <CreditCard size={28} className="text-white/90" />
      </div>

      {/* Chip */}
      <div className="relative mt-5 flex items-center justify-between">
        <div className="h-10 w-14 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-500 shadow" />

        <Wifi size={20} className="rotate-90 text-white/90" />
      </div>

      {/* Number */}
      <p className="relative mt-5 text-[18px] font-semibold tracking-[4px]">
        •••• •••• •••• 5678
      </p>

      {/* Bottom */}
      <div className="relative mt-5 flex items-end justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-wider text-white/70">
            Card Holder
          </p>

          <h4 className="mt-1 text-[15px] font-medium">
            Arya Sharma
          </h4>
        </div>

        <div className="text-right">
          <p className="text-[9px] uppercase tracking-wider text-white/70">
            Valid Thru
          </p>

          <h4 className="mt-1 text-[14px] font-medium">
            09/29
          </h4>
        </div>
      </div>

      {/* VISA */}
      <div className="absolute bottom-4 right-5">
        <p className="text-xl font-black italic tracking-wider">
          VISA
        </p>
      </div>
    </div>
  );
}