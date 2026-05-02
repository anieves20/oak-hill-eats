export type MenuItem = {
  name: string;
  price?: string;
  priceRoll?: string;
  priceSub?: string;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle?: string;
  twoCol?: { rollLabel: string; subLabel: string };
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    subtitle: "Served all day. The morning classics.",
    items: [
      { name: "Buttered Roll", price: "1.99" },
      { name: "Buttered Roll with Jam", price: "2.99" },
      { name: "Egg & Cheese on Roll", price: "3.50" },
      { name: "Bacon, Egg & Cheese on Roll", price: "4.99" },
      { name: "Sausage, Egg & Cheese on Roll", price: "5.99" },
      { name: "Ham, Egg & Cheese on Roll", price: "5.99" },
      { name: "Pork Roll, Egg & Cheese on Roll", price: "5.99" },
      { name: "Pork Roll (4 slices) & Cheese on Roll", price: "6.99" },
      { name: "Chorizo & Ham", price: "7.99" },
      { name: "French Fries", price: "3.99" },
      { name: "Chicken Tenders", price: "5.99" },
      { name: "Quesillo (add extra)", price: "1.50" },
      { name: "Avocado", price: "Market" },
    ],
  },
  {
    id: "lunch",
    title: "Lunch or Dinner",
    subtitle: "On a roll or as a sub — your call.",
    twoCol: { rollLabel: "Roll", subLabel: "Sub" },
    items: [
      { name: "California Chicken", priceRoll: "7.99", priceSub: "10.99" },
      { name: "Grilled Chicken", priceRoll: "7.99", priceSub: "10.99" },
      { name: "Chicken Fajita", priceRoll: "—", priceSub: "10.99" },
      { name: "Chicken Fajita (Wrap)", priceRoll: "—", priceSub: "11.99" },
      { name: "Turkey Club", priceRoll: "8.99", priceSub: "11.99" },
      { name: "BLT", priceRoll: "7.99", priceSub: "10.99" },
      { name: "Cheese Steak Plain", priceRoll: "—", priceSub: "7.99" },
      { name: "Cheese Steak w/ Pep, Onion, Mushroom", priceRoll: "—", priceSub: "10.99" },
      { name: "California Cheese Burger L,T,O", priceRoll: "—", priceSub: "10.99" },
      { name: "Chicken Burrito", price: "11.99" },
      { name: "Steak Burrito", price: "11.99" },
    ],
  },
  {
    id: "tacos",
    title: "Tacos",
    subtitle: "Hecho con amor.",
    items: [
      { name: "Steak / Carne Asada", price: "12.99" },
      { name: "Chicken / Pollo", price: "11.99" },
      { name: "Tacos al Pastor / Marinated Pork w/ Pineapple", price: "12.99" },
    ],
  },
  {
    id: "antojitos",
    title: "Antojitos",
    subtitle: "Little cravings.",
    items: [
      { name: "Nameras / Huaraches (add 2.00 for meat)", price: "12.99" },
      { name: "Esquites", price: "5.99" },
      { name: "Elotes", price: "4.50" },
      { name: "Chicharrón Preparado", price: "7.99" },
    ],
  },
  {
    id: "coldcuts",
    title: "Boar's Head Deli Cold Cuts",
    subtitle: "Sliced fresh to order.",
    twoCol: { rollLabel: "Roll", subLabel: "Sub" },
    items: [
      { name: "Cold Cuts — Ham $8.99, Chicken $9.99, Turkey $10.99, Oven Gold Turkey $10.99 & Salami $9.99", note: "Build your own — pricing per cut" },
      { name: "Firesmith Grilled Chicken", priceRoll: "9.99", priceSub: "—" },
      { name: "Blazing Buffalo Chicken", priceRoll: "9.99", priceSub: "—" },
      { name: "Fud Ham", priceRoll: "5.99", priceSub: "—" },
      { name: "Heads Cheese / Queso de Puerco", priceRoll: "6.99", priceSub: "—" },
      { name: "Turkey & Cheese", priceRoll: "7.99", priceSub: "9.99" },
      { name: "Ham & Cheese", priceRoll: "7.99", priceSub: "9.99" },
      { name: "Salami & Cheese", priceRoll: "7.99", priceSub: "9.99" },
      { name: "Italian", priceRoll: "7.99", priceSub: "10.99" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks & Aguas Frescas",
    subtitle: "Sandía, melón, piña, pepino-limón.",
    items: [
      { name: "Aguas Frescas — Small", price: "2.99" },
      { name: "Aguas Frescas — Large", price: "4.99" },
      { name: "Milk Shakes / Liquados (Strawberry, Banana, Papaya)", price: "Mkt" },
      { name: "Frozen / Mangonadas (Mango, Piña)", price: "6.99" },
    ],
  },
];