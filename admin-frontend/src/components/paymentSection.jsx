export default function PaymentSection({
  title,
  items,
  showSeeAll = false,
}) {
  return (
    <div>

      <div className="mb-3 flex items-center justify-between">

        <h2 className="text-[17px] font-bold text-gray-900">
          {title}
        </h2>

        {showSeeAll && (
          <button className="text-sm font-semibold text-[#6B21D8]">
            See All
          </button>
        )}

      </div>

      <div className="grid grid-cols-4 gap-x-4 gap-y-3">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="group flex flex-col items-center"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md transition hover:scale-105">

                <Icon
                  size={22}
                  className="text-[#6B21D8]"
                />

              </div>

              <span className="mt-1.5 text-center text-[11px] leading-4 font-medium text-gray-700">
                {item.label}
              </span>

            </button>
          );
        })}

      </div>

    </div>
  );
}