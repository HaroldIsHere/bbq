function toggle(){
    document.getElementById("addToCart").style.display = "flex";
}

function toggleOff(){
    document.getElementById("addToCart").style.display = "none";
}

const products = [
    {
        id: 1,
        title: "Yes",
        price: 95,
    },
    {
        id: 1,
        title: "Yes",
        price: 95,
    }
]


function collectData(Getid){

    for(let i = 0; i < item.products.length; i++){
        if(Getid == products.id[i]) {
            document.getElementById('productTitle').innerHTML = products.title[i];
        }
    }
}
