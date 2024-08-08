import React from 'react'
import { Button } from '../ui/button'

function ProductCard() {
    return (
        <div className="bg-background rounded-lg shadow-sm overflow-hidden">
            <img
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="Product Image"
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Cozy Knit Sweater</h3>
                <p className="text-primary font-medium mb-4">$49.99</p>
                <Button className="w-full">Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductCard