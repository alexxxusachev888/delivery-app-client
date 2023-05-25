import { CartHistory } from "../../components/CartHistory/CartHistory";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { useState } from 'react';
import { getOrdersByPhoneOrEmail } from '../../services/api';

export const History = () => {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        setIsLoading(true);
        const {data} = await getOrdersByPhoneOrEmail(query);
       
        setOrders(data.orders);  
        setIsLoading(false);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        fetchOrders();
    }

    return (
        <div>
            <h1>History</h1>
            <SearchForm setQuery={setQuery} handleSearch={handleSearch}/>    
            {isLoading ? <p>Loading...</p> : <CartHistory orders={orders} />}
        </div>
    )
}