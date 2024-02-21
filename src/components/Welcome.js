import React from "react";
import { useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import homeimg from "../assets/Designer__8_-removebg-preview (1).png";

const Welcome = () => {
  const [showInstallMetamaskMessage, setShowInstallMetamaskMessage] =
    useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  useEffect(() => {
    const connectButton = document.getElementById("connectWalletButton");
    if (connectButton) {
      connectButton.addEventListener("click", connectWallet);
    }
    return () => {
      if (connectButton) {
        connectButton.removeEventListener("click", connectWallet);
      }
    };
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.enable();
        if (accounts.length > 0) {
          setWalletConnected(true);
        } else {
          setWalletConnected(false);
        }
        console.log("Wallet connected");
      } catch (error) {
        console.error("Failed to connect wallet:", error);
        setWalletConnected(false);
      }
    } else {
      setShowInstallMetamaskMessage(true);
      setWalletConnected(false);
    }
  };

  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font min-h-screen">
        <div class="container mx-auto flex px-10 py-12 md:flex-row flex-col items-center">
          <div class="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            {/* <img class="object-cover object-center rounded" alt="hero" src="https://www.linkpicture.com/q/49c669cb-55cc-4255-8a20-142c724a7012_1.jpeg"/> */}
            {/* <img class="object-cover object-center rounded" alt="hero" src="https://www.linkpicture.com/q/heart-2658206_1280.webp"/> */}
            <img
              class="object-cover object-center rounded mb-20"
              alt="hero"
              src={homeimg}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font text-5xl mb-10 font-medium text-purple-300 font-mono">
              GreenCrest Capital
            </h1>
            <p class="mb-3 leading-9 text-2xl text-purple-400 font-mono">
              Introducing "GreenCrest Capital", our blockchain-based DeFi
              platform that merges financial innovation with environmental and
              social impact. Experience transparent and accountable fund
              allocation through our smart contracts, empowering your
              investments to promote Green Job creation.
            </p>
            <p class="mb-5 leading-relaxed text-2xl text-purple-400 font-mono">
              Join us at Greencrest Capital, where financial growth meets a
              sustainable and socially responsible future.
            </p>
            <div class="flex justify-center">
              <button
                type="button"
                id="connectWalletButton"
                className="flex flex-row justify-center items-center my-2 bg-purple-700 p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                <AiFillPlayCircle className="text-white mr-2" />
                <p className="text-black font-semibold font-mono text-xl">
                  {walletConnected
                    ? "Wallet Already Connected"
                    : "Connect Wallet"}
                </p>
                {/* <p className="text-black font-semibold font-mono text-xl">
                  account={this.props.account}
                </p> */}
              </button>
              {showInstallMetamaskMessage && (
                <p className="text-red-500 text-xl mt-5 ml-4 font-mono">
                  Please install MetaMask wallet to connect.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
