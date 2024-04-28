import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";
import Image from "next/image";

const HostDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto pb-6 px-6">
      <div className="justify-center grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="items-center justify-center col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
            <Image
              src="/userImages/ProPic.png"
              alt="Host propic"
              className="rounded-full"
              width={200}
              height={200}
            />

            <h1>AJ</h1>
            <ContactButton />
          </div>
        </aside>

        <div className="col-span-1 md:col-span-3 pl-0 md:pl-0">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyList />
          </div>
        </div>
      </div>
    </main>
  );
};
export default HostDetailPage;
