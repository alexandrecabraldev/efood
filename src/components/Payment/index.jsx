import {  useDispatch, useSelector } from "react-redux"
import { changePayment } from "../../redux/isPaymentOpen";
import PropTypes from "prop-types"
import { changeAdressEdit } from "../../redux/isAdressEditOpen"
import { useForm } from "react-hook-form";
import { Form, ContainerLabelInput, ContainerCepNumber, ContainerButton, ContainerCvvCardNumber, ContainerFinishOrder, Loading, ErroMessage, Button, Container, ErrorMessage } from "./style";
import { changeCart } from "../../redux/isCartOpen";
import { emptyCart } from "../../redux/cartSlice";
import { useState } from "react";
import { usePurchaseMutation } from "../../redux/apiStore";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

Payment.propTypes = {
    totalPriceCart: PropTypes.number.isRequired,
}

const adressSchema = yup.object({
    nameDeliver:yup.string().required("O nome de quem irá receber é obrigatório").min(4,'O nome deve ter no mínimo 4 letras'),
    adress: yup.string().required("Endereço é obrigatório").min(6,'O endereço deve ter no mínimo 6 letras'),
    city: yup.string().required("Cidade é obrigatório").min(4,'A cidade deve ter no mínimo 4 letras'),
    CEP: yup.string().required("CEP é obrigatório").length(8,'O CEP deve ter 8 letras').matches( /^\d+$/, 'O campo deve conter apenas números'),
    number: yup.number().transform(value=>isNaN(value)? undefined : value).required("Número é obrigatório").positive("Deve ser positivo").integer("Deve ser inteiro"),
    extra: yup.string().transform(value=>value || undefined).default('sem complemento'),
})

const cardSchema = yup.object({
    nameCard: yup.string().required("O nome no cartão é obrigatório").min(4,'O nome deve ter no mínimo 4 letras'),
    numberCard: yup.string().required("O número do cartão é obrigatório").matches( /^\d+$/, 'O campo deve conter apenas números'),
    cvv: yup.string().required("Obrigatório").matches( /^\d+$/, 'Apenas números').min(3,'Mínimo 3 digitos').max(4, 'Máximo 4 digitos'),
    monthExpiration: yup.number('Deve ser um número').transform(value=>isNaN(value)? undefined : value).required("O campo é obrigatório").min(1,'Entre 1 e 12').max(12,'Entre 1 e 12'),
    yearExpiration: yup.number().typeError('Digite um número').test('validYear','Digite ano válido', 
    value=> {return value>=new Date().getFullYear()}).required("O campo é obrigatório"),
})

export function Payment({totalPriceCart}){
    
    const cart = useSelector((state)=>state.cart);
    const adressEdit = useSelector((state)=>state.isAdressEditOpen);
    const dispatch = useDispatch();
    const [orderInformation, setOrderInformation]= useState({});
    const [purchase, result] = usePurchaseMutation();

    const {register, handleSubmit, formState: { errors } } = useForm(
        {resolver: yupResolver(adressSchema)}
    );

    const {register: registerCard, handleSubmit: handleSubmitCard, formState: {errors: errorsCard}} = useForm({
        resolver:yupResolver(cardSchema)
    })

    function onSubmitAdress(data){
        
        setOrderInformation(data)
        dispatch(changeAdressEdit(false))

        // adressSchema.validate(data).then((data)=>{
        //     console.log(data)
        // }).catch(error=>{
        //     return alert(`Erro de Validação: ${error.message}`)
        // })
        
    }

    function onSubmitCard(data){
        dispatch(changeAdressEdit(null))

        //mandar informações para backend aqui
        purchase({
            products:[
                cart.map(item=>{
                    return {
                        id: item.id,
                        price: Number(item.price)
                    }
                })
            ],
            delivery:{
                receiver: orderInformation.nameDeliver,
                adress:{
                    description: orderInformation.adress,
                    city:orderInformation.city,
                    zipCode: orderInformation.CEP,
                    number: Number(orderInformation.number),
                    complement: orderInformation.extra

                }
            },
            payment:{
                card:{
                    name: data.nameCard,
                    number: data.numberCard,
                    code: Number(data.cvv),
                    expires:{
                        month: Number(data.monthExpiration),
                        year: Number(data.yearExpiration),
                    }
                }
            }
        })
    }

    function handleFinishedOrder(){
        dispatch(changeCart(false))
        dispatch(changePayment(false))
        dispatch(changeAdressEdit(true))
        dispatch(emptyCart())
    }

    function handleCLickError(){
        dispatch(changeAdressEdit(true))
        dispatch(changePayment(false))
    }

    return (
        <>
            { adressEdit &&
                <Form onSubmit={handleSubmit(onSubmitAdress)}>
                    <h3>Entrega</h3>
                    <ContainerLabelInput>
                        <label>Quem irá receber</label>
                        <input type="text" {...register('nameDeliver')}/>
                        {errors.nameDeliver && <ErrorMessage>{errors.nameDeliver.message}</ErrorMessage>}
                    </ContainerLabelInput>
                    <ContainerLabelInput>
                        <label>Endereço</label>
                        <input type="text" {...register('adress')}/>
                        {errors.adress && <ErrorMessage>{errors.adress.message}</ErrorMessage>}
                    </ContainerLabelInput>
                    <ContainerLabelInput>
                        <label>Cidade</label>
                        <input type="text" {...register('city')}/>
                        {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
                    </ContainerLabelInput>
                    <ContainerCepNumber>
                        <ContainerLabelInput>
                            <label>CEP</label>
                            <input type="text" {...register('CEP')}/>
                            {errors.CEP && <ErrorMessage>{errors.CEP.message}</ErrorMessage>}
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Número</label>
                            <input type="text" {...register('number')} />
                            {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
                        </ContainerLabelInput>
                    </ContainerCepNumber>
                    <ContainerLabelInput>
                        <label>Complemento (opcional)</label>
                        <input type="text" {...register('extra')}/>
                    </ContainerLabelInput>
                    <ContainerButton>
                        <button type="submit">Continuar com o pagamento</button>
                        <button type="button" onClick={()=> dispatch(changePayment(false))}>Voltar para o carrinho</button>
                    </ContainerButton>
                </Form>
            }

            { adressEdit===false &&  

                <Form onSubmit={handleSubmitCard(onSubmitCard)}>
                    <h3>Pagamento - Valor a pagar R$ {totalPriceCart.toFixed(2)}</h3>
                    <ContainerLabelInput>
                        <label>Nome no cartão</label>
                        <input type="text" {...registerCard('nameCard')}/>
                        {errorsCard.nameCard && <ErrorMessage>{errorsCard.nameCard.message}</ErrorMessage>}
                    </ContainerLabelInput>
                    <ContainerCvvCardNumber>
                        <ContainerLabelInput>
                            <label>Número do cartão</label>
                            <input type="text" {...registerCard('numberCard')}/>
                            {errorsCard.numberCard && <ErrorMessage>{errorsCard.numberCard.message}</ErrorMessage>}
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>CVV</label>
                            <input type="text" {...registerCard('cvv')}/>
                            {errorsCard.cvv && <ErrorMessage>{errorsCard.cvv.message}</ErrorMessage>}
                        </ContainerLabelInput>
                    </ContainerCvvCardNumber>
                    <ContainerCepNumber>
                        <ContainerLabelInput>
                            <label>Mês de vencimento</label>
                            <input type="text" {...registerCard('monthExpiration')}/>
                            {errorsCard.monthExpiration && <ErrorMessage>{errorsCard.monthExpiration.message}</ErrorMessage>}
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Ano de vencimento</label>
                            <input type="text" {...registerCard('yearExpiration')}/>
                            {errorsCard.yearExpiration && <ErrorMessage>{errorsCard.yearExpiration.message}</ErrorMessage>}
                        </ContainerLabelInput>
                    </ContainerCepNumber>
                    <ContainerButton>
                        <button type="submit">Finalizar pagamento</button>
                        <button type="button" onClick={()=>dispatch(changeAdressEdit(true))}>
                            Voltar para a edição de endereço
                        </button>
                    </ContainerButton>
                </Form>
            }

            {
                adressEdit===null && result.isLoading  &&
                    <Loading>Loading...</Loading>
            }

            { adressEdit===null && result.isLoading===false && result.isSuccess &&
                <ContainerFinishOrder>
                    <h3>Pedido realizado - {result.data.orderId}</h3>
                    <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
                    <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </p>
                    <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
                    <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
                    <button onClick={handleFinishedOrder}>Concluir</button>
                </ContainerFinishOrder>
            }

            {
                adressEdit===null && result.isLoading===false && result.isSuccess===false &&
                    <Container>
                        <ErroMessage>Erro no pedido</ErroMessage>
                        <Button onClick={handleCLickError}>Voltar ao Carrinho</Button>
                    </Container>
            }
        </>
    )
}