import { Filter, FilterCheckboxes, FilterInputs, FilterPriceRange, FilterRadios, FiltersToolbox } from "app/components/containers/Filters/Filters"
import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Icon from "app/components/UI/Icon/Icon"
import Input from "app/components/UI/Input/Input"
import Radio from "app/components/UI/Radio/Radio"
import ToolTip from "app/components/UI/ToolTip/ToolTip"
import { mapFiltersCategory, RecursiveTreeElement } from "infrastructure/persistence/api/mappings/lots"
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
    await props.onSubmit?.(filters)
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
          <Button className="filters__submit" pending={props.pending} await onClick={onSubmit}>Применить</Button>
        </div>
      </div>
    </filtersContext.Provider>
  )
}

function FiltersTreeContainer() {
  return (
    // <QueryContainer action={getGetFiltersCategory()} mapping={mapFiltersCategory}>
    //   {payload => (
    <>
      <Filter group label="КАТЕГОРИИ">
        {/* <FilterRecursion name="category" elements={payload.categories} /> */}
      </Filter>
      <Filter label="СТАТУС ТОРГОВ">
        <FilterRadios name="started">
          <Radio value="started">Торги начаты</Radio>
          <Radio value="ended">Торги окончены</Radio>
          <Radio value="waiting">Торги ожидают начала</Radio>
        </FilterRadios>
      </Filter>
      <Filter label="СТОИМОСТЬ ЛОТА">
        <FilterPriceRange name="price" defaultValue={[1, 2]} />
      </Filter>
      <Filter label="ПРОДАВЕЦ">
        <FilterRadios name="seller">
          <Radio value="user">Частное лицо</Radio>
          <Radio value="organization">Юридическое лицо</Radio>
        </FilterRadios>
      </Filter>
      <Filter label="ДОСТАВКА">
        <FilterRadios name="delivery">
          <Radio value="other_regions">В другие регионы</Radio>
          <Radio value="only_city">Только по городу продажи</Radio>
        </FilterRadios>
      </Filter>
      <Filter label="ПЕРИОД ПРОВЕДЕНИЯ">
        <FilterInputs name="period">
          <Input type="datetime-local">
            Если необходимо уточните период начала торгов
          </Input>
          <Input type="datetime-local">
            Если необходимо уточните период начала торгов
          </Input>
        </FilterInputs>
      </Filter>
    </>
    //   )}
    // </QueryContainer>
  )
}

interface FilterRecursionProps {
  name: string
  group?: boolean
  elements: RecursiveTreeElement[]
}

function FilterRecursion(props: FilterRecursionProps) {
  if (props.elements.length === 0) return null
  return (
    <>
      {props.elements.map(element => (
        <Filter group={props.group} label={element.name} key={element.id}>
          <FilterRecursion name={props.name} elements={element.children.filter(child => child.children.length > 0)} />
          <div className="filter__inputs">
            <FilterCheckboxes name={props.name}>
              {element.children.filter(child => child.children.length === 0).map(child => (
                <Checkbox name={child.id.toString()} key={child.id}>{child.name}</Checkbox>
              ))}
            </FilterCheckboxes>
          </div>
        </Filter>
      ))}
    </>
  )
}

export default FiltersContainer
