<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart Quantity</title>
</head>

<body>
    <button onclick="show()"> Show Quantity</button>
    <button onclick="Add_cart()">Add To Cart</button>
    <button onclick="double()">+2</button>
    <button onclick="Thrice()">+3</button>
    <button onclick="reset()">Reset Cart</button>


    <script>
        let cartQuantity = 0;

        function show() {
            console.log(cartQuantity);
        }

        function Add_cart() {
            let cart = cartQuantity;
            console.log(cart + 1);
            cartQuantity++;
        }

        function double() {
            console.log(cartQuantity + 2);
            cartQuantity += 2;
        }

        function Thrice() {
            console.log(cartQuantity + 3);
            cartQuantity += 3;
        }

        function reset() {
            console.clear();
            console.log('The value is cleared in the cart');
        }
    </script>
</body>

</html>
