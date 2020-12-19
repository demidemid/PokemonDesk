/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import cn from 'classnames';
import s from './Filter.module.scss';
import Button from '../_common/Button';
import { ButtonColors, ButtonSizes } from '../_common/Button/Button.entities';
import FilterSelect from '../FilterSelect';

interface ICheckboxTypeList {
  id: number;
  type: string;
  isChecked: boolean;
}

const TypeList: ICheckboxTypeList[] = [
  { id: 1, type: `Bug`, isChecked: true },
  { id: 2, type: `Fairy`, isChecked: false },
  { id: 3, type: `Ghost`, isChecked: false },
  { id: 4, type: `Dark`, isChecked: false },
  { id: 5, type: `Fighting`, isChecked: false },
  { id: 6, type: `Glass`, isChecked: false },
  { id: 7, type: `Dragon`, isChecked: false },
  { id: 8, type: `Fire`, isChecked: true },
  { id: 9, type: `Ground`, isChecked: false },
  { id: 10, type: `Electric`, isChecked: false },
  { id: 11, type: `Flying`, isChecked: false },
  { id: 12, type: `Ice`, isChecked: false },
  { id: 13, type: `Normal`, isChecked: false },
  { id: 14, type: `Poison`, isChecked: false },
  { id: 15, type: `Psychic`, isChecked: false },
  { id: 16, type: `Rock`, isChecked: false },
  { id: 17, type: `Steel`, isChecked: false },
  { id: 18, type: `Water`, isChecked: false },
];

interface IFilter {
  ssValue: (value: string) => void;
}

const Filter: React.FC<IFilter> = ({ ssValue }) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ssValue(e.target.value);
  };

  return (
    <div className={s.root}>
      <input
        type="search"
        className={s.inputSearch}
        onChange={handleSearchChange}
        placeholder="Encuentra tu pokémon..."
      />
      <button
        className={cn(s.toggleButton, !isFilterMenuOpen || s.show)}
        type="button"
        onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
        Filter
      </button>
      <div className={cn(s.filterMenu, !isFilterMenuOpen || s.show)}>
        <FilterSelect title="Type">
          <ul className={cn(s.filterContent, s.checkboxType)}>
            {TypeList.map((checkbox: ICheckboxTypeList) => (
              <li key={checkbox.id} className={s.typeItemBlock}>
                <label htmlFor={checkbox.id + checkbox.type} className={s.checkboxLabel}>
                  <input
                    type="checkbox"
                    id={checkbox.id + checkbox.type}
                    className={s.checkboxInput}
                    defaultChecked={checkbox.isChecked}
                  />
                  <span className={s.customCheckbox} />
                  <span className={s.checkboxText}>{checkbox.type}</span>
                </label>
              </li>
            ))}
          </ul>
        </FilterSelect>
        <FilterSelect title="Experience">
          <ul className={cn(s.filterContent, s.cloud)}>
            <fieldset className={s.innerRow}>
              <label className={s.fromToLabel} htmlFor="from">
                <span className={s.text}>From</span>
                <input className={s.inputNumber} id="from" type="number" defaultValue="70000" name="expFrom" />
              </label>
              <span className={s.dashLabel} />
              <label className={s.fromToLabel} htmlFor="to">
                <span className={s.text}>To</span>
                <input className={s.inputNumber} id="to" type="number" defaultValue="70000" name="expTo" />
              </label>
            </fieldset>
            <div className={s.buttonWrapper}>
              <Button type="button" size={ButtonSizes.SMALL} buttonColor={ButtonColors.GREEN} onClick={() => {}}>
                Apply
              </Button>
            </div>
          </ul>
        </FilterSelect>
        <FilterSelect title="Attack">
          <ul className={cn(s.filterContent, s.cloud)}>
            <fieldset className={s.innerRow}>
              <label className={s.fromToLabel} htmlFor="attack-from">
                <span className={s.text}>From</span>
                <input
                  className={s.inputNumber}
                  id="attack-from"
                  type="number"
                  defaultValue="70000"
                  name="attackFrom"
                />
              </label>
              <span className={s.dashLabel} />
              <label className={s.fromToLabel} htmlFor="attack-to">
                <span className={s.text}>To</span>
                <input className={s.inputNumber} id="attack-to" type="number" defaultValue="70000" name="attackTo" />
              </label>
            </fieldset>
            <div className={s.buttonWrapper}>
              <Button type="button" size={ButtonSizes.SMALL} buttonColor={ButtonColors.GREEN} onClick={() => {}}>
                Apply
              </Button>
            </div>
          </ul>
        </FilterSelect>
      </div>
    </div>
  );
};

export default Filter;
