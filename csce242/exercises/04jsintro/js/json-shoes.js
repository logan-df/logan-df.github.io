const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoesSection = document.getElementById("shoes-section");
    
    shoes.forEach((shoe)=>{
        const miniShoe = document.createElement("section");
        shoesSection.append(miniShoe);
        const name = document.createElement("h3");
        name.innerHTML = shoe.name;
        miniShoe.append(name);
        const brand = document.createElement("p");
        brand.innerHTML = `Brand: ${shoe.brand}`;
        miniShoe.append(brand);
        const reviews = document.createElement("ul");
        shoesSection.append(reviews);
        shoe.reviews.forEach((review)=>{
            const li = document.createElement("li");
            li.innerHTML = review;
            reviews.append(li);
        });
    });
};

showShoes();