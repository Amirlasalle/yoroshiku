'use client';
import CustomButton from "../forms/CustomButton";


const SendMessageForm = () => {
  return (
    <>
      <div className="mt-4 p-1 flex space-x-4 items-center focus:outline-black border border-outlineGray bg-white rounded-3xl">
        <input
          type="text"
          placeholder="Message..."
          className="w-full h-auto max-h-[20vh] focus:outline-transparent bg-white rounded-3xl p-2"
        />

        <CustomButton
        onClick={() => console.log('clicked')}
        />
      </div>
    </>
  );
};

export default SendMessageForm;
