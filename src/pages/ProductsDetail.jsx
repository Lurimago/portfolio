    import React, { useEffect, useState } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { useNavigate, useParams } from "react-router-dom";
    import { getProductsThunk } from "../store/slices/products.slice";
    
    const ProductsDetail = () => {
        const allProducts = useSelector(state => state.products)
        const [ productDetail, setProductDetail ] = useState({})
        const [ suggestedProducts, setSuggestedProducts ] = useState([])
    
        const { id } = useParams()
    
        const dispatch = useDispatch()
        const navigate = useNavigate()
    
      useEffect(() => {
        dispatch(getProductsThunk());
      }, []);
    
      useEffect(() => {
        const productsFind = allProducts.find((productsItem) => productsItem.id === Number(id));
        setProductDetail(productsFind);
    
        const filteredProducts = allProducts.filter(
          (newsProducts) => newsProducts.category.id === productsFind.category.id
        );
        setSuggestedProducts(filteredProducts);
      }, [allProducts, id]);
    
      return (
        <div>
        <h1>{productDetail?.title}</h1>
        <img src={productDetail?.productImgs} alt="" />
        <ul>
            {
                suggestedProducts.map(suggestedProduct => (
                   <li onClick={() => navigate(`/products/${suggestedProduct.id}`)}>{suggestedProduct.title}</li> 
                ))
            }
        </ul>
    </div>
      );
    };
    
export default ProductsDetail;