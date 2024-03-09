import img1 from "./images/item1.jpg"
import img1_1 from "./images/item1_1.jpg"
import img1_2 from "./images/item1_2.jpg"
import img1_3 from "./images/item1_3.jpg"
import img1_4 from "./images/item1_4.jpg"
import img2 from "./images/item2.jpg"
import img2_1 from "./images/item2_1.jpg"
import img2_2 from "./images/item2_2.jpg"
import img2_3 from "./images/item2_3.jpg"
import img2_4 from "./images/item2_4.jpg"
import img3 from "./images/item3.jpg"
import img3_1 from "./images/item3_1.jpg"
import img3_2 from "./images/item3_2.jpg"
import img3_3 from "./images/item3_3.jpg"
import img3_4 from "./images/item3_4.jpg"
import img4 from "./images/item4.jpg"
import img4_1 from "./images/item4_1.jpg"
import img4_2 from "./images/item4_2.jpg"
import img4_3 from "./images/item4_3.jpg"
import img5 from "./images/item5.jpg"
import img6 from "./images/item6.jpg"
import img6_1 from "./images/item6_1.jpg"
import img6_2 from "./images/item6_2.jpg"
import img7 from "./images/item7.jpg"
import img8 from "./images/item8.jpg"
import img9 from "./images/item9.jpg"
import img10 from "./images/item10.jpg"
import img11 from "./images/item11.jpg"
import img12 from "./images/item12.jpg"
import img13 from "./images/item13.jpg"
import img14 from "./images/item14.jpg"
import img15 from "./images/item15.jpg"
import img16 from "./images/item16.jpg"
import img17 from "./images/item17.jpg"
import img18 from "./images/item18.jpg"
import img19 from "./images/item19.jpg"
import img20 from "./images/item20.jpg"
import img21 from "./images/item21.jpg"
import img22 from "./images/item22.jpg"
import img23 from "./images/item23.jpg"
import img24 from "./images/item24.jpg"
import img25 from "./images/item25.jpg"
import img26 from "./images/item26.jpg"
import img27 from "./images/item27.jpg"
import img28 from "./images/item28.jpg"
import img29 from "./images/item29.jpg"
import img30 from "./images/item30.jpg"
import img31 from "./images/item31.jpg"
import img32 from "./images/item32.jpg"
import img33 from "./images/item33.jpg"
import img34 from "./images/item34.jpg"
import img35 from "./images/item35.jpg"
import img36 from "./images/item36.jpg"

let all_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve",
    category: "Men",
    img: img1,
    newPrice: "270.00",
    oldPrice: "300.00",
    imgs: [img1_1, img1_2, img1_3, img1_4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Jackets",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve",
    category: "women",
    img: img2,
    newPrice: "85.00",
    oldPrice: "90.00",
    imgs: [img2_1, img2_2, img2_3, img2_4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Brown",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve",
    category: "Men",
    img: img3,
    newPrice: "60.00",
    oldPrice: "65.50",
    imgs: [img3_1, img3_2, img3_3, img3_4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "T-Shirts",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve",
    category: "women",
    img: img4,
    newPrice: "70.00",
    oldPrice: "77.00",
    imgs: [img4_1, img4_2, img4_3],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "T-Shirts",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 5,
    name: "Striped Flutter Sleeve",
    category: "women",
    img: img5,
    newPrice: "82.50",
    oldPrice: "85.50",
    imgs: [img5, img6_1, img7, img8],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve",
    category: "Men",
    img: img6,
    newPrice: "40.00",
    oldPrice: "45.00",
    imgs: [img6_1, img6_2],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Jackets",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 7,
    name: "Striped Flutter Sleeve",
    category: "women",
    img: img7,
    newPrice: "95.00",
    oldPrice: "97.50",
    imgs: [img7, img8, img9, img10],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Red",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve",
    category: "women",
    img: img8,
    newPrice: "35.00",
    oldPrice: "37.50",
    imgs: [img8, img9, img10, img11],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve",
    category: "Men",
    img: img9,
    newPrice: "110.00",
    oldPrice: "113.50",
    imgs: [img9, img10, img11, img1],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "Shoeses",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve",
    category: "women",
    img:  img10,
    newPrice: "55.00",
    oldPrice: "58.50",
    imgs: [img10, img11, img5, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Shoeses",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve",
    category: "Women",
    img:  img11,
    newPrice: "81.00",
    oldPrice: "85.00",
    imgs: [img11, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Orange",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve",
    category: "Kids",
    img:  img12,
    newPrice: "150.00",
    oldPrice: "160.00",
    imgs: [img1, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "Outfits",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 13,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img13,
    newPrice: "64.00",
    oldPrice: "67.50",
    imgs: [img1, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 14,
    name: "Men Green Solid Zippered",
    category: "Kids",
    img: img14,
    newPrice: "88.00",
    oldPrice: "90.50",
    imgs: [img1, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    tags: ["boys", "clothes", "brands", "shirt"],
    color: "Brown",
    type: "Outfits",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 15,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img15,
    newPrice: "105.00",
    oldPrice: "110.50",
    imgs: [img15, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 16,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img16,
    newPrice: "140.00",
    oldPrice: "150.00",
    imgs: [img16, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 17,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img17,
    newPrice: "94.00",
    oldPrice: "96.50",
    imgs: [img17, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 18,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img18,
    newPrice: "135.00",
    oldPrice: "140.50",
    imgs: [img18, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 19,
    name: "Men Green Solid Zippered",
    category: "Men",
    img:  img19,
    newPrice: "84.00",
    oldPrice: "87.50",
    imgs: [img19, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 20,
    name: "Men Green Solid Zippered",
    category: "Men",
    img: img20,
    newPrice: "40.00",
    oldPrice: "42.00",
    imgs: [img20, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Others",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 21,
    name: "Men Green Solid Zippered",
    category: "Men",
    img:  img21,
    newPrice: "190.00",
    oldPrice: "200.00",
    imgs: [img21, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Green",
    type: "Jackets",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 22,
    name: "Men Green Solid Zippered",
    category: "Men",
    img:  img22,
    newPrice: "185.00",
    oldPrice: "190.00",
    imgs: [img22, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "T-Shirts",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 23,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img23,
    newPrice: "205.00",
    oldPrice: "215.00",
    imgs: [img23, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Pink",
    type: "Dresses",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 24,
    name: "Men Green Solid Zippered",
    category: "Women",
    img:  img24,
    newPrice: "105.00",
    oldPrice: "110.50",
    imgs: [img24, img2, img3, img4],
    sizes: ["L", "ML", "XL", "XXL"],
    color: "Blue",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked",
    category: "Kids",
    img:  img25,
    newPrice: "107.00",
    oldPrice: "110.00",
    imgs: [img25, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Outfits",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 26,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img:  img26,
    newPrice: "91.00",
    oldPrice: "98.00",
    imgs: [img26, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Brown",
    type: "T-Shirts",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img: img27,
    newPrice: "100.00",
    oldPrice: "102.50",
    imgs: [img27, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img: img28,
    newPrice: "215.00",
    oldPrice: "230.00",
    imgs: [img28, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Orange",
    type: "Shoeses",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 29,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img: img29,
    newPrice: "110.00",
    oldPrice: "120.50",
    imgs: [img29, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked",
    category: "Kids",
    img: img30,
    newPrice: "180.00",
    oldPrice: "190.50",
    imgs: [img30, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Brown",
    type: "Outfits",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img:  img31,
    newPrice: "104.00",
    oldPrice: "108.50",
    imgs: [img31, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Brown",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked",
    category: "women",
    img:  img32,
    newPrice: "88.00",
    oldPrice: "90.50",
    imgs: [img32, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Green",
    type: "Others",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked",
    category: "Men",
    img: img33,
    newPrice: "95.00",
    oldPrice: "100.50",
    imgs: [img33, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Blue",
    type: "Others",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked",
    category: "Kids",
    img:  img34,
    newPrice: "250.00",
    oldPrice: "270.00",
    imgs: [img34, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Outfits",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img:  img35,
    newPrice: 85.0,
    oldPrice: 120.5,
    imgs: [img35, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Brown",
    type: "Pants",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked",
    category: "Women",
    img:  img36,
    newPrice: "115.00",
    oldPrice: "120.50",
    imgs: [img36, img2, img3, img4],
    sizes: ["S", "M", "L", "ML"],
    color: "Pink",
    type: "Handbags",
    tags: ["boys", "clothes", "brands", "shirt"],
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
];

export default all_product;
