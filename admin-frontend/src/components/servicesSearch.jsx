import { Search } from "lucide-react";

export default function servicesSearch() {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-3 h-[48px] rounded-2xl bg-white border border-gray-100 px-4 shadow-sm">

        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search for payments"
          className="flex-1 bg-transparent text-[14px] text-gray-700 placeholder:text-gray-400 outline-none"
        />

      </div>
    </div>
  );
}