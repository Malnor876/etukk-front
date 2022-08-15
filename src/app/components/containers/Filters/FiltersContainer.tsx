import {
  Filter,
  FilterInputs,
  FilterPriceRange,
  FilterRadios,
  FiltersToolbox,
} from "app/components/containers/Filters/Filters"
import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Icon from "app/components/UI/Icon/Icon"
import Input from "app/components/UI/Input/Input"
import Radio from "app/components/UI/Radio/Radio"
import ToolTip from "app/components/UI/ToolTip/ToolTip"
import {breakDownCategories} from "app/views/lot-new/edit/EditLotCategory"
import {LotDelivery} from "areas/lot/types"
import {getCategory} from "infrastructure/persistence/api/data/actions"
import {
  mapFiltersCategory,
  RecursiveTreeElement,
} from "infrastructure/persistence/api/mappings/lots"
import {Dispatch, useEffect, useState} from "react"
import {classWithModifiers, inputValue} from "utils/common"

import QueryContainer from "../QueryContainer/QueryContainer"
import {FiltersState, FiltersType} from "./Filters.types"
import filtersContext from "./filtersContext"

interface FiltersContainerProps {
  pending?: boolean
  onSubmit?: Dispatch<FiltersType>
}

function turnBigMinHeight(onOff: boolean) {
  const d = document.querySelector("#jj")
  if (!(d instanceof HTMLElement)) return

  if (onOff) {
    d.style.minHeight = "65em"
  } else {
    d.style.minHeight = "18em"
  }
}

function FiltersContainer(props: FiltersContainerProps) {
  const [state, setState] = useState<FiltersState>()
  const reducer = useState<FiltersType>({})
  const [filters] = reducer
  async function onSubmit() {
    await props.onSubmit?.(filters)
    setState(undefined)
  }
  useEffect(() => {
    if (state === "expanded") {
      turnBigMinHeight(true)
    }
  }, [state])
  return (
    <filtersContext.Provider value={reducer}>
      <div
        className={classWithModifiers("filters", state)}
        onAnimationEnd={() => turnBigMinHeight(false)}>
        <button
          className="filters__toggle"
          type="button"
          onClick={() => setState(state && undefined)}>
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
          <Button
            className="filters__submit"
            pending={props.pending}
            await
            onClick={onSubmit}>
            Применить
          </Button>
        </div>
      </div>
    </filtersContext.Provider>
  )
}

export function FiltersContainerMobile(props: FiltersContainerProps) {
  const [state, setState] = useState<FiltersState>()
  const reducer = useState<FiltersType>({})
  const [filters, setFilters] = reducer
  async function onSubmit() {
    await props.onSubmit?.(filters)
    setState(undefined)
  }

  function chooseCategory(id: number) {
    const nextFilters = {...filters, categories: id.toString()}

    setFilters(nextFilters)
    props.onSubmit?.(nextFilters)
  }

  function clear() {
    setFilters({})
  }
  return (
    <filtersContext.Provider value={reducer}>
      <div className={classWithModifiers("mobile-filters", state)}>
        <div className="mobile-filters__container">
          <button
            className="mobile-filters__toggle"
            type="button"
            onClick={() => setState("expanded")}>
            <Icon name="filter" />
            <ToolTip>Развернуть фильтр</ToolTip>
          </button>
          <QueryContainer action={getCategory()}>
            {payload => {
              const currentCategoryId = Number(filters.categories)
              const {options} = breakDownCategories(
                payload,
                Number(filters.categories)
              )
              return (
                <div className="mobile-filters__categories">
                  {options?.map(category => (
                    <Button
                      color={
                        category.id === currentCategoryId ? undefined : "gray"
                      }
                      small
                      outline
                      onClick={() => chooseCategory(category.id)}
                      key={category.id}>
                      {category.name}
                    </Button>
                  ))}
                </div>
              )
            }}
          </QueryContainer>
        </div>
        <div className="mobile-filters__window">
          <button
            className="mobile-filters__close"
            type="button"
            onClick={() => setState(undefined)}>
            <Icon name="cross" />
          </button>
          <div className="mobile-filters__header">
            <div className="mobile-filters__title">Фильтр</div>
            <button
              className={classWithModifiers(
                "mobile-filters__clear",
                Object.keys(filters).length >= 1 && "active"
              )}
              type="button"
              onClick={clear}>
              Сбросить фильтр
            </button>
          </div>
          <div className="mobile-filters__tree">
            <FiltersTreeContainer />
          </div>
          <Button
            className="filters__submit"
            pending={props.pending}
            await
            onClick={onSubmit}>
            Применить
          </Button>
        </div>
      </div>
    </filtersContext.Provider>
  )
}

function FiltersTreeContainer() {
  const dateNow = new Date(new Date().setUTCHours(0)).toISOString().slice(0, 16)
  const [tradeStart, setTradeStart] = useState(dateNow)
  return (
    <>
      <Filter group label="КАТЕГОРИИ">
        <QueryContainer action={getCategory()} mapping={mapFiltersCategory}>
          {payload => <FilterRecursion name="categories" elements={payload} />}
        </QueryContainer>
      </Filter>
      <Filter label="СТАТУС ТОРГОВ">
        <FilterRadios name="started">
          <Radio value="started">Торги начаты</Radio>
          {/* <Radio value="ended">Торги окончены</Radio> */}
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
          <Radio value={LotDelivery.all}>В другие регионы</Radio>
          <Radio value={LotDelivery.local}>Только по городу продажи</Radio>
        </FilterRadios>
      </Filter>
      <Filter label="ПЕРИОД ПРОВЕДЕНИЯ">
        <FilterInputs>
          <Input
            name="tradeStart"
            type="datetime-local"
            min={dateNow}
            max="9999-06-14T00:00"
            onChange={inputValue(setTradeStart)}>
            Если необходимо, уточните период начала торгов
          </Input>
          <Input
            name="tradeEnd"
            type="datetime-local"
            min={tradeStart}
            max="9999-06-14T00:00">
            Если необходимо, уточните период окончания торгов
          </Input>
        </FilterInputs>
      </Filter>
    </>
  )
}

interface FilterRecursionProps {
  name: string
  group?: boolean
  elements: RecursiveTreeElement[]
}

function FilterRecursion(props: FilterRecursionProps) {
  if (props.elements.length === 0) return null
  // console.log(props.elements)
  return (
    <>
      {props.elements.map(element => (
        <Filter group={props.group} label={element.name} key={element.id}>
          <FilterRecursion
            name={props.name}
            elements={element.children.filter(
              child => child.children.length > 0
            )}
          />
          <div className="filter__inputs">
            <FilterRadios name={props.name} removeAll>
              {element.children
                .filter(child => child.children.length === 0)
                .map(child => (
                  <Checkbox
                    name={props.name}
                    value={child.id.toString()}
                    key={child.id}>
                    {child.name}
                  </Checkbox>
                ))}
            </FilterRadios>
          </div>
        </Filter>
      ))}
    </>
  )
}

export default FiltersContainer
