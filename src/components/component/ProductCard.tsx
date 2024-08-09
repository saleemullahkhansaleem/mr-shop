import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { RightIcon, Star } from "../icons";
import { Separator } from "../ui/separator";
import Link from "next/link";

export type ProductProp = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

type ProductCardProps = {
  product: ProductProp;
};

const calcReviews = (reviews: [], rating: number) =>
  Math.round(
    (reviews.filter((item: { rating: number }) => item.rating === rating)
      .length /
      reviews.length) *
      100
  );

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-background rounded-lg shadow-sm hover:shadow-lg border border-transparent hover:border-border overflow-hidden">
      <Link href="">
        <img
          src={product.thumbnail}
          width={400}
          height={400}
          alt="Product Image"
          className="w-full h-48 object-cover aspect-square bg-background"
        />
      </Link>
      <div className="p-4">
        <Link href="" className="truncate block" title={product.title}>
          {product.title}
        </Link>
        <HoverCard>
          <HoverCardTrigger>
            <div className="flex items-center my-2">
              <Star
                className="w-4 h-4 text-yellow-500 me-1"
                fill="currentColor"
              />
              <div className="ms-1 text-sm font-bold text-primary hover:underline cursor-default">
                {product.rating}{" "}
                <span className="text-sm font-light text-muted-foreground">
                  ({product.reviews.length})
                </span>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <ReviewCard ratting={product.rating} reviews={product.reviews} />
          </HoverCardContent>
        </HoverCard>
        <div className="text-primary text-xl font-medium mb-4">
          <span className="text-sm align-top">$</span>
          {product.price.toFixed(2)}{" "}
          <Badge variant="outline" className="text-muted-foreground">
            -{product.discountPercentage}%
          </Badge>
        </div>
        <Button size="sm" className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;

function ReviewCard({ ratting, reviews }: any) {
  return (
    <>
      <div className="flex items-center mb-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <Star
            key={item}
            className="w-4 h-4 text-yellow-500 me-1"
            fill={item <= Math.round(ratting) ? "currentColor" : "none"}
            stroke="currentColor"
          />
        ))}
        <p className="ms-1 font-medium">{ratting} out of 5</p>
      </div>
      <p className="text-sm font-medium text-muted-foreground">
        {reviews.length} global ratings
      </p>
      {[5, 4, 3, 2, 1].map((item) => (
        <div className="flex items-center mt-4" key={item}>
          <p className="text-sm font-medium text-primary whitespace-nowrap">{item} star</p>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
            <div
              className="h-5 bg-yellow-500 rounded"
              style={{ width: `${calcReviews(reviews, item)}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {calcReviews(reviews, item)} %
          </span>
        </div>
      ))}
      <Separator className="my-4" />
      <div className="text-center">
        <Link
          href="/"
          className="text-sm font-light text-muted-foreground hover:text-primary flex items-center justify-center gap-2"
        >
          <span>See customer reviews </span> <RightIcon className="w-4 h-4" />
        </Link>
      </div>
    </>
  );
}
