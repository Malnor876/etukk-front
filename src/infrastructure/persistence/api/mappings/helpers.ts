import { IMAGE_MOCKS } from "constants/mocks"

export function mapImageUrl(item: string | null) {
  if (item === null) {
    return IMAGE_MOCKS[0]
  }
  return process.env.REACT_APP_API_HOST + item + ".webp"
}