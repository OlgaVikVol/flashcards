const avatars = document.getElementById('avatars');
const userForm = document.getElementById('user-form');
const images = document.querySelectorAll('img');
const BODY = document.querySelector('body');

let avatar = '';
let avatarId;

avatars.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    avatar = '';
    for (let i = 0; i < images.length; i += 1) {
      images[i].classList.remove('active-avatar');
    }
    e.target.classList.add('active-avatar');
    avatar = e.target.src;
    avatarId = e.target.id;
  }
});

userForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userName = e.target.userName.value;
  const data = { avatar, userName };
  try {
    const response = await fetch('/game/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    BODY.innerHTML = `
      <header class="d-flex justify-content-start align-items-center rounded">
        <div class ="logo d-flex justify-content-start"><img src="https://cdn-icons-png.flaticon.com/512/3240/3240831.png" alt="logo" class="nav-logo"/><h1 class="me-2 my-auto">Ten Questions</h1></div>
        <div class ="ms-3 fs-2"><a class ="nav-link" id="stats" href="/*">Статистика</a></div>
        <div class ="ms-3 fs-2"><a class ="nav-link" id="designers" href="/*">Разработчики</a></div>
        <div class ="ms-auto me-3 fs-2"><a class ="nav-link" id="designers" href="/*">Личный кабинет <img src=${avatar} alt="avatar" class="nav-ava"/></a></div>
      </header>
    `;

    const cardsContainer = document.createElement('div');
    cardsContainer.classList = 'd-flex justify-content-evenly align-items-start mt-5 flex-wrap';
    cardsContainer.id = 'cardsContainer';
    result.forEach((el) => {
      cardsContainer.innerHTML += `
      <div id="card${el.id}" class="card mb-5">
        <img src=${el.image} alt="" class="card-image rounded"/>
        <h3>${el.name}</h3>
        <button type="button" id="start-card-button" class="btn btn-outline-dark">Начать</button>
      </div>
      `;
    });

    cardsContainer.innerHTML += `
      <div id="addCard" class="empty-card rounded mb-5">
        <button type="button" id="add-card-button" class="btn add-button btn-outline-dark">+</button>
      </div>
      `;

    BODY.appendChild(cardsContainer);

    const designers = document.getElementById('designers');

    const cardsCont = document.getElementById('cardsContainer');

    const statictic = document.getElementById('stats');

    statictic.addEventListener('click', async (epr) => {
      epr.preventDefault();
      cardsCont.classList.add('d-none');
      try {
        const respons = await fetch('/game/statistic', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        const allStats = await respons.json();

        const stat = document.createElement('div');
        stat.id = 'stat';

        stat.innerHTML = '<h2 class="text-white text-center">Статистика всех игроков</h2>';

        const statTable = document.createElement('table');
        statTable.classList = 'percent50fone w-100';
        statTable.innerHTML += `
        <tr class="text-white text-center text-shadow">
        <th class="ms-5">№</th>
        <th class="ms-5">Аватар</th>
        <th class="ms-5">Имя игрока</th>
        <th class="ms-5">Тема</th>
        <th class="ms-5">Очки за партию</th>
        <th class="ms-5">Правильные ответы</th>
        <th class="ms-5">Неправильные ответы</th>
        <th class="ms-5">Дата игры</th>
        <th class="ms-5">Отвечено вопросов</th>
        </tr>
        `;

        for (let i = 0; i < allStats.length; i += 1) {
          statTable.innerHTML += `
          <tr class="text-white text-center text-shadow">
            <td class="ms-5">${allStats[i].id}</td>
            <td class="ms-5"><img  class="ava-stat" src=${allStats[i].Avatar.url} alt=""></td>
            <td class="ms-5">${allStats[i].player}</td>
            <td class="ms-5">${allStats[i].Theme.name}</td>
            <td class="ms-5">${allStats[i].points}</td>
            <td class="ms-5">${allStats[i].rigthAnswers}</td>
            <td class="ms-5">${allStats[i].wrongAnswers}</td>
            <td class="ms-5">${allStats[i].dateOfGame}</td>
            <td class="ms-5">${allStats[i].totalQuestions}</td>
          </tr>
                  `;
        }
        stat.appendChild(statTable);
        BODY.appendChild(stat);

        const closeDesignersButton = document.createElement('button');
        closeDesignersButton.id = 'closeDesignersButton';
        closeDesignersButton.classList = 'd-block btn btn-outline-light mx-auto my-5 game-button';
        closeDesignersButton.textContent = 'Вернуться к карточкам';

        const state = document.getElementById('stat');

        closeDesignersButton.addEventListener('click', (eprreg) => {
          eprreg.target.remove();
          state.remove();
          cardsCont.classList.remove('d-none');
        });

        BODY.insertBefore(closeDesignersButton, state);
      } catch (error) {
        console.log(error);
      }
    });

    designers.addEventListener('click', (event) => {
      event.preventDefault();
      cardsCont.classList.add('d-none');

      const containterOfDesigners = document.createElement('div');
      containterOfDesigners.id = 'containterOfDesigners';
      containterOfDesigners.classList = 'd-flex justify-content-around align-content-around flex-wrap';
      containterOfDesigners.innerHTML = `
      <div class="p-2 text-center align-text-center bg-white rounded w-25 m-5">
    <img class="designer-img" src="https://cdn-icons-png.flaticon.com/512/3136/3136604.png" alt="">
    <h2>Антон Боженко</h2>
    <p class="text-secondary">Тим-лид, Frontend, Backend</p>
</div>
<div class="p-2 text-center align-text-center bg-white rounded w-25 m-5">
    <img class="designer-img" src="https://cdn-icons-png.flaticon.com/512/2118/2118621.png" alt="">
    <h2>Ольга Волобуева</h2>
    <p class="text-secondary">Разработка базы данных, карточек вопросов и создание API</p>
</div>
<div class="p-2 text-center align-text-center bg-white rounded w-25 m-5">
    <img class="designer-img" src="https://cdn-icons-png.flaticon.com/512/663/663076.png" alt="">
    <h2>Максим Миков</h2>
    <p class="text-secondary">Backend и создание API</p>
</div>
<div class="p-2 text-center align-text-center bg-white rounded w-25 mb-5 me-5 ms-5">
    <img class="designer-img" src="https://e7.pngegg.com/pngimages/243/402/png-clipart-robby-kolanz-microphone-smile-laughter-entrepreneurship-microphone-electronics-microphone-thumbnail.png" alt="">
    <h2>Дмитрий Шаренко</h2>
    <p class="text-secondary">Разработка базы данных, карточек вопросов и создание компонентов для приложения</p>
</div>
      `;

      BODY.appendChild(containterOfDesigners);

      const closeDesignersButton = document.createElement('button');
      closeDesignersButton.id = 'closeDesignersButton';
      closeDesignersButton.classList = 'd-block btn btn-outline-light mx-auto mt-5 game-button';
      closeDesignersButton.textContent = 'Вернуться к карточкам';

      const desgn = document.getElementById('containterOfDesigners');

      closeDesignersButton.addEventListener('click', (etye) => {
        etye.target.remove();
        desgn.remove();
        cardsCont.classList.remove('d-none');
      });

      BODY.insertBefore(closeDesignersButton, desgn);
    });

    const addCardButton = document.getElementById('add-card-button');

    addCardButton.addEventListener('click', () => {
      cardsCont.classList.add('d-none');

      const createField = document.createElement('div');
      createField.id = 'createField';
      createField.classList = 'w-50 py-3 d-flex flex-column justify-content-around align-items-center mx-auto';

      createField.innerHTML = `
          <p id="questionNumber" class="text-white text-shadow percent50fone text-center align-text-center rounded fs-4">Введите название темы, можете вставить URL картинки, которая будет использоваться в качестве заставки к вашей карточке, иначе будет отображаться стандартная заставка, после этого заполните содержание для каждого вопроса и ответа, ответ желательно должен состоять из одного слова или словосочетания из двух-трех слов</p>
          `;

      const createForm = document.createElement('form');
      createForm.action = '*';
      createForm.id = 'create-form';
      createForm.classList = 'w-100 d-flex flex-column align-items-center pb-2';

      createForm.innerHTML += `
      <label for="theme" class="text-white text-shadow fs-5">Название темы</label><br>
      <input id="theme" type="text" name="theme" class="w-100 p-2 mb-3 rounded" required>
      <label for="image" class="text-white text-shadow fs-5">Картинка к карточке</label><br>
      <input id="image" type="text" name="image" class="w-100 p-2 mb-3 rounded">
      `;

      for (let i = 1; i < 11; i += 1) {
        createForm.innerHTML += `
        <div class="w-100 d-flex mb-2 px-3 flex-column align-items-center percent50fone rounded">
          <label for="q${i}" class="text-black text-shadow-white">Вопрос № ${i}</label>
          <input id="q${i}" type="text" name="q${i}" class="w-100 p-1 mb-2 mt-0 rounded" required>
          <label for="a${i}" class="text-black text-shadow-white">Ответ</label>
          <input id="a${i}" type="text" name="a${i}" class="w-100 p-1 mb-2 rounded" required>
        </div>`;
      }

      createForm.innerHTML += `
      <div class="w-100 d-flex justify-content-evenly">
        <button type="submit" class="w-25 btn btn-outline-light game-button text-shadow">Создать</button>
        <button type="button" class="w-25 btn btn-outline-light game-button text-shadow" id="cancel">Отменить создание</button>
      </div>
      `;

      createField.appendChild(createForm);

      BODY.appendChild(createField);

      const createFiel = document.getElementById('createField');
      const cancel = document.getElementById('cancel');
      cancel.addEventListener('click', () => {
        createFiel.remove();
        cardsCont.classList.remove('d-none');
      });

      const createFor = document.getElementById('create-form');
      createFor.addEventListener('submit', async (etve) => {
        etve.preventDefault();
        try {
          const name = etve.target.theme.value;
          const image = etve.target.image.value || 'https://cdn-icons-png.flaticon.com/512/5726/5726775.png';
          const dt = { name, image };
          const respons = await fetch('/game/createtheme', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dt),
          });

          const resu = await respons.json();

          try {
            const questions = [];
            const themeId = resu.id;
            const themeImg = resu.image;
            const themeN = resu.name;
            for (let i = 1; i < 11; i += 1) {
              const question = etve.target[`q${i}`].value;
              questions.push({ question, themeId });
            }
            const res = await fetch('/game/createquestions', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(questions),
            });

            const re = await res.json();

            try {
              const answers = [];
              const questionsIds = re;
              for (let i = 1; i < 11; i += 1) {
                const questionId = questionsIds[i - 1].id;
                const answer = etve.target[`a${i}`].value;
                answers.push({ answer, questionId });
              }

              const reson = await fetch('/game/createanswers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(answers),
              });

              if (reson.status === 200) {
                createFiel.remove();
                const addCard = document.getElementById('addCard');

                const newCard = document.createElement('div');
                newCard.id = `card${themeId}`;
                newCard.classList = 'card mb-5';
                newCard.innerHTML = `
                  <img src=${themeImg} alt="" class="card-image rounded"/>
                  <h3>${themeN}</h3>
                  <button type="button" id="start-card-button" class="btn btn-outline-dark">Начать</button>
                `;
                cardsCont.insertBefore(newCard, addCard);

                cardsCont.classList.remove('d-none');
              }
            } catch (error) {
              console.log(error);
            }
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      });
    });

    cardsCont.addEventListener('click', async (evt) => {
      if (evt.target.id === 'start-card-button') {
        cardsCont.classList.add('d-none');
        const themeId = +evt.target.closest('div').id.slice(4);
        const themeName = evt.target.previousElementSibling.textContent;

        const dat = { themeId };
        try {
          const respons = await fetch('/game/play', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dat),
          });

          const reslt = await respons.json();

          let q = 0;
          let points = 0;
          let rigthAnswers = 0;
          let wrongAnswers = 0;

          const gameField = document.createElement('div');
          gameField.id = 'gameField';
          gameField.classList = 'w-50 h-75 d-flex flex-column justify-content-around align-items-center mx-auto';

          gameField.innerHTML = `
          <h1 id="questionNumber" class="text-white text-shadow">Вопрос № ${q + 1}</h1>
          <div class="percent50fone text-center align-text-center px-2 pt-2 pb-0 rounded">
            <p id="questionText" class="text-white text-shadow fs-3">${reslt[q].question}</p>
          </div>
          <form action="*" id="answer-form" class="w-100 d-flex flex-column align-items-center">
            <label for="answer" class="text-white text-shadow fs-5">Введите ваш ответ:</label><br>
            <input id="answer" type="text" name="answer" class="w-50 p-2 mb-3 rounded" required>
            <div class="w-100 d-flex justify-content-evenly">
              <button type="submit" class="w-25 btn btn-outline-light game-button text-shadow">Ответить</button>
              <button type="button" class="w-25 btn btn-outline-light game-button text-shadow" id="skip">Пропустить</button>
            </div>
          </form>
          <button type="button" id="lose" class="w-25 btn btn-outline-light game-button text-shadow">Проиграть</button>
          `;

          BODY.appendChild(gameField);

          const gameF = document.getElementById('gameField');

          const answerForm = document.getElementById('answer-form');
          const skipButton = document.getElementById('skip');
          const loseButton = document.getElementById('lose');

          const questionNumber = document.getElementById('questionNumber');
          const questionText = document.getElementById('questionText');

          loseButton.addEventListener('click', async () => {
            gameF.innerHTML = `
            <h1 id="questionNumber">Партия завершена</h1>
            <h3 class="text-decoration-underline">Итого</h3>
            <p class="fs-4">Тема: ${themeName}</p>
            <p class="fs-4">Очки: ${points}</p>
            <p class="fs-4">Пройдено вопросов: ${q}</p>
            <p class="fs-4">Правильных ответов: ${rigthAnswers}</p>
            <p class="fs-4">Неправильных ответов: ${wrongAnswers}</p>
            <button type="button" id="home" class="btn btn-outline-light game-button mt-4">Играть еще</button>
            `;
            gameF.classList = 'w-50 h-50 mx-auto mt-5 text-center align-text-center text-white text-shadow';

            const homeButton = document.getElementById('home');
            homeButton.addEventListener('click', () => {
              gameF.remove();
              cardsCont.classList.remove('d-none');
            });
            try {
              const d = {
                themeId, points, rigthAnswers, wrongAnswers, avatarId, totalQuestions: q,
              };
              const respo = await fetch('/game/finish', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(d),
              });
            } catch (error) {
              console.log(error);
            }
          });

          skipButton.addEventListener('click', async () => {
            q += 1;
            points -= 5;
            wrongAnswers += 1;

            const answ = document.getElementById('answer');
            answ.value = '';

            const resultWindow = document.createElement('div');
            resultWindow.id = 'resultWindow';
            resultWindow.classList = ('w-50 h-25 bg-light text-center rounded');
            resultWindow.innerHTML = `
            <p class="fs-5">Вы пропустили вопрос, -5 очков</p>
            <button type="button" id="ok" class="btn btn-outline-dark w-25">OK</button>
            `;

            BODY.appendChild(resultWindow);

            const okButton = document.getElementById('ok');
            okButton.addEventListener('click', async (evtn) => {
              evtn.target.parentNode.remove();
            });

            if (q === 10) {
              gameF.innerHTML = `
              <h1 id="questionNumber">Партия завершена</h1>
              <h3 class="text-decoration-underline">Итого</h3>
              <p class="fs-4">Тема: ${themeName}</p>
              <p class="fs-4">Очки: ${points}</p>
              <p class="fs-4">Пройдено вопросов: ${q}</p>
              <p class="fs-4">Правильных ответов: ${rigthAnswers}</p>
              <p class="fs-4">Неправильных ответов: ${wrongAnswers}</p>
              <button type="button" id="home" class="btn btn-outline-light game-button mt-4">Играть еще</button>
              `;
              gameF.classList = 'w-50 h-50 mx-auto mt-5 text-center align-text-center text-white text-shadow';

              const homeButton = document.getElementById('home');
              homeButton.addEventListener('click', () => {
                gameF.remove();
                cardsCont.classList.remove('d-none');
              });

              try {
                const d = {
                  themeId, points, rigthAnswers, wrongAnswers, avatarId, totalQuestions: q,
                };
                const respo = await fetch('/game/finish', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(d),
                });
              } catch (error) {
                console.log(error);
              }
            } else {
              questionNumber.textContent = `Вопрос № ${q + 1}`;
              questionText.textContent = reslt[q].question;
            }
          });

          answerForm.addEventListener('submit', async (even) => {
            even.preventDefault();
            const answer = even.target.answer.value || 'abcd6661488xhjbb!2%$%^%^';
            even.target.answer.value = '';
            const questionId = reslt[q].id;
            const da = { questionId };
            try {
              const respon = await fetch('/game/answer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(da),
              });

              const rest = await respon.json();

              if (rest.answer.toLowerCase().includes(answer.toLowerCase())) {
                q += 1;
                points += 5;
                rigthAnswers += 1;

                const resultWindow = document.createElement('div');
                resultWindow.id = 'goodResultWindow';
                resultWindow.classList = ('w-50 h-25 bg-light text-center rounded');
                resultWindow.innerHTML = `
                <p class="fs-5">Правильный ответ, +5 очков</p>
                <button type="button" id="ok" class="btn btn-outline-dark w-25">OK</button>
              `;

                BODY.appendChild(resultWindow);

                const okButton = document.getElementById('ok');
                okButton.addEventListener('click', (evtn) => {
                  evtn.target.parentNode.remove();
                });
              } else {
                q += 1;
                points -= 5;
                wrongAnswers += 1;

                const resultWindow = document.createElement('div');
                resultWindow.id = 'resultWindow';
                resultWindow.classList = ('w-50 h-25 bg-light text-center rounded');
                resultWindow.innerHTML = `
                <p class="fs-5">Неправильный ответ, -5 очков</p>
                <button type="button" id="ok" class="btn btn-outline-dark w-25">OK</button>
              `;

                BODY.appendChild(resultWindow);

                const okButton = document.getElementById('ok');
                okButton.addEventListener('click', (evtn) => {
                  evtn.target.parentNode.remove();
                });
              }

              if (q === 10) {
                gameF.innerHTML = `
                <h1 id="questionNumber">Партия завершена</h1>
              <h3 class="text-decoration-underline">Итого</h3>
              <p class="fs-4">Тема: ${themeName}</p>
              <p class="fs-4">Очки: ${points}</p>
              <p class="fs-4">Пройдено вопросов: ${q}</p>
              <p class="fs-4">Правильных ответов: ${rigthAnswers}</p>
              <p class="fs-4">Неправильных ответов: ${wrongAnswers}</p>
              <button type="button" id="home" class="btn btn-outline-light game-button mt-4">Играть еще</button>
              `;

                gameF.classList = 'w-50 h-50 mx-auto mt-5 text-center align-text-center text-white text-shadow';

                const homeButton = document.getElementById('home');
                homeButton.addEventListener('click', () => {
                  gameF.remove();
                  cardsCont.classList.remove('d-none');
                });

                try {
                  const d = {
                    themeId, points, rigthAnswers, wrongAnswers, avatarId, totalQuestions: q,
                  };
                  const respo = await fetch('/game/finish', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(d),
                  });
                } catch (error) {
                  console.log(error);
                }
              } else {
                questionNumber.textContent = `Вопрос № ${q + 1}`;
                questionText.textContent = reslt[q].question;
              }
            } catch (error) {
              console.log(error);
            }
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});
