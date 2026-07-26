export default function TransactionFilters() {
  return (
    <div className="flex gap-3 mt-5">

      <button className="bg-[#6B21D8] text-white px-6 h-[34px] rounded-full text-sm font-medium">
        All
      </button>

      <button className="bg-white px-6 h-[34px] rounded-full text-sm shadow-sm">
        Income
      </button>

      <button className="bg-white px-6 h-[34px] rounded-full text-sm shadow-sm">
        Expense
      </button>

    </div>
  );
}