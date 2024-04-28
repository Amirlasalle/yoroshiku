import Image from "next/image";

const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto pb-6 px-6">
      <h1 className="my-6 mb-2 text-2xl">My reservations</h1>
      <div>
      <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl ">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/properties/cabin-isumi.png"
                alt="reservations"
                className="hover:scale-110 object-cover transition h-full w-full"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">Property name</h2>
            <p>
              <strong>Check in date: </strong> 2024/27/04
            </p>
            <p>
              <strong>Check out date: </strong> 2024/01/05
            </p>

            <p>
              <strong>Number of nights: </strong> 5
            </p>

            <p>
              <strong>Total price: </strong> $573.86
            </p>

            <div className="inline-block cursor-pointer mt-6 py-2 px-3 rounded-xl text-white bg-airbnb hover:bg-airbnbDark">
              Go to property
            </div>
          </div>
        </div>
        <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl ">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/properties/cabin-isumi.png"
                alt="reservations"
                className="hover:scale-110 object-cover transition h-full w-full"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">Property name</h2>
            <p>
              <strong>Check in date: </strong> 2024/27/04
            </p>
            <p>
              <strong>Check out date: </strong> 2024/01/05
            </p>

            <p>
              <strong>Number of nights: </strong> 5
            </p>

            <p>
              <strong>Total price: </strong> $573.86
            </p>

            <div className="inline-block cursor-pointer mt-6 py-2 px-3 rounded-xl text-white bg-airbnb hover:bg-airbnbDark">
              Go to property
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MyReservationsPage;
