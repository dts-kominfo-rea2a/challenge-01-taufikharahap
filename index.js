// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//data Set users color dan restaurant
let colorFirst = new Set();
let colorSecond = new Set();
let restaurantFirst = new Set();
let restaurantSecond = new Set();

//memasukkan nilai colorFirst
//firstUser
colorFirst.add("Yellow");
colorFirst.add("Pink");
colorFirst.add("White");
colorFirst.add("Purple");
//secondUser
colorSecond.add("Blue");
colorSecond.add("Black");
colorSecond.add("Grey");

//memasukkan nilai restaurant
//firsUser
restaurantFirst.add("Bento");
restaurantFirst.add("Sushi");
restaurantFirst.add("Pancake");
restaurantFirst.add("Eggy");
restaurantFirst.add("Tampura");
restaurantFirst.add("Bento");
restaurantFirst.add("Eggy");
restaurantFirst.add("Padang");
restaurantFirst.add("Tteok");
restaurantFirst.add("Sushi");
restaurantFirst.add("Sushi");
//secondUser
restaurantSecond.add("Tempura");
restaurantSecond.add("Bento");
restaurantSecond.add("Sushi");
restaurantSecond.add("Pancake");
restaurantSecond.add("Padang");
restaurantSecond.add("Katsu");
restaurantSecond.add("Geprek");
restaurantSecond.add("Pancake");
restaurantSecond.add("Eggy");

const firstUser = {
    name: "monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: [...colorFirst],
    isHavePet: true,
    education: [
        {
            name: "SD 01",
            city: "Jakarta",
            graduate: 2016,
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019,
        },
        {
            name: "SMA 03",
            city: "Tangerang",
            graduate: "",
        },
    ],
    favoriteRestaurant: [...restaurantFirst],
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: [...colorSecond],
    isHavePet: false,
    education: [
        {
            name: "SD 02",
            city: "Jakarta",
            graduate: 2010,
        },
        {
            name: "SMP 03",
            city: "Bogor",
            graduate: 2013,
        },
        {
            name: "SMA 01",
            city: "Surabaya",
            graduate: "",
        },
    ],
    favoriteRestaurant: [...restaurantSecond],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users,
};
