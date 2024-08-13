"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { FilterIcon, MoveVerticalIcon, SearchIcon } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function AdminProductsPage() {
  interface Filters {
    category: string[];
    price: { min: number; max: number };
    inStock: boolean;
  }
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>({
    category: [],
    price: { min: 0, max: Infinity },
    inStock: false,
  });
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 99.99,
      inStock: 50,
      category: "electronics",
    },
    {
      id: 2,
      name: "Ergonomic Desk Chair",
      description: "Comfortable and adjustable office chair",
      price: 249.99,
      inStock: 20,
      category: "furniture",
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      description: "Powerful and compact Bluetooth speaker",
      price: 59.99,
      inStock: 100,
      category: "electronics",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      description: "High-precision gaming mouse with customizable buttons",
      price: 79.99,
      inStock: 30,
      category: "electronics",
    },
    {
      id: 5,
      name: "Smart Home Hub",
      description: "Centralized control for all your smart home devices",
      price: 99.99,
      inStock: 15,
      category: "outdoor",
    },
    {
      id: 6,
      name: "Fitness Tracker",
      description: "Advanced fitness tracker with heart rate monitoring",
      price: 79.99,
      inStock: 80,
      category: "furniture",
    },
    {
      id: 7,
      name: "Wireless Charging Pad",
      description: "Fast and convenient wireless charging for your devices",
      price: 39.99,
      inStock: 60,
      category: "electronics",
    },
    {
      id: 8,
      name: "Outdoor Camping Gear",
      description: "High-quality camping equipment for your outdoor adventures",
      price: 199.99,
      inStock: 25,
      category: "outdoor",
    },
  ];
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const priceMatch =
        product.price >= filters.price.min &&
        product.price <= filters.price.max;
      const inStockMatch = filters.inStock ? product.inStock > 0 : true;
      const categoryMatch =
        filters.category.length === 0 ||
        filters.category.includes(product.category);
      return nameMatch && priceMatch && inStockMatch && categoryMatch;
    });
  }, [search, filters]);
  const totalRevenue = filteredProducts.reduce(
    (total, product) => total + product.price * product.inStock,
    0
  );
  const bestSellingProduct = filteredProducts.reduce((best, product) => {
    return product.inStock > best.inStock ? product : best;
  }, filteredProducts[0]);
  const averageOrderValue =
    totalRevenue /
    filteredProducts.reduce((count, product) => count + product.inStock, 0);
  return (
    <div className="grid gap-6 p-4 md:p-6">
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>
              The total revenue generated from all products
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">${totalRevenue.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Best Selling Product</CardTitle>
            <CardDescription>
              The product with the highest number of units in stock
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bestSellingProduct?.name}</div>
            <div className="text-sm text-muted-foreground">
              {bestSellingProduct?.inStock} in stock
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Order Value</CardTitle>
            <CardDescription>
              The average value of each order placed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              ${averageOrderValue.toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg bg-background pl-8"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-10 gap-1">
                <FilterIcon className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Filter Products</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={filters.inStock}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({ ...prev, inStock: checked }))
                }
              >
                In Stock
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Price Range</DropdownMenuLabel>
              <div className="grid gap-2 p-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="min-price">Min Price</Label>
                  <Input
                    id="min-price"
                    type="number"
                    value={filters.price.min}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        price: { ...prev.price, min: Number(e.target.value) },
                      }))
                    }
                    className="w-24"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="max-price">Max Price</Label>
                  <Input
                    id="max-price"
                    type="number"
                    value={filters.price.max}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        price: { ...prev.price, max: Number(e.target.value) },
                      }))
                    }
                    className="w-24"
                  />
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Category</DropdownMenuLabel>
              <div className="grid gap-2 p-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.category.includes("electronics")}
                    onCheckedChange={(checked) =>
                      setFilters((prev) => ({
                        ...prev,
                        category: checked
                          ? [...prev.category, "electronics"]
                          : prev.category.filter((c) => c !== "electronics"),
                      }))
                    }
                  />
                  Electronics
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.category.includes("furniture")}
                    onCheckedChange={(checked) =>
                      setFilters((prev) => ({
                        ...prev,
                        category: checked
                          ? [...prev.category, "furniture"]
                          : prev.category.filter((c) => c !== "furniture"),
                      }))
                    }
                  />
                  Furniture
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.category.includes("outdoor")}
                    onCheckedChange={(checked) =>
                      setFilters((prev) => ({
                        ...prev,
                        category: checked
                          ? [...prev.category, "outdoor"]
                          : prev.category.filter((c) => c !== "outdoor"),
                      }))
                    }
                  />
                  Outdoor
                </Label>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Card>
          <CardHeader className="flex-row justify-between">
            <CardTitle>Products</CardTitle>
            <CardDescription>
              <Button size="sm">Add Product</Button>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>In Stock</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.inStock}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoveVerticalIcon className="h-4 w-4" />
                            <span className="sr-only">Product actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-6 flex justify-end">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
