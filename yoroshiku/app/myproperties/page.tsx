import Image from "next/image";
import PropertyList from "../components/properties/PropertyList";

const MyPropertiesPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto pb-6 px-6">
      <h1 className="my-6 text-2xl">My properties</h1>
      <div className="mt-4 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lgmin:grid-cols-3 xlmin:grid-cols-4 gap-6"> 
      <PropertyList />
      </div>
    </main>
  );
};
export default MyPropertiesPage;
