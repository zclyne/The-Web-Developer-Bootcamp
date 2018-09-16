var faker = require("faker");
for (var i = 0; i < 10; i++)
{
    // console.log(faker.fake("{{commerce.productName}}" + ' - $' + "{{commerce.price}}"));
    var productName = faker.commerce.productName();
    var price = faker.commerce.price();
    console.log(productName + ' - $' + price);
}