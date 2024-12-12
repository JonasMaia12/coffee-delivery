import { CompleteOrderForm } from "./components/CompleteOrderForm"
import { SelectedCoffees } from "./components/SelectedCoffees"
import { CompletedOrderContainer } from "./styles"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/useCart"

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompletedOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  const { cleanCart } = useCart()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/orderConfirmed", {
      state: data,
    })

    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompletedOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompletedOrderContainer>
    </FormProvider>
  )
}
