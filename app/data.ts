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
export type Collection = {
    collection_id: string,
    name: string,
    description: string
    image_url: string
    created_at: string
}
export type Product = {
    product_id: string
    name: string
    description: string
    colors: string[],
    category: ProductCategory
    collection: string
    created_at: string,
    images: ProductImage[],
    inventory: Inventory[],

}
export type ProductImage = {
    product_id: string
    color: string,
    image_url: string
}

export type ProductCategory = {
    category_id: string
    name: ProductCategoryEnum
    created_at: string
}
enum ProductCategoryEnum {
    MEN = "Men",
    WOMEN = "Women",
    UNISEX= "Unisex"
}

