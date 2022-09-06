import { useEffect, useState } from "react";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);
  return (
    <div>
      <div className="container">
        <nav>
          <div className="title">私のポートフォリオ</div>
          <div>
            <form action="#">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkTheme}
                  onChange={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
        <section>
          <div className="content">
            <h1>Riku Tadaのポートフォリオ⭐️</h1>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
              id!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium at harum illum nisi nostrum obcaecati, soluta eaque
              facere suscipit dicta.
            </p>
            <button className="primary-btn">お問い合わせ</button>
          </div>
        </section>
      </div>
    </div>
  );
}
