//Страны
const countries = [
  "Афганистан",
  "Албания",
  "Антарктика",
  "Алжир",
  "Американское Самоа",
  "Андора",
  "Ангола",
  "Антигуа и Барбуда",
  "Азербайджан",
  "Аргентина",
  "Австралия",
  "Австрия",
  "Багамские Острова",
  "Бахрейн",
  "Бангладеш",
  "Армения",
  "Барбадос",
  "Бельгия",
  "Бермудские Острова",
  "Бутан",
  "Боливия",
  "Босния и Герцеговина",
  "Ботсвана",
  "Остров Буве",
  "Бразилия",
  "Белиз",
  "Британская территория в Индийском океане",
  "Соломоновы Острова",
  "Британские Виргинские острова",
  "Бруней",
  "Болгария",
  "Мьянма",
  "Бурунди",
  "Белоруссия",
  "Камбоджа",
  "Камерун",
  "Канада",
  "Кабо-Верде",
  "Каймановы острова",
  "Центральноафриканская Республика",
  "Шри-Ланка",
  "Чад",
  "Чили",
  "Китайская Народная Республика",
  "Остров Рождества",
  "Кокосовые острова",
  "Колумбия",
  "Коморы",
  "Майотта",
  "Республика Конго",
  "Демократическая Республика Конго",
  "Острова Кука",
  "Коста-Рика",
  "Хорватия",
  "Куба",
  "Кипр",
  "Чехия",
  "Бенин",
  "Дания",
  "Доминика",
  "Доминиканская Республика",
  "Эквадор",
  "Сальвадор",
  "Экваториальная Гвинея",
  "Эфиопия",
  "Эритрея",
  "Эстония",
  "Фарерские острова",
  "Фолклендские острова",
  "Южная Георгия и Южные Сандвичевы острова",
  "Фиджи",
  "Финляндия",
  "Аландские острова",
  "Франция",
  "Французская Гвиана",
  "Французская Полинезия",
  "Французские Южные и Антарктические территории",
  "Джибути",
  "Габон",
  "Грузия",
  "Гамбия",
  "Палестина",
  "Германия",
  "Гана",
  "Гибралтар",
  "Кирибати",
  "Греция",
  "Гренландия",
  "Гренада",
  "Гваделупа",
  "Гуам",
  "Гватемала",
  "Гвинея",
  "Гайана",
  "Республика Гаити",
  "Остров Херд и острова Макдональд",
  "Ватикан",
  "Гондурас",
  "Гонконг",
  "Венгрия",
  "Исландия",
  "Индия",
  "Индонезия",
  "Иран",
  "Ирак",
  "Ирландия",
  "Израиль",
  "Италия",
  "Кот-д’Ивуар",
  "Ямайка",
  "Япония",
  "Казахстан",
  "Иордания",
  "Кения",
  "КНДР",
  "Республика Корея",
  "Кувейт",
  "Киргизия",
  "Лаос",
  "Ливан",
  "Лесото",
  "Латвия",
  "Либерия",
  "Ливия",
  "Лихтенштейн",
  "Литва",
  "Люксембург",
  "Макао",
  "Мадагаскар",
  "Малави",
  "Малайзия",
  "Мальдивы",
  "Мали",
  "Мальта",
  "Мартиника",
  "Мавритания",
  "Маврикий",
  "Мексика",
  "Монако",
  "Монголия",
  "Молдавия",
  "Черногория",
  "Монтсеррат",
  "Марокко",
  "Мозамбик",
  "Оман",
  "Намибия",
  "Науру",
  "Непал",
  "Нидерланды",
  "Кюрасао",
  "Аруба",
  "Синт-Мартен",
  "Бонэйр, Синт-Эстатиус и Саба",
  "Новая Каледония",
  "Вануату",
  "Новая Зеландия",
  "Никарагуа",
  "Нигер",
  "Нигерия",
  "Ниуэ",
  "Норфолк",
  "Норвегия",
  "Северные Марианские острова",
  "Внешние малые острова США",
  "Микронезия",
  "Маршалловы Острова",
  "Палау",
  "Пакистан",
  "Панама",
  "Папуа — Новая Гвинея",
  "Парагвай",
  "Перу",
  "Филиппины",
  "Острова Питкэрн",
  "Польша",
  "Португалия",
  "Гвинея-Бисау",
  "Восточный Тимор",
  "Пуэрто-Рико",
  "Катар",
  "Реюньон",
  "Румыния",
  "Россия",
  "Руанда",
  "Сен-Бартелеми",
  "Острова Святой Елены, Вознесения и Тристан-да-Кунья",
  "Сент-Китс и Невис",
  "Ангилья",
  "Сент-Люсия",
  "Сен-Мартен (Франция)",
  "Сен-Пьер и Микелон",
  "Сент-Винсент и Гренадины",
  "Сан-Марино",
  "Сан-Томе и Принсипи",
  "Саудовская Аравия",
  "Сенегал",
  "Сербия",
  "Сейшельские Острова",
  "Сьерра-Леоне",
  "Сингапур",
  "Словакия",
  "Словения",
  "Сомали",
  "Южно-Африканская Республика",
  "Зимбабве",
  "Испания",
  "Южный Судан",
  "Судан",
  "Западная Сахара",
  "Суринам",
  "Шпицберген и Ян-Майен",
  "Свазиленд",
  "Швеция",
  "Швейцария",
  "Сирия",
  "Таджикистан",
  "Таиланд",
  "Того",
  "Токелау",
  "Тонга",
  "Тринидад и Тобаго",
  "Объединённые Арабские Эмираты",
  "Тунис",
  "Турция",
  "Туркмения",
  "Теркс и Кайкос",
  "Тувалу",
  "Уганда",
  "Украина",
  "Республика Македония",
  "Египет",
  "Великобритания",
  "Гернси",
  "Джерси",
  "Остров Мэн",
  "Танзания",
  "США",
  "Виргинские Острова",
  "Буркина-Фасо",
  "Уругвай",
  "Узбекистан",
  "Венесуэла",
  "Уоллис и Футуна",
  "Самоа",
  "Йемен",
  "Замбия",
].sort();

//Возраста
const agesOrdinary = ["0", "6", "12", "16", "18"];

export { countries, agesOrdinary };
