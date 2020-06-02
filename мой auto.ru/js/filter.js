const filters = document.querySelector('.rng_wrp');

filters.addEventListener('input', filterGoods);

function filterGoods() {
  const
    priceMin = document.querySelector('.range_inpt1').value,
    priceMax = document.querySelector('.range_inpt2').value;

  outputGoods(DATA.filter(n => (
    (!priceMin || priceMin <= n.cost) &&
    (!priceMax || priceMax >= n.cost)
  )));
}

function outputGoods(goods) {
  document.getElementsByClassName('.catalog-wrap').innerHTML = goods.map(n => `
  <div class="col-md-3" v-for="(car, index) of cars">
  <div class="card-car">
      <img v-bind:src="car.image" v-bind:alt="car.name" class="card__img">
      <h6 class="card__info">без пробега</h6>

      <h4 class="card__title">{{ car.name }} {{ car.model }}</h4>
      <strong class="card__price">{{ car.price }}</strong>

      <hr>
  </div> 
</div>
  `).join('');
}