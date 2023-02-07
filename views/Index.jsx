const React = require('react');
const Layout = require('./Layout');

function Index({ title, avatars }) {
  return (
    <Layout title={title}>
      <div className="text-center pt-5">
        <h1 className='text-white percent50fone rounded text-shadow'>Привет, это игра Ten Questions, перед началом, введи свое имя и выбери аватар.</h1>
      </div>
        <form id="user-form" action="/makeuser" method="post" className="d-flex flex-column justify-content-center align-items-center h-75">
          <label htmlFor="user" className='text-white text-shadow fs-3'>Введите имя игрока</label>
          <input type="text" id="user" name="userName" required className='mb-5 w-50 rounded p-2'/>
          <h2 className='text-white text-shadow mb-3'>Выберите аватар</h2>
          <div id="avatars" className='mb-5 w-50 d-dlex justify-content-around'>
            {avatars.map((el) => (
              <img id={el.id} src={el.url} alt={el.name} className="ava mb-2"/>
            ))}
          </div>
          <button type="submit" id="start-game-button" className='btn btn-outline-light'>Начать игру</button>
        </form>
    </Layout>
  );
}

module.exports = Index;
