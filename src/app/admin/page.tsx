import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDownIcon, DollarSignIcon, UsersIcon } from "lucide-react";
export default function Dashboard() {
  return (
    <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-6">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Total Sales</CardTitle>
          <DollarSignIcon className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$125,234</div>
          <p className="text-sm text-muted-foreground">+12% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>New Customers</CardTitle>
          <UsersIcon className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">1,234</div>
          <p className="text-sm text-muted-foreground">+5% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Average Order Value</CardTitle>
          <DollarSignIcon className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$75</div>
          <p className="text-sm text-muted-foreground">+3% from last month</p>
        </CardContent>
      </Card>
      <Card className="sm:col-span-2 md:col-span-3">
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Top Selling Products</CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowUpDownIcon className="h-4 w-4" />
            Sort
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src="/placeholder.svg"
                      width="48"
                      height="48"
                      alt="Product Image"
                      className="rounded-md"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-medium">Acme Headphones</div>
                      <div className="text-sm text-muted-foreground">
                        Wireless Bluetooth Headphones
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>1,234</TableCell>
                <TableCell>$45,678</TableCell>
                <TableCell>
                  <Badge variant="secondary">In Stock</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src="/placeholder.svg"
                      width="48"
                      height="48"
                      alt="Product Image"
                      className="rounded-md"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-medium">Acme Smartwatch</div>
                      <div className="text-sm text-muted-foreground">
                        Advanced Fitness Tracking
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>987</TableCell>
                <TableCell>$32,456</TableCell>
                <TableCell>
                  <Badge variant="secondary">In Stock</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src="/placeholder.svg"
                      width="48"
                      height="48"
                      alt="Product Image"
                      className="rounded-md"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-medium">Acme Fitness Tracker</div>
                      <div className="text-sm text-muted-foreground">
                        Advanced Activity Tracking
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>789</TableCell>
                <TableCell>$27,345</TableCell>
                <TableCell>
                  <Badge variant="secondary">In Stock</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="sm:col-span-2 md:col-span-3">
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Recent Orders</CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowUpDownIcon className="h-4 w-4" />
            Sort
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Link href="#" className="font-medium" prefetch={false}>
                    #12345
                  </Link>
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>2023-04-15</TableCell>
                <TableCell>
                  <Badge variant="secondary">Fulfilled</Badge>
                </TableCell>
                <TableCell>$125.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link href="#" className="font-medium" prefetch={false}>
                    #12346
                  </Link>
                </TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>2023-04-14</TableCell>
                <TableCell>
                  <Badge variant="outline">Pending</Badge>
                </TableCell>
                <TableCell>$75.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link href="#" className="font-medium" prefetch={false}>
                    #12347
                  </Link>
                </TableCell>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>2023-04-13</TableCell>
                <TableCell>
                  <Badge variant="outline">Pending</Badge>
                </TableCell>
                <TableCell>$50.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link href="#" className="font-medium" prefetch={false}>
                    #12348
                  </Link>
                </TableCell>
                <TableCell>Sarah Lee</TableCell>
                <TableCell>2023-04-12</TableCell>
                <TableCell>
                  <Badge variant="secondary">Fulfilled</Badge>
                </TableCell>
                <TableCell>$100.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
