import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import StoreBlock from "./components/StoreBlcok";

function App() {
  const stock = [
    {
      id: "1",
      title: "Vans Old Skool",
      price: "4490",
      category: "men",
      size: [40, 41, 42],
      img: "Кеды Vans Old Skool.jpg",
    },
    {
      id: "2",
      title: "Vans Old Skool Black Checkerboard",
      price: "4490",
      category: "'men', 'women'",
      size: [38, 39, 40, 41, 42],
      img: "Vans Old Skool Black Checkerboard.jpg",
    },
    {
      id: "3",
      title: "Детские кеды Vans Old Skool",
      price: "6190",
      category: 'kids',
      size: [27, 28, 29, 30, 31, 32],
      img: "Детские кеды Vans Old Skool.jpg",
    },
  ];

  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все товары</h2>
            <div class="content__items">
              <StoreBlock stock={stock} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
