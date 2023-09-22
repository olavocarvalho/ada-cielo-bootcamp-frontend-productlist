import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { ProductCard } from "@/components/ui/product-card";
import { Product } from "@/types";

const productListDataDemo: Product[] = [
  {
    name: "Licensed Bronze Soap",
    avatar: "https://loremflickr.com/640/480?lock=1398074320617472",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    price: "134.00",
    rating: 1.2,
    category: "Shoes",
  },
  {
    name: "Bespoke Rubber Pants",
    avatar: "https://loremflickr.com/640/480?lock=5772969227845632",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    price: "187.00",
    rating: 1.6,
    category: "Baby",
  },
  {
    name: "Fantastic Concrete Hat",
    avatar: "https://picsum.photos/seed/64L1Tk/640/480",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    price: "178.00",
    rating: 2.3,
    category: "Outdoors",
  },
  {
    name: "Small Wooden Towels",
    avatar: "https://loremflickr.com/640/480?lock=4791240778317824",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    price: "154.00",
    rating: 4.3,
    category: "Electronics",
  },
  {
    name: "Generic Steel Car",
    avatar: "https://picsum.photos/seed/9oFGYSd/640/480",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: "162.00",
    rating: 2.2,
    category: "Sports",
  },
  {
    name: "Ergonomic Concrete Pizza",
    avatar: "https://picsum.photos/seed/l37Ue7bsr/640/480",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    price: "126.00",
    rating: 4.2,
    category: "Automotive",
  },
  {
    name: "Awesome Frozen Mouse",
    avatar: "https://picsum.photos/seed/WyZ0jMOor/640/480",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    price: "175.00",
    rating: 1.3,
    category: "Health",
  },
  {
    name: "Tasty Rubber Car",
    avatar: "https://loremflickr.com/640/480?lock=3547423790071808",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    price: "63.00",
    rating: 1.2,
    category: "Home",
  },
  {
    name: "Modern Concrete Sausages",
    avatar: "https://picsum.photos/seed/M2E2ardELZ/640/480",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    price: "21.00",
    rating: 2.1,
    category: "Automotive",
  },
  {
    name: "Tasty Concrete Car",
    avatar: "https://picsum.photos/seed/sA5i7iatH/640/480",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    price: "179.00",
    rating: 3.2,
    category: "Sports",
  },
  {
    name: "Handcrafted Bronze Gloves",
    avatar: "https://loremflickr.com/640/480?lock=7521773664862208",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    price: "186.00",
    rating: 2.3,
    category: "Movies",
  },
  {
    name: "Fantastic Concrete Soap",
    avatar: "https://picsum.photos/seed/05ODHmUp3/640/480",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    price: "66.00",
    rating: 1.8,
    category: "Home",
  },
];

export default function Home() {
  return (
    <div className="block">
      <Navbar />
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar />
            <div className="col-span-3 lg:col-span-4 lg:border-l p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {productListDataDemo.map((product) => (
                  <ProductCard
                    product={product}
                    key={`${product.name} ${product.price} `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
