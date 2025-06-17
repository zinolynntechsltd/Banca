"use client";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eeb05e] to-[#F7EBD1] font-[family-name:var(--font-geist-sans)] ">
      <div className="flex justify-center ">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center bg-white rounded-2xl shadow-md px-4 md:px-6 py-3 w-full max-w-[1000px] mt-6 md:mt-10 gap-4 mx-2">
          <Image
            src="/banca.png"
            alt="Banca logo"
            width={38}
            height={38}
            className="w-12 h-8 sm:w-19 sm:h-13 object-fill"
          />
          <div className="flex flex-wrap md:flex-nowrap gap-2 sm:gap-4 md:gap-6 justify-center md:justify-start">
            <button className="bg-transparent text-black font-semibold hover:underline text-sm sm:text-base">
              Home
            </button>
            <button className="bg-transparent text-black font-semibold hover:underline text-sm sm:text-base">
              Features
            </button>
            <button className="bg-transparent text-black font-semibold hover:underline text-sm sm:text-base">
              Pricing
            </button>
            <button className="bg-transparent text-black font-semibold hover:underline text-sm sm:text-base">
              Help
            </button>
          </div>
          {/* Desktop login buttons */}
          <div className="hidden md:flex gap-4">
            <button className="bg-transparent text-[#eeb05e] font-bold">
              Login
            </button>
            <button className="bg-[#eeb05e] rounded-2xl font-semibold px-4 py-2 text-black">
              Join Borderless
            </button>
          </div>
          <div className="relative md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-black"
            >
              <MoreVertical size={24} />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
                <button className="block w-full text-left px-4 py-2 text-[#F7EBD1] font-bold hover:bg-gray-100">
                  Login
                </button>
                <button className="block w-full text-left px-4 py-2 text-white bg-black rounded-b-lg hover:opacity-90">
                  Join Borderless
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col justify-between mt-20 max-w-[600px] text-center">
          <h1 className="text-6xl text-black font-bold ">
            Global USD Banking <span className="text-black">made easy</span>
          </h1>
          <p className="text-lg text-black">
            Open a US-based dollar account in your name to receive USD payments.
          </p>
        </div>
        <div className="flex gap-3 mt-5">
          <button>
            <Image
              src="/Google Play.svg" // Replace with your actual path
              alt="Download on the App Store"
              width={150}
              height={50}
              className="object-contain"
            />
          </button>
          <button>
            <Image
              src="/App Store.svg" // Replace with your actual path
              alt="Get it on Google Play"
              width={150}
              height={50}
              className="object-contain"
            />
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-30 w-full ">
          <div className="bg-[#F7EBD1] flex flex-col w-[350px] h-[600px] shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-2xl mt-6">
            <Image
              src="/Salary Received.avif" // Replace with your actual path
              alt="Smart USD Banking"
              width={350}
              height={640}
              className="object-cover"
            />
            <div className="flex flex-col space-y-2 px-2">
              <h2 className="text-2xl font-bold text-black">
                Smart USD Banking
              </h2>
              <p className="text-black">
                A Banca US-based account in your name to receive USD
                payments-even as non US resident
              </p>
            </div>
          </div>
          <div className="bg-[#F7EBD1] flex flex-col w-[350px] h-[600px] shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-2xl mt-6">
            <Image
              src="/USD to NGN transfer.avif" // Replace with your actual path
              alt="Instantly convert currencies"
              width={350}
              height={640}
              className="object-cover"
            />
            <div className="flex flex-col space-y-2 px-2">
              <h2 className="text-2xl font-bold text-black">
                Instantly convert currencies
              </h2>
              <p className="text-black">
                Convert your USD to local currency whenever you want and payout
                to your local bank account
              </p>
            </div>
          </div>
          <div className="bg-[#F7EBD1] flex flex-col w-[350px] h-[600px] shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-2xl mt-6">
            <Image
              src="/Online Payment.avif" // Replace with your actual path
              alt="Online payment"
              width={350}
              height={640}
              className="object-cover"
            />
            <div className="flex flex-col space-y-2 px-2">
              <h2 className="text-2xl text-black font-bold ">
                Make online payment
              </h2>
              <p className="text-black">
                Instantly create a virtual USD card that you can rely on for
                online payments anytime and anyday
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex flex-wrap gap-10 justify-between px-10 mt-10 pt-10">
        <div className="flex-1 flex justify-center items-center">
          {" "}
          <Image
            src="/Mockup.svg" // Replace with your actual path
            alt="Mockup"
            width={300}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-start pt-6">
          <div className="bg-[#F7EBD1] w-fit rounded-md">
            <h4 className="text-[#c79220] p-2">Start receiving money</h4>
          </div>
          <h2 className="text-5xl font-bold max-w-150 text-black">
            Just download our app and start receiving payment globally from
            around the world in three minutes tops
          </h2>
          <p className="w-fit text-black">
            Hey there freelancers! it is time for you globethrotters to start
            receiving money from around the world{" "}
          </p>
          <button className="bg-[#2E3539] p-4 text-white rounded-md w-fit">
            Send more
          </button>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex flex-wrap justify-between px-10  pt-10">
        <div className="flex-1  flex flex-col gap-2 min-w-150 pl-2 sm:pl-10 md:pl-20 pr-20">
          <div className="bg-[#F7EBD1] w-fit rounded-md">
            <h4 className="text-[#c79220] p-2">Frequently asked questions</h4>
          </div>
          <h2 className="text-5xl font-bold max-w-150 min-w-100 text-black">
            Got questions ? we got answers!
          </h2>
          <p className="max-w-150 min-w-100 text-black">
            Feel free to reach out to us if you have more questions for us
          </p>
          <button className="bg-[#2E3539] px-8 py-4 text-white rounded-md w-fit">
            Contact us
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between p-2">
            <p className="font-semibold text-lg text-black">
              What is borderless?
            </p>
            <Image
              src="/Vector.svg" // Replace with your actual path
              alt="Expand"
              width={15}
              height={15}
            />
          </div>
          <div className="flex justify-between p-2">
            <p className="font-semibold text-lg text-black">
              What do i need to sign up?
            </p>
            <Image
              src="/Vector.svg" // Replace with your actual path
              alt="Expand"
              width={15}
              height={15}
            />
          </div>
          <div className="flex justify-between p-2">
            <p className="font-semibold text-lg text-black">
              How fast is onboarding?
            </p>
            <Image
              src="/Vector.svg" // Replace with your actual path
              alt="Expand"
              width={15}
              height={15}
            />
          </div>
          <div className="flex justify-between p-2">
            <p className="font-semibold text-lg text-black">
              How many accounts can i create?
            </p>
            <Image
              src="/Vector.svg" // Replace with your actual path
              alt="Expand"
              width={15}
              height={15}
            />
          </div>
          <div className="flex justify-between p-2">
            <p className="font-semibold text-lg text-black">
              What tech stack do you support?
            </p>
            <Image
              src="/Vector.svg" // Replace with your actual path
              alt="Expand"
              width={15}
              height={15}
            />
          </div>
        </div>
      </div>
      <footer className="text-white bg-black py-15 flex flex-col gap-2">
        <h2 className="text-4xl font-bold text-center">
          Download the Banca App & get started now!
        </h2>
        <div className="flex justify-center gap-2">
          <button>
            <Image
              src="/playstore.avif" // Replace with your actual path
              alt="Download on the App Store"
              width={150}
              height={50}
              className="object-contain"
            />
          </button>
          <button>
            <Image
              src="/applestore.avif" // Replace with your actual path
              alt="Get it on Google Play"
              width={150}
              height={50}
              className="object-contain"
            />
          </button>
        </div>
      </footer>
    </div>
  );
}
