import Categories from "./components/Categories";
import PropertyList from "./components/properties/PropertyList";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <Categories />
      
      <div className="mt-4 grid xs:grid-cols-1 lg:grid-cols-2  gap-6 lgmin:grid-cols-3"> 
      <PropertyList />
      </div>
    </main>
  );
}
