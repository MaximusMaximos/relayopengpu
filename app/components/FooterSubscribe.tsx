"use client";

import { useState } from "react";
import SafeInput from "./SafeInput"; // your existing component

export default function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const subscribe = (e: any) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    const url =
      "https://network.us6.list-manage.com/subscribe/post-json?" +
      new URLSearchParams({
        u: "9ca8c44250832e3001ac4aaa8",
        id: "1e9492eb62",
        c: "callback",
        EMAIL: email,
        tags: "4060809",
        subscribe: "Subscribe",
        ["b_9ca8c44250832e3001ac4aaa8_1e9492eb62"]: "",
      });

    (window as any).callback = (response: any) => {
      if (response.result === "success") {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(response.msg || "An error occurred");
      }
    };

    const script = document.createElement("script");
    script.src = url.toString();
    document.body.appendChild(script);
  };

  return (
    <form onSubmit={subscribe} className="relative mt-4 w-full max-w-xs md:max-w-sm">
      
      {/* INPUT + BUTTON */}
      <div className="flex items-center bg-white/15 rounded-lg p-2 border border-white/10 w-full">
        <SafeInput
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-transparent outline-none text-white placeholder-white/60 px-2 text-xs"
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-gradient-to-r from-[#005DEA] to-[#00C6FF] 
                     font-semibold text-white hover:opacity-90 transition text-xs whitespace-nowrap"
        >
          {status === "loading" ? "…" : "Subscribe"}
        </button>
      </div>

      {/* STATUS MESSAGE */}
      <p className="text-[10px] text-white/45 mt-1">
        {status === "success" && "You're subscribed!"}
        {status === "error" && (
          <span className="text-red-300">{errorMsg}</span>
        )}
        {status === "idle" && "No spam. Updates only."}
      </p>
    </form>
  );
}
