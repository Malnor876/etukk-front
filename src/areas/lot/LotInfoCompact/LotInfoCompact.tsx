import "./LotInfoCompact.scss"

import Author, { AuthorProps } from "app/components/UI/Author/Author"

interface LotInfoCompactProps {
  image: string
  title: string
  seller?: AuthorProps
}

function LotInfoCompact(props: LotInfoCompactProps) {
  return (
    <div className="lot-info-compact">
      <img src={props.image} alt="lot preview" className="lot-info-compact__image" />
      <div className="lot-info-compact__title">{props.title}</div>
      {props.seller && (
        <Author {...props.seller} />
      )}
    </div>
  )
}

export default LotInfoCompact
