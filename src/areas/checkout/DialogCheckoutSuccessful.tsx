import DialogLayout from "app/layouts/Modal/DialogLayout/DialogLayout"

function DialogCheckoutSuccessful() {
  return (
    <DialogLayout width="30em" centered>
      <h3 >
        Данные приняты. <br />
        В ближайшее время с вами свяжется представитель службы доставки!
      </h3>
    </DialogLayout>
  )
}

export default DialogCheckoutSuccessful