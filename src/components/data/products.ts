export type Product = {
  id: number;
  title: string;
  img: string[];
  price: number;
  discount: number;
  rating: number;
  description: string;
};

export const Products: Product[] = [
  {
    id: 1,
    img: [
      "/products/product-1.webp",
      "/products/product-2.webp",
      "/products/product-3.webp",
    ],
    title: "Hoodie 1",
    price: 100,
    discount: 30,
    rating: 4.9,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium alias, saepe culpa voluptatibus mollitia dolore id modi fugit officiis ex a explicabo illum aspernatur, asperiores beatae laboriosam ea sunt."
  },
  {
    id: 2,
    img: [
      "/products/product-2.webp",
      "/products/product-1.webp",
      "/products/product-3.webp",
    ],
    title: "Hoodie 2",
    price: 200,
    discount: 0,
    rating: 3.8,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium alias, saepe culpa voluptatibus mollitia dolore id modi fugit officiis ex a explicabo illum aspernatur, asperiores beatae laboriosam ea sunt."
  },
  {
    id: 3,
    img: [
      "/products/product-1.webp",
      "/products/product-2.webp",
      "/products/product-3.webp",
    ],
    title: "Hoodie 3",
    price: 300,
    discount: 15,
    rating: 3.4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium alias, saepe culpa voluptatibus mollitia dolore id modi fugit officiis ex a explicabo illum aspernatur, asperiores beatae laboriosam ea sunt."
  },
  {
    id: 4,
    img: [
      "/products/product-2.webp",
      "/products/product-1.webp",
      "/products/product-3.webp",
    ],
    title: "Hoodie 4",
    price: 400,
    discount: 0,
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium alias, saepe culpa voluptatibus mollitia dolore id modi fugit officiis ex a explicabo illum aspernatur, asperiores beatae laboriosam ea sunt."
  },
  {
    id: 5,
    img: [
      "/products/product-1.webp",
      "/products/product-2.webp",
      "/products/product-3.webp",
    ],
    title: "Hoodie 5",
    price: 500,
    discount: 30,
    rating: 4.6,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium alias, saepe culpa voluptatibus mollitia dolore id modi fugit officiis ex a explicabo illum aspernatur, asperiores beatae laboriosam ea sunt."
  },
  {
    id: 6,
    img: [
      "/products/product-2.webp",
      "/products/product-1.webp",
      "/products/product-3.webp",
    ],
    title: "Hoodie 6",
    price: 600,
    discount: 0,
    rating: 4.1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium alias, saepe culpa voluptatibus mollitia dolore id modi fugit officiis ex a explicabo illum aspernatur, asperiores beatae laboriosam ea sunt."
  },
  {
    id: 7,
    img: [
      "/products/product-1.webp",
      "/products/product-2.webp",
      "/products/product-3.webp",
    ],
    title: "Hoodie 7",
    price: 700,
    discount: 10,
    rating: 4.2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium alias, saepe culpa voluptatibus mollitia dolore id modi fugit officiis ex a explicabo illum aspernatur, asperiores beatae laboriosam ea sunt."
  },
];
