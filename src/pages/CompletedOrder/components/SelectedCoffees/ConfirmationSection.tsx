import { Button } from "../../../../components/Button"
import { RegularText } from "../../../../components/Typography"
import { useCart } from "../../../../hooks/useCart"
import { formatMoney } from "../../../../utils/formatMoney"
import { ConfirmationSectionContainer } from "./styles"

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText size="m">R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText size="m">R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText size="s">Total</RegularText>
        <RegularText size="l" weight="700" color="subtitle">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button
        text="confirmar pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
