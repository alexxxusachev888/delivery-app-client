export const CartHistory = ({ orders }) => {
    if (!orders || orders.length === 0) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <h1>Cart History</h1>
            {orders.map((order) => {
                if (order.order && order.order.length > 0) {
                    return (
                        <div key={order._id}>
                            <h2>Order ID: {order._id}</h2>
                            <p>Name: {order.name}</p>
                            <p>Address: {order.address}</p>
                            <p>Total Sum: {order.totalSum}</p>
                            <h3>Items:</h3>
                            {order.order.map((item, index) => (
                                <div key={index}>
                                    <p>Item Name: {item.name}</p>
                                    <p>Price: {item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Shop: {item.shop}</p>
                                </div>
                            ))}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};





