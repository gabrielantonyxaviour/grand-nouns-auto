import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";
import { Button } from "./ui/button";
import { useAccount } from "wagmi";
import { decodeAbiParameters } from "viem";
import { useEnvironmentContext } from "./context";

const unpack = (
  proof: `0x${string}`
): readonly [
  bigint,
  bigint,
  bigint,
  bigint,
  bigint,
  bigint,
  bigint,
  bigint
] => {
  return decodeAbiParameters([{ type: "uint256[8]" }], proof)[0];
};
export default function WorldcoinComponent() {
  const { address } = useAccount();
  const { setWorldcoinData } = useEnvironmentContext();
  return (
    <IDKitWidget
      app_id="app_staging_6a46ec962844b9aeb67516b5b2f05ad5" // obtained from the Developer Portal
      action="verify-humanness" // obtained from the Developer Portal
      onSuccess={(result: ISuccessResult) => {
        setWorldcoinData({
          merkleRoot: result.merkle_root,
          nullifierHash: result.nullifier_hash,
          proof: unpack((result as any).proof),
        });
      }} // callback when the modal is closed
      handleVerify={() => {}} // callback when the proof is received
      signal={address}
      verification_level={VerificationLevel.Orb}
    >
      {({ open }) => (
        // This is the button that will open the IDKit modal
        <>
          <Button variant={"secondary"} onClick={open}>
            Prove you are a Human
          </Button>
          <p>
            Note: The in game milestones/progress is attested to your proof of
            Humanity. Humanness.
          </p>
        </>
      )}
    </IDKitWidget>
  );
}