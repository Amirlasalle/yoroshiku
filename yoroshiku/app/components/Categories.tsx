import Image from "next/image";

const Categories = () => {
 return (
  <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/ryokans.jpeg"
        alt="Ryokan"
        width={20}
        height={20}
        />
        <span className="text-xs ">旅館</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/beach.jpeg"
        alt="beach"
        width={20}
        height={20}
        />
        <span className="text-xs ">ビーチ</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/cabin.jpeg"
        alt="cabin"
        width={20}
        height={20}
        />
        <span className="text-xs ">キャビン</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/top-cities.jpeg"
        alt="都市"
        width={20}
        height={20}
        />
        <span className="text-xs ">ベストな都市</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/country.jpeg"
        alt="country"
        width={20}
        height={20}
        />
        <span className="text-xs ">田舎</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/farm.jpeg"
        alt="farm"
        width={20}
        height={20}
        />
        <span className="text-xs ">農地</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/lake.jpeg"
        alt="lake"
        width={20}
        height={20}
        />
        <span className="text-xs ">湖</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/camping.jpeg"
        alt="camping"
        width={20}
        height={20}
        />
        <span className="text-xs ">キャンプ</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/new.jpeg"
        alt="new"
        width={20}
        height={20}
        />
        <span className="text-xs ">新築住宅</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/skiing.jpeg"
        alt="skiing"
        width={20}
        height={20}
        />
        <span className="text-xs ">スキー</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/design.jpeg"
        alt="design"
        width={20}
        height={20}
        />
        <span className="text-xs ">デザイナーズハウス</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/tiny.jpeg"
        alt="tiny"
        width={20}
        height={20}
        />
        <span className="text-xs ">小さな家</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/creative.jpeg"
        alt="creative"
        width={20}
        height={20}
        />
        <span className="text-xs ">クリエイティブ</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/surfing.jpeg"
        alt="surfing"
        width={20}
        height={20}
        />
        <span className="text-xs ">サーフィン</span>
    </div>

    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-b-gray-200 hover:opacity-100">
        <Image 
        src="/categories/pool.jpeg"
        alt="pool"
        width={20}
        height={20}
        />
        <span className="text-xs ">プール</span>
    </div>

     </div>
 );   
};

export default Categories