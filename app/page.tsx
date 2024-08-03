import { Container } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Filters } from "@/components/shared/filters";
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
      {/** Filters */}
      <div className="flex gap-[60px]">
        <Filters />
      </div>
      {/** Items list */}
      <div className="flex-1">
        <div className="fkex flex-col gap-16">
          {/* <ProductsGroupList title="Пиццы" items={{1, 2, 3, 4, 5}} />
          <ProductsGroupList title="Комбо" items={{1, 2, 3, 4, 5}} /> */}
        </div>
      </div>
    </Container>
  </>;
}
