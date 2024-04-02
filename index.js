let product = []

const uimaker = (data) => {
    document.getElementById("box").innerHTML = "";
    data.map((ele, i) => {

        let title = document.createElement("h1");
        title.innerHTML = ele.title;

        let description = document.createElement("p");
        description.innerHTML = ele.description;

        let price = document.createElement("p");
        price.innerHTML = ele.price;

        let discountPercentage = document.createElement("p");
        discountPercentage.innerHTML = ele.discountPercentage;

        let rating = document.createElement("p");
        rating.innerHTML = ele.rating;

        let stock = document.createElement("p");
        stock.innerHTML = ele.stock;

        let brand = document.createElement("p");
        brand.innerHTML = ele.brand;

        let category = document.createElement("p");
        category.innerHTML = ele.category;

        let images = document.createElement("img");
        images.src = ele.images[0];

        // p.setAttribute("class", "info");

        let div = document.createElement("div");
        div.append(title, images, description, price, discountPercentage, rating, stock, brand, category);

        div.setAttribute("class", "data");

        document.getElementById("box").append(div);
    });
};


// shorting


const hedlesorting = (val) => {
    if (val == "htl") {
        product.sort((a, b) => a.price - b.price)
        uimaker();
    }

}
const hedlesortingg = (val) => {
    if (val == "lth") {
        product.sort((a, b) => b.price - a.price)
        uimaker();
    }

}


document.querySelector(".htl").addEventListener("click", () => hedlesorting("htl"))
document.querySelector(".lth").addEventListener("click", () => hedlesortingg("lth"))


// search
// document.getElementById("search").addEventListener("keypress" = (e) => {
//     if (e.key == "enter") {
//         search()
//     }
// })

// const search = () => {
//     let va = document.getElementById("search").ariaValueMax;
//     console.log(val);
// }




// api

// fetch("https://dummyjson.com/products")
//     .then(res => res.json())
//     .then((data => uimaker(data.products)))
// const ui = () => {

// }
const get = async() => {
    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json()
    console.log(data);
    uimaker(data.products)
    product = data.product
}
get()