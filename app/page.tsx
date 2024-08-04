import { Container } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { SortPopup } from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return <> 
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold" />
    </Container>
    <TopBar />
    
    <Container className="mt-10 pb-14">
      <div className="flex gap-[60px]">
        {/** Filters */}
        <div className="w-[250px]">
          <Filters />
        </div>

        {/** Items list */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductCard
              id={1}
              name="Пепперони фреш"
              price={500}
              imageUrl="https://media.dodostatic.net/image/r:584x584/11EEE204813D7DDB85018555332A9F46.avif" />
            {/* <ProductsGroupList title="Пиццы" items={{1, 2, 3, 4, 5}} />
            <ProductsGroupList title="Комбо" items={{1, 2, 3, 4, 5}} /> */}
          </div>
        </div>
      </div>
    </Container>
  </>;
}
