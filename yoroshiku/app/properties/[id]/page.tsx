import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto pb-6 px-6">
      <div className=" w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/properties/villa-ulmashi.png"
          className="object-cover w-full h-full"
          alt="beach house"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            5 guests - 3 bedrooms - 2 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/userImages/ProPic.png"
              alt="User Image"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              <strong>AJ</strong> is your host
            </p>
          </div>
          <hr />

          <p className="mt-6 text-lg"> loremm lkndsafkjsand;fjkans;djfna;  ;sjdfna;s k jksndfajsdnf ;aksjdnf;aksjnf;akjsdnf;kasj  lskjdbfaksjkajsndkjfnasdkjfna lkjsndfs</p>
        </div>

<ReservationSidebar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
