'use client';
import { useEffect, useRef, useState } from "react";
import CustomButton from "../forms/CustomButton";
import SendMessageForm from "../forms/SendMessageForm";


const ConversationDetail = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-3">
        <div className="flex items-start justify-start ">
          <div className="max-w-[80%] py-4 px-4 rounded-3xl bg-gray-100">
            <p className="font-bold text-md text-gray-600">エイジェイ</p>
            <p>こんにちは! 元気?</p>
          </div>
        </div>

        <div className="flex items-end justify-end py-4 px-4 ">
          <div className="max-w-[80%] !right-0 py-3 px-4 rounded-3xl bg-spotifyGreen">
            <p className="font-bold text-md text-gray-600">アミール</p>
            <p className="">
              こんにちは! 元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは! 元気だよー!
              こんにちは! 元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!元気だよー!こんにちは!
              元気だよー!こんにちは! 元気だよー!こんにちは! 元気だよー!
            </p>
          </div>
        </div>
        <div className="flex items-end justify-end ">
          <div className="max-w-[80%] !right-0 py-4 px-4 rounded-3xl bg-spotifyGreen">
            <p className="font-bold text-md text-gray-600">アミール</p>
            <p className="w-auto">こんにちは! 元気?</p>
          </div>
        </div>
        <div className="flex items-end justify-end ">
          <div className="max-w-[80%] !right-0 py-3 px-4 rounded-3xl bg-spotifyGreen">
            <p className="font-bold text-md text-gray-600">アミール</p>
            <p className="w-auto">:)</p>
          </div>
        </div>

        <div className="flex items-start justify-start ">
          <div className="max-w-[80%] min-w-[35%] py-4 px-6 rounded-3xl bg-gray-200">
            <p className="font-bold text-md text-gray-600">エイジェイ</p>
            <p>元気!</p>
          </div>
        </div>
      </div>
{/* 
      <div className="mt-4 p-1 flex space-x-4 items-center focus:outline-black border border-outlineGray bg-white rounded-3xl">
        <input
          type="text"
          placeholder="Message..."
          className="w-full h-auto max-h-[20vh] focus:outline-transparent bg-white rounded-3xl p-2"
        />

        <CustomButton
        onClick={() => console.log('clicked')}
        />
      </div> */}
      <SendMessageForm />
    </>
  );
};

export default ConversationDetail;
