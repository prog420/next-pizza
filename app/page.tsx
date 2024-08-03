import { Container } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { SortPopup } from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";

export default function Home() {
  return <> 
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      <Categories/>
      <SortPopup/>
    </Container>
  </>;
}
