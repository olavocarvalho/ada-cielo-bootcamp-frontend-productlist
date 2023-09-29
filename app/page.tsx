import { getProducts } from "@/actions/get-products";
import { Navbar } from "@/components/navbar";
import ProductList from "@/components/product-list";
import Sidebar from "@/components/sidebar";
import { ProductCard } from "@/components/ui/product-card";

export default async function Home() {
  const productList = await getProducts();

  return (
    <div className="block">
      <Navbar />
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5 mt-16">
            <Sidebar />
            <div className="col-span-3 lg:col-span-4 lg:border-l p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                <ProductList products={productList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
