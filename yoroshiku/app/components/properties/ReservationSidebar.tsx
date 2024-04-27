const ReservationSidebar = () => {
    return (
<aside className="p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
<h2 className="mb-5 text-2xl">
    $200 per night
</h2>
<div className="mb-6 p-3 border border-gray-400 rounded-xl">
    <label className="mb-2 block font-bold text-xs">
        Guests
    </label>
<select className="cursor-pointer w-full -ml-1 text-xm">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
</select>
</div>
<div className="cursor-pointer w-full mb-6 py-5 rounded-xl text-center text-white bg-airbnb hover:bg-airbnbDark">
Book
</div>

<div className="mb-4 flex justify-between align-center">
   <p> $200 * 4 nights</p>
   <p>$800</p>
</div>

<div className="mb-4 flex justify-between align-center">
   <p> Yoroshiku fee</p>
   <p>$50</p>
</div>

<div className="mb-4 flex justify-between align-center font-bold">
   <p> total</p>
   <p>$850</p>
</div>

</aside>
    )
}

export default ReservationSidebar