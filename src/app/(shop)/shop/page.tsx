"use client";

import { useState, useMemo } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  category?: string; // Optional in case a product does not have a category
  featured?: boolean; // Optional in case a product does not have a featured flag
  date?: string; // Optional in case a product does not have a date
}

interface Filters {
  category: string[];
  price: { min: number; max: number };
  sort: "featured" | "low" | "high" | "newest";
}

export default function Component() {
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    category: [],
    price: { min: 0, max: 1000 },
    sort: "featured",
  });

  const handleFilterChange = (type: keyof Filters, value: any) => {
    if (type === "category") {
      setSelectedFilters((prev) => ({
        ...prev,
        category: prev.category.includes(value)
          ? prev.category.filter((item) => item !== value)
          : [...prev.category, value],
      }));
    } else if (type === "price") {
      setSelectedFilters((prev) => ({
        ...prev,
        price: value,
      }));
    } else if (type === "sort") {
      setSelectedFilters((prev) => ({
        ...prev,
        sort: value,
      }));
    }
  };

  const products: Product[] = [
    {
      id: 1,
      image: "/placeholder.svg",
      title: "Stylish Sunglasses",
      description: "UV protection",
      price: 29.99,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Leather Crossbody Bag",
      description: "Stylish and practical",
      price: 49.99,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Wireless Headphones",
      description: "High-quality sound",
      price: 79.99,
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "Classic Wristwatch",
      description: "Timeless design",
      price: 59.99,
    },
    {
      id: 5,
      image: "/placeholder.svg",
      title: "Comfy T-Shirt",
      description: "Soft and breathable",
      price: 19.99,
    },
    {
      id: 6,
      image: "/placeholder.svg",
      title: "Durable Backpack",
      description: "Perfect for travel",
      price: 69.99,
    },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (
          selectedFilters.category.length > 0 &&
          !selectedFilters.category.includes(product.category || "")
        ) {
          return false;
        }
        if (
          product.price < selectedFilters.price.min ||
          product.price > selectedFilters.price.max
        ) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        switch (selectedFilters.sort) {
          case "featured":
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
          case "low":
            return a.price - b.price;
          case "high":
            return b.price - a.price;
          case "newest":
            return (
              new Date(b.date || "").getTime() -
              new Date(a.date || "").getTime()
            );
          default:
            return 0;
        }
      });
  }, [selectedFilters]);

  return (
    <div className="container grid md:grid-cols-[250px_1fr] gap-8 p-4 md:p-8">
      <div className="bg-background rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid gap-6">
          <div>
            <h3 className="text-base font-medium mb-2">Category</h3>
            <div className="grid gap-2">
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={selectedFilters.category.includes("shoes")}
                  onCheckedChange={() =>
                    handleFilterChange("category", "shoes")
                  }
                />
                Shoes
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={selectedFilters.category.includes("bags")}
                  onCheckedChange={() => handleFilterChange("category", "bags")}
                />
                Bags
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={selectedFilters.category.includes("electronics")}
                  onCheckedChange={() =>
                    handleFilterChange("category", "electronics")
                  }
                />
                Electronics
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={selectedFilters.category.includes("apparel")}
                  onCheckedChange={() =>
                    handleFilterChange("category", "apparel")
                  }
                />
                Apparel
              </Label>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium mb-2">Price Range</h3>
            <div />
            <div className="flex justify-between text-sm text-muted-foreground">
              <Input
                type="number"
                value={selectedFilters.price.min}
                onChange={(e) =>
                  handleFilterChange("price", {
                    min: Number(e.target.value),
                    max: selectedFilters.price.max,
                  })
                }
                className="w-24"
              />
              <Input
                type="number"
                value={selectedFilters.price.max}
                onChange={(e) =>
                  handleFilterChange("price", {
                    min: selectedFilters.price.min,
                    max: Number(e.target.value),
                  })
                }
                className="w-24"
              />
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium mb-2">Sort By</h3>
            <RadioGroup
              value={selectedFilters.sort}
              onValueChange={(value) => handleFilterChange("sort", value)}
            >
              <div className="grid gap-2">
                <Label className="flex items-center gap-2">
                  <RadioGroupItem value="featured" />
                  Featured
                </Label>
                <Label className="flex items-center gap-2">
                  <RadioGroupItem value="newest" />
                  Newest
                </Label>
                <Label className="flex items-center gap-2">
                  <RadioGroupItem value="low" />
                  Price: Low to High
                </Label>
                <Label className="flex items-center gap-2">
                  <RadioGroupItem value="high" />
                  Price: High to Low
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-background rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-base font-semibold">
                  ${product.price.toFixed(2)}
                </span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
