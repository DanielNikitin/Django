import './App.css';
import { useEffect } from 'react'; // Добавляем импорт useEffect из React

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();  // сообщает что приложение проинициализировано, можно отрисовывать
  }, []) // Пустой массив зависимостей означает, что эффект будет выполнен только один раз, при монтировании компонента

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
