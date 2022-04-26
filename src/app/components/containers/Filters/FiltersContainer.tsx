import { Filter, FilterCheckboxes, FilterPriceRange, FilterRadios, FiltersToolbox } from "app/components/containers/Filters/Filters"
import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Icon from "app/components/UI/Icon/Icon"
import Input from "app/components/UI/Input/Input"
import Radio from "app/components/UI/Radio/Radio"
import ToolTip from "app/components/UI/ToolTip/ToolTip"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import { getGetFiltersCategory } from "infrastructure/persistence/api/data/actions"
import { mapFiltersCategory } from "infrastructure/persistence/api/mappings/lots"
import { Dispatch, useState } from "react"
import { classWithModifiers } from "utils/common"

import QueryContainer from "../QueryContainer/QueryContainer"
import { FiltersState, FiltersType } from "./Filters.types"
import filtersContext from "./filtersContext"

interface FiltersContainerProps {
  pending?: boolean
  onSubmit?: Dispatch<FiltersType>
}

function FiltersContainer(props: FiltersContainerProps) {
  const [state, setState] = useState<FiltersState>()
  const reducer = useState<FiltersType>({})
  const [filters] = reducer
  async function onSubmit() {
    await new Promise(r => setTimeout(r, 1000))
    props.onSubmit?.(filters)
    setState(undefined)
  }
  return (
    <filtersContext.Provider value={reducer}>
      <div className={classWithModifiers("filters", state)}>
        <button className="filters__toggle" type="button" onClick={() => setState(state && undefined)}>
          <Icon name="filter" />
          <ToolTip>Развернуть фильтр</ToolTip>
        </button>
        <div className="filters__inner">
          <div className="filters__header">
            <div className="filters__title">Фильтр</div>
            <FiltersToolbox state={state} onChange={setState} />
          </div>
          <div className="filters__container">
            <FiltersTreeContainer />
          </div>
          <Button className="filters__submit" pending={props.pending} onClick={onSubmit}>Применить</Button>
        </div>
      </div>
    </filtersContext.Provider>
  )
}

function FiltersTreeContainer() {
  return (
    <QueryContainer action={getGetFiltersCategory()} mapping={mapFiltersCategory}>
      {payload => (
        <>
          <Filter group label="КАТЕГОРИИ">
            <Column>
              <Filter label="Города">
                <FilterCheckboxes name="city">
                  <Checkbox name="moscow">Москва</Checkbox>
                  <Checkbox name="volgograd">Волгоград</Checkbox>
                  <Checkbox name="karaganda">Караганда</Checkbox>
                  <Checkbox name="karaganda">Караганда</Checkbox>
                  <Checkbox name="karaganda">Караганда</Checkbox>
                </FilterCheckboxes>
              </Filter>
              <Filter label="Города">
                <FilterCheckboxes name="city">
                  <Checkbox name="moscow">Москва</Checkbox>
                  <Checkbox name="volgograd">Волгоград</Checkbox>
                  <Checkbox name="karaganda">Караганда</Checkbox>
                  <Checkbox name="karaganda">Караганда</Checkbox>
                  <Checkbox name="karaganda">Караганда</Checkbox>
                </FilterCheckboxes>
              </Filter>
            </Column>

            <Column>
              <Filter label="Города">
                <FilterCheckboxes name="city">
                  <Checkbox name="moscow">Москва</Checkbox>
                  <Checkbox name="karaganda">Караганда</Checkbox>
                </FilterCheckboxes>
              </Filter>
              <Filter label="Города">
                <FilterCheckboxes name="city">
                  <Checkbox name="moscow">Москва</Checkbox>
                  <Checkbox name="volgograd">Волгоград</Checkbox>
                  <Checkbox name="karaganda">Караганда</Checkbox>
                </FilterCheckboxes>
              </Filter>
            </Column>

            <Column>
              <Filter label="Города">
                <FilterCheckboxes name="city">
                  <Checkbox name="moscow">Москва</Checkbox>
                  <Checkbox name="volgograd">Волгоград</Checkbox>
                  <Checkbox name="karaganda">Караганда</Checkbox>
                </FilterCheckboxes>
              </Filter>
              <Filter label="Города">
                <FilterCheckboxes name="city">
                  <Checkbox name="moscow">Москва</Checkbox>
                  <Checkbox name="karaganda">Караганда</Checkbox>
                </FilterCheckboxes>
              </Filter>
            </Column>
          </Filter>
          <Filter label="СТАТУС ТОРГОВ">
            <FilterRadios name="status">
              <Radio value={1}>Торги начаты</Radio>
              <Radio value={2}>Торги ожидают начала</Radio>
            </FilterRadios>
          </Filter>
          <Filter label="СТОИМОСТЬ ЛОТА">
            <FilterPriceRange name="price" />
          </Filter>
          <Filter label="ПРОДАВЕЦ">
            <FilterRadios name="seller">
              <Radio value={1}>Частное лицо</Radio>
              <Radio value={2}>Юридическое лицо</Radio>
            </FilterRadios>
          </Filter>
          <Filter label="ПЕРИОД ПРОВЕДЕНИЯ">
            <Input iconName="calendar">
              Если необходимо уточните период начала торгов
            </Input>
          </Filter>
        </>
      )}
    </QueryContainer>
  )
}

export default FiltersContainer
