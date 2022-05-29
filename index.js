// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const firstUser = {
    name: "monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: new Set(),
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
    favoriteRestaurant: new Set(),
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: new Set(),
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
    favoriteRestaurant: new Set(),
};

//memasukkan nilai favoriteColor
//firstUser
firstUser.favoriteColor.add("Yellow");
firstUser.favoriteColor.add("Pink");
firstUser.favoriteColor.add("White");
firstUser.favoriteColor.add("Purple");
//secondUser
secondUser.favoriteRestaurant.add("Blue");
secondUser.favoriteRestaurant.add("Black");
secondUser.favoriteRestaurant.add("Grey");

//memasukkan nilai restaurant
//firsUser
firstUser.favoriteRestaurant.add("Bento");
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant.add("Pancake");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Tampura");
firstUser.favoriteRestaurant.add("Bento");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Padang");
firstUser.favoriteRestaurant.add("Tteok");
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant.add("Sushi");
//secondUser
secondUser.favoriteRestaurant.add("Tempura");
secondUser.favoriteRestaurant.add("Bento");
secondUser.favoriteRestaurant.add("Sushi");
secondUser.favoriteRestaurant.add("Pancake");
secondUser.favoriteRestaurant.add("Padang");
secondUser.favoriteRestaurant.add("Katsu");
secondUser.favoriteRestaurant.add("Geprek");
secondUser.favoriteRestaurant.add("Pancake");
secondUser.favoriteRestaurant.add("Eggy");

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users,
};
