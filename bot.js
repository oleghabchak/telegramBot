const TelegramApi = require("node-telegram-bot-api")
const token = "1150536330:AAGOwL8xJZGXlW4B5y8ZRvyYJb2vEftOlvc" 
const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: "109.94.209.66",
    port:3306,
    user: "admin6247k",
    password: "lao6247K",
    database:"trainlist"
});

const bot = new TelegramApi(token, {polling:true})
/*==================== Запити в базу даних ====================*/
const updateStat = (id) => { 
    pool.getConnection()
        .then(conn => {
          conn.query("SELECT 1 as value")
            .then(() => {
              console.log( "Successful Update!"); 
              return conn.query(`UPDATE sokaT SET value = value+1 WHERE id=${id}`);
            })   
        }).catch(err => {
          console.log(err);
        });
  }

  async function getStat(){
      
          let conn = await pool.getConnection();
          let all = await conn.query('SELECT * FROM sokaT') 
          console.log(all);
        return all
  }



const start = () => {

  
    // bot.setMyCommands([
    //     {command: "/soka", description: "Дізнатися СОКУ дня і який у неї лук"},
    //     {command: "/stat", description: "Статистика"}
    // ]);

    bot.on("message", async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        switch (text) {
            case "/stat" :
                return(
                    bot.sendMessage(chatId, 'Список сок дня'),
                    getStat()

                )
                
            case "/soka":
                    const users = [
                        {name: "Марта Жолобак", id: 1},
                        {name: "Марія Габчак", id: 2},
                        {name: "Олег Габчак", id: 3},
                        {name: "Віра Пшеничка", id: 4},
                        {name: "Сніжана Сахарчук", id: 5}
                    ]
                    let soka = users[randomNum(0, 5)]
                return (
                bot.sendMessage(chatId, `сока дня ${soka.name}`),
                updateStat(soka.id)
                )
            default:
                return bot.sendMessage(chatId, `Не вмієш ci бавити іди додому🤷‍♀️`);
        }
    })
}

start()






/*==================== рандомне число ===================*/
function randomNum(a, b) {
    return  Math.floor(Math.random() * b) + a;
    // Function returns the product of a and b
  }

console.log(randomNum(1,4));

/*==================== отримуємо день року ====================*/

let date365 = 0;

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth(); 
let currentDay = currentDate.getDate(); 

let monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];

let leapYear = new Date(currentYear, 1, 29); 
if (leapYear.getDate() == 29) { // If it's a leap year, changes 28 to 29
    monthLength[1] = 29;
}

for ( i=0; i < currentMonth; i++ ) { 
    date365 = date365 + monthLength[i];
}
date365 = date365 + currentDay; 
console.log(date365);


















/*==================== масив з Луками дня ====================*/
const looks = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/1.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/2.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/3.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/4.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/5.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/6.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    "https://cdn.tlgrm.app/stickers/14d/5af/14d5afd7-6c55-328b-b26b-a8d72beb5530/192/7.webp",
    
]