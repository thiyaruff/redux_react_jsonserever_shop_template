## react redux shop with json server crud template
simple shop with admin(can manage the products), shop, cart(the client can choose product to his cart)
without login
# load server
npm install -g json-server
json-server --watch shop.json --port 3005

# my database: (shop.json)
{
  "prods": [
    {
      "desc": "burger",
      "price": "50",
      "id": 4
    },
    {
      "desc": "pizza",
      "price": "40",
      "id": 5
    },
    {
      "desc": "kola",
      "price": "5",
      "id": 6
    }
  ]
}


run the project