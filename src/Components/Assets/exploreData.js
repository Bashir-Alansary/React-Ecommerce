import all_product from "./all_product";
import menImg from "./images/explore_men.png";
import womenImg from "./images/explore_women.png";
import kidsImg from "./images/explore_kids.png";
import bcImg1 from "./images/explore_bc_img1.svg";
import bcImg2 from "./images/explore_bc_img2.svg";
import bcImg3 from "./images/explore_bc_img3.svg";

const menItemsLength = all_product.filter(item => item.category === "Men").length;
const womenItemsLength = all_product.filter(item => item.category === "Women").length;
const KidsItemsLength = all_product.filter(item => item.category === "Kids").length;

export const exploreData = [
    {
        id:1,
        name:"Men categories",
        path: "/men",
        img: menImg,
        bcImg: bcImg1,
        num: menItemsLength,
    },
    {
        id:2,
        name:"Women categories",
        path: "/women",
        img:womenImg,
        bcImg: bcImg2,
        num: womenItemsLength,
    },
    {
        id:3,
        name:"Kids categories",
        path: "/kids",
        img: kidsImg,
        bcImg: bcImg3,
        num: KidsItemsLength,
    }
]