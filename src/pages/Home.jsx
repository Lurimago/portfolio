import React, { useEffect, useState } from "react";
import "../App.css";
import { filterTitleThunk, getProductsThunk, filterCategoryThunk} from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Card, Col, InputGroup, Form, Button, ListGroup } from "react-bootstrap";
import axios from "axios";


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const [categories, setCategories] = useState([]);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((response) => setCategories(response.data.data.categories));
  }, []);
  console.log(products);
  return (
    <Row>
      <Col lg={3} md={3} className='mb-3'>
        <ListGroup>
          {categories.map((categorie) => (
            <ListGroup.Item
              hover
              key={categorie.id}
              onClick={() => dispatch(filterCategoryThunk(categorie.id))}
              style={{ cursor: 'pointer' }}
            >
              {categorie.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={e => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <Button
            variant="outline-secondary" onClick={() => dispatch(filterTitleThunk(searchValue))}
          >
            Button
          </Button>
        </InputGroup>

        {/* {products?.map((product) => (
        <div key={product.id} onClick={() => navigate(`/news/${product.id}`)}>
          <div>{product.title}</div>
          <img src={product.productImgs[0]} alt="" />
        </div>
      ))} */}

        <Row xs={1} md={2} xl={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card onClick={() => navigate(`/products/${product.id}`)}>
                <Card.Img variant="top" src={product.productImgs[0]} />
                <div class="border-top"> 
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <h6>Price</h6>
                  <Card.Text>{product.price}</Card.Text>           
                      <div className="divIconCart">
                      <i class="fa-solid fa-cart-shopping"></i>
                      </div>
                </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
