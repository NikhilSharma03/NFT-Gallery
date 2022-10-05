import { NextPage } from "next";
import { useRouter } from "next/router";

const NFT: NextPage = () => {
  const router = useRouter();
  const { id: nftID } = router.query;
  console.log(nftID);

  return <div>[id]</div>;
};

export default NFT;
