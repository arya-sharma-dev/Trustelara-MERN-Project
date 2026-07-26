import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchTransactions() {
  return (
    <div className="flex items-center gap-3 mt-5">

      <div className="flex-1 h-[46px] bg-white rounded-xl shadow-sm flex items-center px-4">

        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          placeholder="Search transactions"
          className="flex-1 bg-transparent outline-none ml-3 text-[14px]"
        />

      </div>

      <button className="w-[46px] h-[46px] bg-white rounded-xl shadow-sm flex items-center justify-center">

        <SlidersHorizontal
          size={18}
          className="text-[#6B21D8]"
        />

      </button>

    </div>
  );
}