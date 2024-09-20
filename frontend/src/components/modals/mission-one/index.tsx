import Image from "next/image";

export default function SimpleSwapDescription() {
  return (
    <div>
      <div className="px-4">
        {" "}
        <p className="text-xs ">Mission One</p>
        <p className="text-xl font-semibold">Rizz up the 1inch Degen</p>
      </div>

      <div className="flex items-center bg-secondary px-4 my-3 py-2">
        <Image src={"/chars/1.png"} width={200} height={200} alt="1inch" />
        <p className="text-md mx-10">
          Hey Beta. Are you new here? Prove you are one of us. Here, take{" "}
          {"5 xDAI"} in Gnosis chain. Swap it to WETH with 0.1% slippage and
          show me your Aura.
        </p>
      </div>
      <div className="px-4">
        <p className="text-md font-semibold my-2">Quick Tips 💡</p>
        <div className="flex flex-col space-y-2 px-2">
          {" "}
          <li className="text-sm">
            You need to perform a Simple swap to convert 5 xDAI to it's Wrapped
            Ether with 0.1% slippage. Use 1inch Fusion or Classic.
          </li>
          <li className="text-sm">
            Choose the right token by clicking the token dropdown.
          </li>
          <li className="text-sm">
            Click on the Help button and tap on anything that you don't
            understand to get Nakamura's aid.
          </li>
        </div>
      </div>
    </div>
  );
}