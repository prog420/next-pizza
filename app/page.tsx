import { Container } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
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
      <div className="flex gap-[80px]">
        {/** Filters */}
        <div className="w-[250px]">
          <Filters />
        </div>

        {/** Items list */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductsGroupList 
              title="Пиццы" 
              products={[
                {
                  id: 1,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 500,
                  items: [{price: 500}]
                },
                {
                  id: 2,
                  name: "Пепперони фреш",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEE204813D7DDB85018555332A9F46.avif",
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 1,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 500,
                  items: [{price: 500}]
                },
                {
                  id: 2,
                  name: "Пепперони фреш",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEE204813D7DDB85018555332A9F46.avif",
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 1,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 500,
                  items: [{price: 500}]
                },
                {
                  id: 2,
                  name: "Пепперони фреш",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEE204813D7DDB85018555332A9F46.avif",
                  price: 550,
                  items: [{price: 550}]
                },
              ]} 
              categoryId={1}
            />
            <ProductsGroupList 
              title="Комбо" 
              products={[
                {
                  id: 1,
                  name: "Комбо на двоих",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEE20599168CB6B2D23EDD67D87EF0.avif",
                  price: 700,
                  items: [{price: 700}]
                },
                {
                  id: 2,
                  name: "2 пиццы и закуска",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/11EED73DF32FBAEBACC9B5B95EF7140E.avif",
                  price: 800,
                  items: [{price: 800}]
                },
                {
                  id: 3,
                  name: "Комбо на четверых",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/11EED73E3807A9F3A24E8F61333B5D75.avif",
                  price: 900,
                  items: [{price: 900}]
                },
              ]} 
              categoryId={2}
            />
          </div>
        </div>
      </div>
    </Container>
  </>;
}
