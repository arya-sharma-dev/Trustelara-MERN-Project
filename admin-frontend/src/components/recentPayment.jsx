export default function recentPayment({
  initials,
  name,
  amount,
  color,
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
        style={{ background: color }}
      >
        {initials}
      </div>

      <p className="mt-2 text-[13px] font-medium text-center leading-4">
        {name}
      </p>

      <p className="mt-1 text-[13px] text-gray-500">
        ₹{amount}
      </p>
    </div>
  );
}