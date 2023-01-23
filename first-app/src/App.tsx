import "./App.css";

function App() {
  return (
    <div className="App">
      {
        <div>
          <header>
            <img src="./React/first-app/src/logo.jpg" alt="neveikia" />
          </header>

          <nav className="navigation-bar">
            <div className="used-container">Home</div>
            <div className="used-container">Product</div>
            <div className="used-container">Company</div>
            <div className="used-container">Contact</div>
            <div className="unused-container"></div>
          </nav>

          <main>
            <section className="first-section">
              <div>Header image</div>
            </section>
            <section className="second-section">
              <div>
                <div>About</div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  quisquam provident illum minus! Veritatis recusandae harum
                  tempora, repudiandae corrupti cupiditate deleniti, iste quo,
                  omnis totam nulla. Dolor, doloribus a. Totam.
                </div>
              </div>
              <div>
                <div>Company</div>
                <div className="text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                  earum deleniti soluta sit harum excepturi repellat qui
                  explicabo eos dolor eveniet modi itaque ad ab adipisci
                  laboriosam quidem, sint ex.
                </div>
              </div>
              <div>
                <div>Services</div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident quas magni minus, fuga pariatur totam quaerat
                  repellendus labore neque illum expedita voluptatum in, quia
                  dolorum nemo molestiae velit ratione consectetur.
                </div>
              </div>
            </section>

            <section className="third-section">
              <div className="first-container">
                <div>Content</div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  quidem deserunt quam earum culpa vel repellat temporibus neque
                  harum voluptatem praesentium delectus libero iusto asperiores
                  incidunt, pariatur veniam. Qui, ducimus?
                </div>
                <div>Sub header</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis blanditiis numquam necessitatibus facilis deleniti
                  aliquid cum facere totam neque dolor reprehenderit ut, modi,
                  suscipit debitis hic obcaecati! Praesentium, sint quo.
                </div>
              </div>
              <div className="second-container">
                <div>Navigation</div>
                <div>
                  <div>Home</div>
                  <div>Product</div>
                  <div>Company</div>
                  <div>Contact</div>
                </div>
              </div>
            </section>
          </main>
        </div>
      }
    </div>
  );
}

export default App;
