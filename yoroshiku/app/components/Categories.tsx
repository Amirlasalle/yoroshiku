"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Categories = () => {
  const [textWidth, setTextWidth] = useState<number>(0);

  useEffect(() => {
    const spanElement = document.getElementById("text-span");
    if (spanElement) {
      setTextWidth(spanElement.offsetWidth);
    }
  }, []);

  return (
    <div className="justify-center h-24 border border-solid border-transparent overflow-hidden">
      <div className="w-full justify-center border border-transparent bg-white overflow-x-scroll no-scrollbar">
        <div className=" justify-center border border-transparent bg-white inline-flex flex-row ">
          <div className="w-auto  h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/ryokans.jpeg"
              alt="Ryokan"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">旅館</span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/beach.jpeg"
              alt="beach"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">
              ビーチ
            </span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/cabin.jpeg"
              alt="cabin"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">
              キャビン
            </span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/top-cities.jpeg"
              alt="都市"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">
              ベストな都市
            </span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/country.jpeg"
              alt="country"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">田舎</span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/farm.jpeg"
              alt="farm"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">農地</span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/lake.jpeg"
              alt="lake"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">湖</span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/camping.jpeg"
              alt="camping"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">
              キャンプ
            </span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/new.jpeg"
              alt="new"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">
              新築住宅
            </span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/skiing.jpeg"
              alt="skiing"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">
              スキー
            </span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/design.jpeg"
              alt="design"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">
              デザイナーズハウス
            </span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/tiny.jpeg"
              alt="tiny"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">
              小さな家
            </span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/creative.jpeg"
              alt="creative"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">
              クリエイティブ
            </span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/surfing.jpeg"
              alt="surfing"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">
              サーフィン
            </span>
          </div>

          <div className="w-auto h-16 flex flex-col items-center justify-center border border-transparent border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100 mr-5 cursor-pointer">
            <Image
              src="/categories/pool.jpeg"
              alt="pool"
              width={20}
              height={20}
              className="min-w-5 max-w-5"
            />
            <span className="text-xs whitespace-nowrap w-auto mt-2">
              プール
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
