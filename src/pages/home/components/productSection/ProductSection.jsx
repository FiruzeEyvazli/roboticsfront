import React, { useEffect } from 'react'
import styles from "./ProductSection.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../../components/card/Card'
import { getProductsThunk, postBasketThunk } from '../../../../redux/reducers/productSlice'
const ProductSection = () => {

  const dispatch = useDispatch()


  const products = useSelector(state => state.products.products)
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)


  const addBasket = (item) => {
    dispatch(postBasketThunk(item))
  }

  


  useEffect(() => { dispatch(getProductsThunk()) }, [])

  if (loading) return <p>Yuklenir....</p>
  if (error) return <p>Xeta bas verdi....</p>


  return (
    <div>
      {products && products.map((item) => <Card item={item} addBasket={() => addBasket(item)} />)}
    </div>
  )
}

export default ProductSection