import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Container } from '@/components/shared/container';
import { Title } from '@/components/shared/title';
import { Categories } from '@/components/shared/categories';
import { SortPopup } from '@/components/shared/sort-popup';
import { TopBar } from '@/components/shared/top-bar';
import { Filters } from '@/components/shared/filters';
import { ProductCard } from '@/components/shared/product-card';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список товаров</div>
            <ProductCard
              id={0}
              name="Чизбургер-пицца"
              price={550}
              imageUrl={
                'https://media.dodostatic.net/image/r:584x584/11EE7D5FD6097096B601585D57F44A6F.avif'
              }
            />
          </div>
        </div>
      </Container>
    </>
  );
}
