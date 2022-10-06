import { NextPage } from "next";
import Link from "next/link";
import {
  NFTCardBody,
  NFTCardBtn,
  NFTCardBtnContainer,
  NFTCardContainer,
  NFTCardTitle,
  NFTImageContainer,
} from "./NFTCard.style";

type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const NFTCard: NextPage<Props> = ({ id, title, description, image }) => {
  return (
    <NFTCardContainer>
      <NFTImageContainer>
        <img src={image} alt={title} />
      </NFTImageContainer>
      <NFTCardBody>
        <NFTCardTitle>{title}</NFTCardTitle>
        <p>{description}</p>
        <NFTCardBtnContainer>
          <NFTCardBtn>
            <Link href={`/nft/${id}`}>Explore</Link>
          </NFTCardBtn>
        </NFTCardBtnContainer>
      </NFTCardBody>
    </NFTCardContainer>
  );
};

export default NFTCard;
