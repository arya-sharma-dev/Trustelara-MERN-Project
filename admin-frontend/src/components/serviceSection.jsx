export default function ServiceSection({
  title,
  items,
}) {
  return (
    <div className="mt-8">

      <h2 className="mb-4 text-[18px] font-bold text-[#111827]">
        {title}
      </h2>

      <div className="grid grid-cols-4 gap-4">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex flex-col items-center"
            >
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-[22px]
                  bg-white
                  shadow-md
                  transition
                  hover:shadow-lg
                  active:scale-95
                "
              >
                <Icon
                  size={24}
                  className="text-[#6115BD]"
                />
              </div>

              <span className="mt-3 text-center text-[13px] leading-5">
                {item.title}
              </span>

            </button>
          );
        })}

      </div>

    </div>
  );
}