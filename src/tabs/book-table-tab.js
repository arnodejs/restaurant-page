function BookTable() {
  return `<h1 class="title">Book table</h1>
      <section class="section-book">
        <form action="/" class="book-form">
          <div class="form-inputs">
            <div>
              <p class="form-group">
                <label class="form-label" for="name">Name:</label>
                <input class="form-input" type="text" name="name" required />
              </p>
              <p class="form-group">
                <label class="form-label" for="tel">Phone:</label>
                <input
                  class="form-input"
                  type="tel"
                  name="phone_number"
                  id="tel"
                  required
                />
              </p>
            </div>
            <div>
              <p class="form-group">
                <label class="form-label" for="date">Date to book for:</label>
                <input
                  class="form-input"
                  type="date"
                  name="date"
                  id="date"
                  required
                />
              </p>
              <p class="form-group">
                <label class="form-label" for="people-num"
                  >No. of people (for 10+, please call us)</label
                >
                <select class="form-select" name="num_people" id="people-num">
                  <button>
                    <selectedcontent></selectedcontent>
                  </button>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </p>
            </div>
          </div>
          <button class="button-submit">Book Table</button>
        </form>
      </section>`;
}

export default BookTable();
