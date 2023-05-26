import React, { useState, useEffect } from 'react';
import { CartHistory } from "../../components/CartHistory/CartHistory";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { getOrdersByPhoneOrEmail } from '../../services/api';
import { Spinner } from "../../components/Spinner/Spinner";
import { Container, Heading } from "./History.styled";

export const History = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem("orders")) || []);

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const fetchOrders = async () => {
    setIsLoading(true);
    const { data } = await getOrdersByPhoneOrEmail(query);

    setOrders(data.orders);
    setIsLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchOrders();
  };

  return (
    <Container>
      <Heading>History</Heading>
      <SearchForm setQuery={setQuery} handleSearch={handleSearch} />
      {isLoading ? (
        <Spinner />
      ) : orders.length > 0 ? (
        <CartHistory orders={orders} />
      ) : (
        <img src='https://media0.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif?cid=ecf05e47muxtb002rpki4kym90aoqgzugbxa71ik44yl34w1&ep=v1_gifs_search&rid=giphy.gif&ct=g' width={500} alt="nothing on the list"/>
      )}
    </Container>
  );
};