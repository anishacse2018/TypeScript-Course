//Tuples are arrays of fixed length and ordered with specific types
//They are like super rigid arrays
var mytuple;
mytuple = [5, "ana"]; //valid
mytuple = ["ana", 5]; //invalid, order is imp here, its defined as number followed by string
mytuple = [5, "ana", 6]; //invalid as length of mytuple should be of fixed length 2 as per line 3 where it has been defined
var goodRes = [200, "OK"];
goodRes.push(123); //Valid
/*
This is an anamoly because if we create a valid tuple with values once,
then, we can push or pop any number of elements from it and typescript
will not throw any error.
However, if we create an empty typle at first, then, it checks the
type of every character and only then pushes it if its valid
*/
var responses = [[200, "OK"], [404, "Not Found"]]; //An array of tuples
/*
Enums-allows us to define a set of named constants. We can give these constants numeric or string values.

*/
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED"; //3
})(OrderStatus || (OrderStatus = {}));
var statusCode = OrderStatus.DELIVERED;
/*
If we explicitly assign any numeric value to any of those defined in OrderStatus
then, the fields defined after that, will have numeric value greater than the previous one by one unit
If pending is assigned value 10, then Shipped is 11, Delivered is 12 and Returned is 13
We can also explicitly assign a numeric value to each constant defined in enum
const OrderStatus{
    PENDING=23,
    SHIPPING=45,
    DELIVERED=234,
    RETURNED=800
}
The above enum is totally valid
*/
var ArrowKeys, _a = void 0, _b = _a.UP, UP = _b === void 0 ? "up" : _b, _c = _a.DOWN, DOWN = _c === void 0 ? "down" : _c, _d = _a.LEFT, LEFT = _d === void 0 ? "left" : _d, _e = _a.RIGHT, RIGHT = _e === void 0 ? "right" : _e;
//The above is also valid
/*
Behind the scenes, enum is nothing but a Javascript Object
*/ 
