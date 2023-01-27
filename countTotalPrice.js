const OrderItems = [
  {
    orderId: 101,
    orderItems: [
      {
        quantity: 3,
        productId: "1001",
        productPrice: 100,
        productDescription: "test",
      },
      {
        quantity: 3,
        productId: "1002",
        productPrice: 1000,
        productDescription: "ok",
      },
      {
        quantity: 10,
        productId: "1002",
        productPrice: 250,
        productDescription: "ok",
      },
    ],
    shippingAddress1: "surat",
    shippingAddress2: "surat",
    city: "surat",
    zip: "395001",
    country: "India",
    phone: "99558858",
    userId: "22002",
    userName: "Paresh Rajput",
  },
];

const TotalPrice = OrderItems.map((order) => {
  return order.orderItems;
})
  .flat(2)
  .map((order) => order.productPrice * order.quantity)
  .reduce((a, b) => a + b, 0);
console.log(TotalPrice);
