import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-dvh text-4xl flex flex-col gap-4">
      <h1 className="font-bold mx-auto underline">Contact us page</h1>
      <form className="mx-auto space-y-4 max-w-3xl">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
        />
        <textarea
          placeholder="Message"
          rows="6"
          className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
        ></textarea>
        <button
          type="button"
          className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
        >
          Send
        </button>
      </form>
      <button className="search-btn p-2 text-[1.4rem]  divide-solid   font-bold border-[2px] border-[solid] border-[rgb(9,63,201)] cursor-pointer [transition:all_500ms] bg-transparent hover:[box-shadow:10px_10px_2px_1px_rgba(0,_30,_255,_0.244)] hover:scale-105 hover:bg-[rgba(0,_30,_255,_0.244)] min-w-20 basis-1/3">
        <a href="https://x.com/AnupamBoral399">My Twitter(X)</a>
      </button>

      <button className="search-btn p-2 text-[1.4rem]  divide-solid   font-bold border-[2px] border-[solid] border-[rgb(9,63,201)] cursor-pointer [transition:all_500ms] bg-transparent hover:[box-shadow:10px_10px_2px_1px_rgba(0,_30,_255,_0.244)] hover:scale-105 hover:bg-[rgba(0,_30,_255,_0.244)] w-30">
        <a href="https://www.linkedin.com/in/anupam-boral/">My linkedin</a>
      </button>
    </div>
  );
};

export default Contact;
