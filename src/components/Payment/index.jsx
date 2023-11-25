import {  useDispatch, useSelector } from "react-redux"
import { changePayment } from "../../redux/isPaymentOpen";
import PropTypes from "prop-types"
import { changeAdressEdit } from "../../redux/isAdressEditOpen"
import { useForm } from "react-hook-form";
import { Form, ContainerLabelInput, ContainerCepNumber, ContainerButton, ContainerCvvCardNumber, ContainerFinishOrder, Loading, ErroMessage, Button, Container } from "./style";
import { changeCart } from "../../redux/isCartOpen";
import { emptyCart } from "../../redux/cartSlice";
import { useState } from "react";
import { usePurchaseMutation } from "../../redux/apiStore";

Payment.propTypes = {
    totalPriceCart: PropTypes.number.isRequired,
}

export function Payment({totalPriceCart}){

    const cart = useSelector((state)=>state.cart);
    const adressEdit = useSelector((state)=>state.isAdressEditOpen);
    const dispatch = useDispatch();
    const [orderInformation, setOrderInformation]= useState({});
    const [purchase, result] = usePurchaseMutation();

    const {register, handleSubmit } = useForm();

    function onSubmitAdress(data){
        // console.log(data)
        setOrderInformation(data)
        dispatch(changeAdressEdit(false))
    }

    function onSubmitCard(data){
        // console.log(data)
        // setCardInformation(data)
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
    // console.log(result.isSuccess)
    // console.log(result.data)
    // console.log(result.isLoading)
    return (
        <>
            { adressEdit &&
                <Form onSubmit={handleSubmit(onSubmitAdress)}>
                    <h3>Entrega</h3>
                    <ContainerLabelInput>
                        <label>Quem irá receber</label>
                        <input type="text" {...register('nameDeliver', {required:true})}/>
                    </ContainerLabelInput>
                    <ContainerLabelInput>
                        <label>Endereço</label>
                        <input type="text" {...register('adress', {required:true})}/>
                    </ContainerLabelInput>
                    <ContainerLabelInput>
                        <label>Cidade</label>
                        <input type="text" {...register('city', {required:true})}/>
                    </ContainerLabelInput>
                    <ContainerCepNumber>
                        <ContainerLabelInput>
                            <label>CEP</label>
                            <input type="text" {...register('CEP', {required:true})}/>
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Número</label>
                            <input type="text" {...register('number', {required:true})} />
                        </ContainerLabelInput>
                    </ContainerCepNumber>
                    <ContainerLabelInput>
                        <label>Complemento (opcional)</label>
                        <input type="text" {...register('extra', {required:true})}/>
                    </ContainerLabelInput>
                    <ContainerButton>
                        <button type="submit">Continuar com o pagamento</button>
                        <button type="button" onClick={()=> dispatch(changePayment(false))}>Voltar para o carrinho</button>
                    </ContainerButton>
                </Form>
            }

            { adressEdit===false &&  

                <Form onSubmit={handleSubmit(onSubmitCard)}>
                    <h3>Pagamento - Valor a pagar R$ {totalPriceCart.toFixed(2)}</h3>
                    <ContainerLabelInput>
                        <label>Nome no cartão</label>
                        <input type="text" {...register('nameCard', {required:true})}/>
                    </ContainerLabelInput>
                    <ContainerCvvCardNumber>
                        <ContainerLabelInput>
                            <label>Número do cartão</label>
                            <input type="text" {...register('numberCard', {required:true})}/>
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>CVV</label>
                            <input type="text" {...register('cvv', {required:true})}/>
                        </ContainerLabelInput>
                    </ContainerCvvCardNumber>
                    <ContainerCepNumber>
                        <ContainerLabelInput>
                            <label>Mês de vencimento</label>
                            <input type="text" {...register('monthExpiration', {required:true})}/>
                        </ContainerLabelInput>
                        <ContainerLabelInput>
                            <label>Ano de vencimento</label>
                            <input type="text" {...register('yearExpiration', {required:true})}/>
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