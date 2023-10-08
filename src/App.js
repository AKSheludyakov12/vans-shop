import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import StoreBlock from "./components/StoreBlcok";
import stock from "./assets/stock.json"

function App() {
  console.log(stock)
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все товары</h2>
            <div className="content__items">{stock.map((obj) => (
              <StoreBlock 
              key = {obj.id}
              {...obj} />
            ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
