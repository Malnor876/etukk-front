import Chat from "app/components/containers/Chat/Chat"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import { FAQ, FAQClause } from "app/components/UI/FAQ/FAQ"
import Buttons from "app/layouts/Buttons/Buttons"
import { Route, Routes } from "react-router"

import moderPNG from "./moder.png"

function SupportView() {
  return (
    <>
      <h2 className="heading">Тех. поддержка</h2>
      <Buttons>
        <ButtonLink small outline to="faq">FAQ</ButtonLink>
        <ButtonLink small outline to="chat">Чат</ButtonLink>
      </Buttons>
      <Routes>
        <Route path="faq" element={<SupportViewFAQ />} />
        <Route path="chat" element={<SupportViewChat />} />
      </Routes>
    </>
  )
}

function SupportViewFAQ() {
  return (
    <FAQ>
      <FAQClause summary="Как выстаить лот?">
        Не публикуйте несколько объявлений об одном и том же товаре и услуге — их заблокируют.
        <br />
        <br />
        Если у вас несколько предложений, создайте для каждого из них отдельное объявление — так покупателям будет проще найти нужный товар и вы быстрее заключите сделку.
        <br />
        <br />
        Подготовьте уникальные описания и фотографии для разных объявлений — даже если товары очень похожи. Иначе мы можем посчитать их одинаковыми и заблокировать одно из объявлений как повторное.
        <br />
        <br />
        Теперь составим объявление так, чтобы оно привлекало покупателей и не нарушало правила размещения.
        <ul>
          <li>Название</li>
          <li>Категория</li>
          <li>Вид</li>
          <li>Цена</li>
          <li>Фото</li>
          <li>Адрес</li>
        </ul>
        Оно должно точно передавать суть того, что вы предлагаете: например, «Наушники Samsung E-345», «Ремонт стиральных машин». Не указывайте в названии цену и контакты, не используйте слова, которые привлекают внимание («скидка», «акция» и т.п.)
        <br />
        <br />
        В некоторых категориях («Недвижимость», «Автомобили», «Экскаваторы», «Бульдозеры», «Погрузчики») название составляется автоматически: на основе указанных в объявлении характеристик.
      </FAQClause>
      <FAQClause summary="Почму мое объявление  не проходит модерацию?">123</FAQClause>
      <FAQClause summary="Как вызвать курьера что бы отправить товар покупателю?">123</FAQClause>
    </FAQ>
  )
}
function SupportViewChat() {
  return (
    <Chat messages={[]} recipient={{ avatar: moderPNG, firstName: "Модератор" }} />
  )
}

export default SupportView