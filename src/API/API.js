import axios from "axios";


export const usersAPI = {
    GetCategories() {
        return axios({
            url: "http://localhost:4000/",
            method: "post",
            data: {
                query: `{categories{name}}`
            }
        })
            .then(res => {
                return res
            })
    },
    GetProducts(category) {
        return axios({
            url: "http://localhost:4000/",
            method: "post",
            data: {
                query: `{
                category(input: {title: "${category}"}){
    products{
      id
      name
      gallery
      prices{
      currency{
        label
        symbol
      }
      amount
    }
    }
  }
                }`
            }
        })
            .then(res => {
                return res
            })
    },
    GetProductInfo(id) {
        return axios({
            url: "http://localhost:4000/",
            method: "post",
            data: {
                query: `{
                product(id: "${id}" ){
    gallery
    name
    brand
    attributes{
      name
      type
      items{
        displayValue
        value
        id
      }
    }
    prices{
      currency{
        label
        symbol
      }
      amount
    }
    description
  }
                }`
            }
        })
            .then(res => {
                return res
            })
    },
}


