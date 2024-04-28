import Image from "next/image";

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
        <div className="relative overflow-hidden aspect-square rounded-xl">
            <Image 
            fill
            src='/properties/villa-ulmashi.png'
            sizes="(max-width: 768px):768px, (max-width: 1200px): 768px, 768px"
            className="hover:scale-110 object-cover transition h-full w-full"
            alt="beach house"
            />
        </div>

        <div className="mt-2">
            <p className="text-md font-medium ">
                Property name
            </p>
        </div>

        <div className="mt-2">
            <p className="text-sm text-gray-500">
                <span className="!text-black font-medium">$200</span> per night
            </p>
        </div>
    </div>
  )
};

export default PropertyListItem;
