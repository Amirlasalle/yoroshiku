const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">どこ?</p>
            <p className="text-sm font-semibold">行きたい場所</p>
          </div>

          <div className="h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">チェックイン゛</p>
            <p className="text-sm font-semibold">日付を追加する</p>
          </div>

          <div className="h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">チェックアウト</p>
            <p className="text-sm font-semibold">日付を追加する</p>
          </div>

          <div className="h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">だれ?</p>
            <p className=" text-sm font-semibold">ゲストを追加</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="cursor-pointer p-2 lg:p-4 bg-airbnb hover:bg-airbnbDark rounded-full text-white">
          <svg
            viewBox="0 0 32 32"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentcolor",
              strokeWidth: 4,
              overflow: "visible",
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
