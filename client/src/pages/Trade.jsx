import "./styles/Trade.css";
export const Trade = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <form action="">
            <section className="metals">
              <input type="radio" id="gold" name="metal" />
              <label htmlFor="gold">Gold</label>

              <input type="radio" id="silver" name="metal" />
              <label htmlFor="silver">Silver</label>
            </section>
            <section className="trade-type">
              <input type="radio" id="buy" name="tradeType" />
              <label htmlFor="buy">Buy</label>
              <input type="radio" id="sell" name="tradeType" hidden />
              <label htmlFor="sell">Sell</label>
            </section>
            <section className="goldInput">
              <input type="number" placeholder="Gold in grams" />
            </section>
            <section className="silverInput">
              <input type="number" placeholder="Silver in grams" />
            </section>

            <div class="toggle-wrapper">
              <div class="toggle checkcross">
                <input id="checkcross" type="checkbox" />
                <label class="toggle-item" for="checkcross">
                  <div class="check"></div>
                </label>
              </div>
              <div class="name">Yes & No</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
