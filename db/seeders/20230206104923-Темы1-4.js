/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Themes",
      [
        {
          name: "Путешествия",
          image: "https://cdn-icons-png.flaticon.com/512/826/826070.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Фильмы",
          image: "https://cdn-icons-png.flaticon.com/512/3574/3574820.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Музыка",
          image: "https://cdn-icons-png.flaticon.com/512/2829/2829075.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Космос",
          image: "https://cdn-icons-png.flaticon.com/512/5122/5122298.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Любимый JS",
          image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Спорт",
          image: "https://cdn-icons-png.flaticon.com/512/3311/3311579.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Блатной жаргон",
          image: "https://cdn-icons-png.flaticon.com/512/8858/8858948.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Avatars",
      [
        {
          name: "Котэ",
          url: "https://cdn-icons-png.flaticon.com/512/2171/2171991.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Песик",
          url: "https://cdn-icons-png.flaticon.com/512/2395/2395708.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мэн",
          url: "https://cdn-icons-png.flaticon.com/512/1864/1864509.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Леди",
          url: "https://cdn-icons-png.flaticon.com/512/949/949635.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Бабуля",
          url: "https://cdn-icons-png.flaticon.com/512/3554/3554891.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Batman",
          url: "https://cdn-icons-png.flaticon.com/512/1674/1674291.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ninja",
          url: "https://cdn-icons-png.flaticon.com/512/1071/1071164.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Joker",
          url: "https://cdn-icons-png.flaticon.com/512/3370/3370024.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lion",
          url: "https://cdn-icons-png.flaticon.com/512/4081/4081551.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bigfoot",
          url: "https://cdn-icons-png.flaticon.com/512/2534/2534422.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Robot",
          url: "https://cdn-icons-png.flaticon.com/512/2814/2814666.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: " Cowboy",
          url: "https://cdn-icons-png.flaticon.com/512/3429/3429332.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ironman",
          url: "https://cdn-icons-png.flaticon.com/512/892/892721.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Deadpool",
          url: "https://cdn-icons-png.flaticon.com/512/1090/1090740.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spiderman",
          url: "https://cdn-icons-png.flaticon.com/512/1090/1090806.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Xman",
          url: "https://cdn-icons-png.flaticon.com/512/663/663089.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Strange",
          url: "https://cdn-icons-png.flaticon.com/512/9238/9238583.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Harry Potter",
          url: "https://cdn-icons-png.flaticon.com/512/195/195138.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question:
            "Столицей какого европейского государства является город Вена?",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Какая страна считается родиной танго?",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Какую европейскую страну ещё называют Голландией?",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "В какой стране располагается остров Тайвань?",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Какая река вытекает из озера Байкал?",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Какой континент почти наполовину покрыт пустынями?",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Столицей какого государства является город Тирана?",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Название какой реки России по одной из версий произошло от слова, которое в переводе с языка коми означает «снег», «снежный сугроб», «место у снега»?",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Алдан и Вилюй — это два главных притоков реки...",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какая часть света является крупнейшей по занимаемой территории?",
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "В фильме «Приключения Паддингтона» главным героем является ...",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Кому досталась роль Чёрной вдовы в супергеройском блокбастере «Мстители»",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Как называется фильм, который рассказывает историю успеха британской рок-группы Queen с Рами Малеком в главной роли?",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "«Знаешь, мама Вер, я вообще решила замуж не выходить. Одной спокойнее, правда? Хочу халву ем, хочу пряники». Героине какого знаменитого фильма принадлежит это цитата?",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какому персонажу из фильма «Двенадцать стульев» принадлежит фраза: «Время, которое у нас есть, — это деньги, которых у нас нет»? ",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Кем работала Надя Шевелёва в фильме «Ирония судьбы, или С лёгким паром!»?",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Трус, Балбес и Бывалый появляются в фильме ...",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Это великий детектив и бельгиец по происхождению стал главным героем 33 романов. В телесереале его роль блистательно исполнил Дэвид Суше.",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Как называется корейский фильм о социальном неравенстве и столкновении представителей разных слоёв общества, высоко оценённый критиками и зрителями?",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Роль Джокера в одноимённом фильме Тодда Филлипса блистательно воплотил актёр ...",
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Как звали девушку, которая в пору цветения яблонь и груш «выходила на берег крутой»?",
          themeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Кого называют «крестным отцом» панк-рока, жанра рок-музыки?",
          themeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Как называется коллектив, состоящий из пяти музыкантов?",
          themeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Как называется музыкальная композиция, взятая из фильма?",
          themeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "В каком городе появилась знаменитая британская рок-группа The Beatles?",
          themeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "О каком певце говорили и говорят, что он «король поп-музыки»?",
          themeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Из какой страны родом культовое поп-трио A-ha?",
          themeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Он раскудрявый, зелёный и лист у него резной.",
          themeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Скорость движения музыки - это..",
          themeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Как называется струнный смычковый музыкальный инструмент, по размеру превышающий скрипку?",
          themeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какая планета является самой большой планетой Солнечной системы?",
          themeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Какую планету первой посетили космические аппараты людей?",
          themeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какая планета является ближайшей к Солнцу планетой Солнечной системы?",
          themeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Как называется самый крупный естественный спутник Сатурна?",
          themeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какая планета до 2006 года считалась девятой планетой Солнечной Системы?",
          themeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Спутниками какой планеты являются естесвенные спутники Фобос и Деймос?",
          themeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Что находится в центре галактики Млечный Путь?",
          themeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Какой элемент составляет большую часть массы Солнца?",
          themeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Что ослабляет воздействие ультрафиолетовой части солнечного спектра?",
          themeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какой витамин синтезируется в организме человека под воздействием солнечного излучения?",
          themeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Что представляет собой значение Infinity?",
          themeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Чем в JavaScript является функция?",
          themeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Сколько значений в JavaScript может принимать логический тип? ",
          themeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Частью какой конструкции языка JavaScript является ключевое слово else?",
          themeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Вместе с какой инструкцией используется case? ",
          themeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Какой тип значений возвращает оператор typeof?",
          themeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "ожно ли переменную назвать case?",
          themeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Поддерживаются ли в JavaScript вложенные многострочные комментарии?",
          themeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Нужна ли в конце комментария точка с запятой?",
          themeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Можно ли в JavaScript в переменную, в которой ранее хранилось целое число записать объект?",
          themeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Как по-другому называется стиль плавания «баттерфляй»?",
          themeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Спортсмен, который ходит сидя - это...",
          themeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "В какой игре используются мяч наибольшей величины?",
          themeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Боксёрская трёхминутка - это...",
          themeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Передача мяча в игре называется...",
          themeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Передача мяча в игре называется...",
          themeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какая спортивная организация имеет девиз «Сила в движении»?",
          themeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Одно из первых его названий — «ось Аполлона». Что это за снаряд?",
          themeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "В какой стране были приняты первые правила для игры в теннис?",
          themeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Как называется штрафной бросок в хоккее?",
          themeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Продолжи фразу:"Бог создал Вора — ...',
          themeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Редиска - это...",
          themeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Как называют вора в законе или уважаемую личность в криминальном мире?",
          themeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "В местах лишения свободы являются любые доносчики называются...",
          themeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "На зоне это слово обозначает драку, а за пределами тюрьмы — любой шум, неразбериху или переполох",
          themeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Совокупность членов определённой преступной группировки, банда называется...",
          themeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Сейчас мы шутливо называем так своего друга или товарища, то в криминальном мире кентом является соучастник преступления или человек, придерживающийся криминальных понятий",
          themeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Отвлечение внимания, польза, действие, совершаемое напоказ, демонстративная роскошь - это...",
          themeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Это человек, который прислуживает ворам ",
          themeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Тюремная похлёбка называется...",
          themeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Answers",
      [
        {
          answer: "Австрия",
          questionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Аргентина",
          questionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Нидерланды",
          questionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Китай",
          questionId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Ангара",
          questionId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Австралия",
          questionId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Албания",
          questionId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Обь",
          questionId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Лена",
          questionId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Азия",
          questionId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Медвежонок",
          questionId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Скарлетт Йоханссон",
          questionId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Богемская рапсодия",
          questionId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Девчата",
          questionId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Остапу Бендеру или Остапу Бендеру",
          questionId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Учитель или учительница",
          questionId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Самогонщики",
          questionId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Эркюль Пуаро",
          questionId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Паразиты",
          questionId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Хоакин Феникс",
          questionId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Катюша",
          questionId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Игги Попа",
          questionId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Квинтет",
          questionId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Саундтрек",
          questionId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Ливерпуль",
          questionId: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Майкл Джексон",
          questionId: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Норвегия",
          questionId: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Клён",
          questionId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Темп",
          questionId: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Виолончель",
          questionId: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Юпитер",
          questionId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Венеру",
          questionId: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Меркурий",
          questionId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Титан",
          questionId: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Плутон",
          questionId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Марса",
          questionId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Чёрная дыра",
          questionId: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Водород",
          questionId: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Озоновый слой",
          questionId: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "D",
          questionId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          answer: "Математическую бесконечность",
          questionId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Объектом",
          questionId: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Два",
          questionId: 43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Условие",
          questionId: 44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "switch",
          questionId: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Строку",
          questionId: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Нет",
          questionId: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Нет",
          questionId: 48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Нет",
          questionId: 49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Да",
          questionId: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Дельфин",
          questionId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Шахматист",
          questionId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Баскетбол",
          questionId: 53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Раунд",
          questionId: 54,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Пас",
          questionId: 55,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Фигурист",
          questionId: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Динамо",
          questionId: 57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Штанга",
          questionId: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Франция",
          questionId: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "буллит",
          questionId: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "черт прокурора",
          questionId: 61,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "нехороший человек",
          questionId: 62,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Авторитет",
          questionId: 63,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "стукач",
          questionId: 64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Кипеж",
          questionId: 65,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "братва",
          questionId: 66,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Кент",
          questionId: 67,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Понт",
          questionId: 68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Шестёрка",
          questionId: 69,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "Баланда",
          questionId: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes", null, {});
    await queryInterface.bulkDelete("Avatars", null, {});
    await queryInterface.bulkDelete("Questions", null, {});
    await queryInterface.bulkDelete("Answers", null, {});
  },
};
