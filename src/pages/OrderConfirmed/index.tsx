import { RegularText, TitleText } from "../../components/Typography"
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles"

import OrderConfirmedImg from "../../assets/orderConfirmedImg.svg"
import { InfoWithIcon } from "../../components/infoWithIcon"
import { Clock, CurrencyDollar, MapPin } from "phosphor-react"
import { useTheme } from "styled-components"
import { useLocation, useNavigate } from "react-router-dom"
import { OrderData } from "../CompletedOrder"
import { paymentMethod } from "../CompletedOrder/components/CompleteOrderForm/PaymentMethodOptions"
import { useEffect } from "react"

interface LocationType {
  state: OrderData
}

export function OrderConfirmedPage() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate("/")
    }
  }, [])

  if (!state) return <></>

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText size="l" color="subtitle">
                Entrega em{" "}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText size="l" color="subtitle">
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText size="l" color="subtitle">
                Pagamento na entrega
                <br />
                <strong>{paymentMethod[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={OrderConfirmedImg} />
      </section>
    </OrderConfirmedContainer>
  )
}
