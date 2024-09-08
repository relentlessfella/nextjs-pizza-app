import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui/input';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние Чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
        <RangeSlider min={10} max={5000} step={5} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: 'Сырный соус', value: '1' },
          { text: 'Моццарелла', value: '2' },
          { text: 'Чеснок', value: '3' },
          { text: 'Солённые огурчики', value: '4' },
          { text: 'Красный лук', value: '5' },
          { text: 'Томаты', value: '6' },
        ]}
        items={[
          { text: 'Сырный соус', value: '1' },
          { text: 'Моццарелла', value: '2' },
          { text: 'Чеснок', value: '3' },
          { text: 'Солённые огурчики', value: '4' },
          { text: 'Красный лук', value: '5' },
          { text: 'Томаты', value: '6' },
          { text: 'Томаты1', value: '7' },
          { text: 'Томаты2', value: '8' },
          { text: 'Томаты3', value: '9' },
          { text: 'Томаты4', value: '10' },
          { text: 'Томаты5', value: '11' },
        ]}
      />
    </div>
  );
};
