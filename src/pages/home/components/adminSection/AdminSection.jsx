import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFormikThunk, deleteProductsThunk, getProductsThunk } from '../../../../redux/reducers/productSlice'
import Card from '../../../../components/card/Card'
import { useFormik } from 'formik'
import styles from './AdminSection.module.scss'

const AdminSection = () => {

    const dispatch = useDispatch()

    const products = useSelector((state) => state.products.products)
    const loading = useSelector((state) => state.products.loading)
    const error = useSelector((state) => state.products.error)


    
    
    useEffect(() => { dispatch(getProductsThunk()) }, [])
    
    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            dispatch(addFormikThunk(values))
        },
    });
    
    const deleteProducts = (id) => {
        dispatch(deleteProductsThunk(id))
    }
    
    if (loading) return <p>Yuklenir....</p>
    if (error) return <p>Xeta bas verdi....</p>
    return (
        <div>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                />
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
                <button type="submit">Submit</button>
            </form>


            <table style={{ width: '100%', border: '1px solid black' }}>
                <tr style={{ border: '1px solid black' }}>
                    <th style={{ border: '1px solid black' }}>Image</th>
                    <th style={{ border: '1px solid black' }}>Title</th>
                    <th style={{ border: '1px solid black' }}>Price</th>
                </tr>
                {products && products.map(item => (

                    <tr style={{ border: '1px solid black' }}>
                        <td style={{ border: '1px solid black' }}>
                            <img src={item.image} alt="" />
                        </td>
                        <td style={{ border: '1px solid black' }}>{item.title}</td>
                        <td style={{ border: '1px solid black' }}>{item.price}</td>
                        <td><button onClick={() => deleteProducts(item._id)}>Sil</button></td>
                    </tr>

                ))}

            </table>
        </div>

    )
}

export default AdminSection