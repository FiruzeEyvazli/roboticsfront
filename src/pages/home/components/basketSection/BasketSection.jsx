import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketCard from '../../../../components/basketCard/BasketCard'
import { getBasketThunk } from '../../../../redux/reducers/basketSlice'

const BasketSection = () => {

  const dispatch = useDispatch()

  const basketProducts = useSelector((state) => state.basket.basket)
  const loading = useSelector((state) => state.basket.loading)
  const error = useSelector((state) => state.basket.error)



  useEffect(() => { dispatch(getBasketThunk()) }, [])

  if (error) return <p>Xeta bas verdi</p>
  if (loading) return <p>Yuklenir...</p>

  return (
    <div>
      {basketProducts && basketProducts.map(item => <BasketCard item={item} />)}
    </div>
  )
}

export default BasketSection