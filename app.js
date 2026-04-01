const data = {
    beard: [
        {name: "Classic Beard", price: "₹80", img: "https://i.imgur.com/6VxO9yF.jpeg"},
        {name: "Fade Beard", price: "₹120", img: "https://i.imgur.com/VN5xk2y.jpeg"}
    ],
    haircut: [
        {name: "Men Haircut", price: "₹150", img: "https://i.imgur.com/Q0j5QxP.jpeg"}
    ],
    kids_haircut: [
        {name: "Kids Haircut", price: "₹120", img: "https://i.imgur.com/LxY0mjr.jpeg"}
    ]
};

const params = new URLSearchParams(window.location.search);
const type = params.get("type");

if (document.getElementById("list")) {
    document.getElementById("title").innerText = type.toUpperCase();

    data[type].forEach((item, index) => {
        document.getElementById("list").innerHTML +=
        `<div class='item'>
            <a class='btn' href="item.html?type=${type}&id=${index}">
                ${item.name} - ${item.price}
            </a>
        </div>`;
    });
}

if (document.getElementById("itemName")) {
    const id = params.get("id");
    const item = data[type][id];

    document.getElementById("itemName").innerText = item.name;
    document.getElementById("itemImg").src = item.img;
    document.getElementById("itemPrice").innerText = item.price;
                       }
