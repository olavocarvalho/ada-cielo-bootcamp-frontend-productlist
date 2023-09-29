import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";

interface CartType {
  quantity: number;
}

export default function Cart({ quantity }: CartType) {
  return (
    <Button
      variant="outline"
      className="relative py-2 text-white mr-2"
      disabled
    >
      <div className="-top-[0.5rem] absolute -right-[0.5rem]">
        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
          {quantity}
        </p>
      </div>
      <ShoppingBagIcon width={20} height={20} />
    </Button>
  );
}
