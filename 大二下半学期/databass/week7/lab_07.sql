use classicmodels;

select orders.orderNumber, productName, quantityOrdered
from orders
join customer
on orders.customerNumber=customer.customerNumber
join orderdetails
on orders.orderNumber=orderdetails.orderNumber
join product
on orderdetails.productCode=product.productCode
where customer.customerNumber='242'
order by orderNumber, productName