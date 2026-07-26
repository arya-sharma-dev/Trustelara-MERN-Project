export default function ServiceTabs({
  activeTab,
  setActiveTab,
}) {
  const tabs = [
    {
      id: "banking",
      label: "Banking",
    },
    {
      id: "lifestyle",
      label: "Lifestyle",
    },
    {
      id: "rewards",
      label: "Rewards",
    },
  ];

  return (
    <div className="mb-7 ml-6 flex gap-3 overflow-x-auto hide-scrollbar">

      {tabs.map((tab) => (

        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            h-[34px]
            rounded-full
            px-6
            text-sm
            shadow-sm
            transition

            className="bg-white px-6 h-[34px] rounded-full text-sm shadow-sm">

            ${
              activeTab === tab.id
                ? "bg-[#6B21D8] text-white"
                : "bg-white text-gray-700 shadow-sm"
            }
          `}
        >

          {tab.label}

        </button>

      ))}

    </div>
  );
}