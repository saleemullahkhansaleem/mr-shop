import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function AdminSettingPage() {
  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <Card>
            <CardHeader>
              <CardTitle>General</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="store-name">Store Name</Label>
                <Input id="store-name" defaultValue="Acme Inc" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="store-description">Store Description</Label>
                <Textarea
                  id="store-description"
                  defaultValue="Welcome to Acme Inc, your one-stop shop for all your ecommerce needs."
                  rows={3}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="store-logo">Store Logo</Label>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="64"
                    height="64"
                    alt="Store Logo"
                    className="rounded-md"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <Button variant="outline">Upload</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </section>
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Payment</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="payment-gateway">Payment Gateway</Label>
                <Select name="payment-gateway" defaultValue="stripe">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select payment gateway" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stripe">Stripe</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="braintree">Braintree</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="payment-currency">Currency</Label>
                <Select name="payment-currency" defaultValue="usd">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="payment-fees">Payment Fees</Label>
                <div className="flex items-center gap-2">
                  <Input id="payment-fees" type="number" defaultValue="2.9" />
                  <span>%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </section>
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Shipping</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="shipping-provider">Shipping Provider</Label>
                <Select name="shipping-provider" defaultValue="fedex">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select shipping provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fedex">FedEx</SelectItem>
                    <SelectItem value="ups">UPS</SelectItem>
                    <SelectItem value="usps">USPS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="shipping-rates">Shipping Rates</Label>
                <div className="flex items-center gap-2">
                  <Input id="shipping-rates" type="number" defaultValue="5" />
                  <span>$</span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="free-shipping-threshold">
                  Free Shipping Threshold
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="free-shipping-threshold"
                    type="number"
                    defaultValue="50"
                  />
                  <span>$</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </section>
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="user-roles">User Roles</Label>
                <Select name="user-roles" defaultValue="admin">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select user role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="customer">Customer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="user-permissions">User Permissions</Label>
                <div>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox value="create-products" />
                      Create Products
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox value="edit-products" />
                      Edit Products
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox value="delete-products" />
                      Delete Products
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox value="manage-orders" />
                      Manage Orders
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox value="view-analytics" />
                      View Analytics
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
}
