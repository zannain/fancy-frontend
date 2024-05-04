
export type ProductRecords = Record<string, Product>
export type ProductImageRecords = Record<string, ProductImage>
export type InventoryRecords = Record<string, Inventory>


export type Inventory = {
    product_id: string
    sku: string
    color: string
    size: string | number | null
    list_price: number
    discount: number | null
    discount_percentage: number | null
    sale_price: number
    sold: number
    stock: number
}

export type Product = {
    product_id: string
    name: string
    description: string
    category: string
    collection: string
    created_at: string
}

export type ProductImage = {
    product_id: string
    color: string,
    image_url: string
}
let productRecords: ProductRecords = {}
let inventoryRecords: InventoryRecords = {}
let productImageRecords: ProductImageRecords = {}

const productAPI = {

    async addProduct(product: Product): Promise<void> {
        productRecords[product.product_id] = product
    },
    async getProducts(): Promise<Product[]> {
        return Object.values(productRecords);
    }

}

const productImageAPI = {
    async addProductImage(image: ProductImage): Promise<void> {
        productImageRecords[image.product_id] = image
    },
    async get(id: string): Promise<ProductImage> {
        return productImageRecords[id]
    },
    async getAll(): Promise<ProductImageRecords> {
        return productImageRecords
    }


}

const inventoryAPI = {
    addToInventory(item: Inventory): void {
        inventoryRecords[item.product_id] = item
    }
}


export { productAPI, productImageAPI, inventoryAPI}