import mockPNG from "./mock.png"
import mock2JPG from "./mock-2.jpg"
import mock3JPG from "./mock-3.jpg"

export const IMAGE_MOCKS = [mockPNG, mock2JPG, mock3JPG]
export const LOT_PREVIEW_MOCK = {
  id: 0,
  city: "Москва",
  title: "ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ",
  image: IMAGE_MOCKS[1],
  price: 100,
  tradeStart: new Date,
  bookmarked: true
}