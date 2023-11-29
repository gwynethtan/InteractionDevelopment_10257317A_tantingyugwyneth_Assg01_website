function purchase(image, item, quantity, price) {
    this.image = image;
    this.item = item;
    this.quantity = quantity;
    this.price = price;
    this.purchase_info = function () {
        let newDiv1 = document.createElement("div");
        newDiv1.classList.add("mystyle");
        newDiv1.innerHTML = "Waffle pack <br>";
        document.body.appendChild(newDiv1);
    }
}

let waffle = new purchase('Waffle', 0, 6, /* provide the correct price */);

var w = document.getElementById('waffle_button');

w.addEventListener('click', function() {
    waffle.purchase_info();
}, false);