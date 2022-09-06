import React, { useState} from 'react'
import Products from './Products'

const ProductData = () => {
    const laptops = [
        {
            title: "Acer 15.6 Touchscreen Chromebook with Chrome OS - Intel Processor - 4GB RAM - 64GB Flash Storage",
            price: 169.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_2879aee2-051b-440a-9b45-78c8f358829e"
        },
        {
            title: "Lenovo 14 Chromebook Laptop with Chrome OS - Intel Processor - 4GB RAM - 64GB Flash Storage",
            price: 129.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_27aa61b8-b833-423f-9560-d49b6fb9fe3d",
        },
        {
            title: "HP 14 Laptop with Windows S mode - AMD Processor - 4GB RAM Memory - 64GB Flash Storage",
            price: 249.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_c677abd3-8bdf-4090-ab1d-59d8c618a74a"
        },
        {
            title: "HP 14 Laptop with Windows Home in S Mode - Intel Pentium Processor - 4GB RAM Memory - 128GB SSD Storage - Black",
            price: 219.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_8ade11be-ddf8-4ea7-aac9-40ead6e0cc8b"
        },
        {
            title: "HP Victus 15.6 144Hz FHD Gaming Laptop - Intel Core i5-12450H, 16GB RAM, 512GB SSD, Nvidia RTX 3050 Silver",
            price: 859.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_debb64c5-2b82-46aa-9d61-3fa5ed3de07f"
        },
        {
            title: "HP 15.6 Laptop with Windows Home in S Mode Intel Pentium Processor - 8GB RAM - 256GB SSD Storage Blue",
            price: 269.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_3bb8b683-f0a7-4b7e-8207-ea716a72f41d"
        }
    ]
    
    const mouse = [
        {
            title: "Logitech Mouse (M185) - Blue",
            price: 16.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_bbf82286-6d9a-40f0-b6fe-669368ca7fa8"
        },
        {
            title: "Logitech M317 Mouse - Blue Aurora",
            price: 19.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_b051a763-bd93-4e7f-a7c9-dbc5dc69628b"
        },
        {
            title: "Logitech Mouse (M317) - Forest Floral",
            price: 14.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_25ddf23e-6c7f-4df5-85a3-cd342a638d3c"
        },
        {
            title: "Logitech M317C Mouse - Bamboo Dream",
            price: 20.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_98983a42-e07b-4127-8610-0729a26865c4"
        },
        {
            title: "Logitech Pebble Bluetooth Mouse M350 - Flora",
            price: 29.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_021917bb-d99c-4179-be26-01340213d837"
        },
        {
            title: "Logitech G203 Gaming Mouse - Black (910-005790)",
            price: 29.99,
            image: "https://target.scene7.com/is/image/Target/GUEST_c03715da-bb93-4306-8ae4-19947b2ffeae"
        }
    ]

    return (
        <div>
            <Products laptops={laptops} mouse={mouse} />
        </div>
    )
}

export default ProductData