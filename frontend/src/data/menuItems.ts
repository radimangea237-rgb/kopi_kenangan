import type { MenuItem } from "@/types";

export const coffeeMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Espresso",
    description:
      "Shot kopi pekat dengan crema halus, cocok untuk pagi yang butuh energi instan.",
    price: "Rp 25.000",
    img: "/espresso-img1.jpg",
  },
  {
    id: 2,
    name: "Americano",
    description:
      "Kopi hitam yang lembut dan elegan, diseduh dengan air panas untuk rasa seimbang.",
    price: "Rp 28.000",
    img: "/americano.jpg",
  },
  {
    id: 3,
    name: "Cappuccino",
    description:
      "Perpaduan espresso, susu panas, dan busa krim; pilihan favorit bagi pecinta kopi klasik.",
    price: "Rp 32.000",
    img: "/cappuccino.png",
  },
  {
    id: 4,
    name: "Latte",
    description:
      "Kopi lembut dengan sentuhan susu, hasilkan rasa creamy dan pengalaman hangat yang nyaman.",
    price: "Rp 34.000",
    img: "/latte.jpg",
  },
];
