import { ChevronRight } from "lucide-react";

export default function CardOption({
  title,
  subtitle,
  icon: Icon,
  toggle = false,
  last = false,
}) {
  return (
    <button
      className={`
        group
        flex
        w-full
        items-center
        justify-between
        px-5
        py-5
        transition-all
        duration-200
        hover:bg-gray-50
        active:scale-[0.99]
        ${last ? "" : "border-b border-gray-100"}
      `}
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#F4EEFF]
            transition-all
            duration-200
            group-hover:scale-110
          "
        >
          <Icon
            size={22}
            className="text-[#6115BD]"
          />
        </div>

        <div className="text-left">

          <h3 className="text-[16px] font-semibold text-[#1B1B1B]">
            {title}
          </h3>

          <p className="mt-1 text-[13px] text-gray-500">
            {subtitle}
          </p>

        </div>

      </div>

      {/* Right */}

      {toggle ? (

        <div
          className="
            relative
            h-7
            w-12
            rounded-full
            bg-gray-300
            transition
          "
        >

          <div
            className="
              absolute
              left-1
              top-1
              h-5
              w-5
              rounded-full
              bg-white
              shadow
              transition
            "
          />

        </div>

      ) : (

        <ChevronRight
          size={20}
          className="
            text-gray-400
            transition-transform
            duration-200
            group-hover:translate-x-1
          "
        />

      )}

    </button>
  );
}