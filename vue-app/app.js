function car (name, model, owner, year, phone, image) {
    return {
        name, model, owner, year, phone, image
    }
}

const cars = [
    car('Audi', 'E-Tron', 'Владимир', 2019, '+7 929 858-86-52', 'img/audi.jpg'),
    car('Mercedes', 'E-Class', 'Георгий', 2020, '+7 900 968-16-37', 'img/mercedes.jpg'),
    car('Porsche', 'Taycan', 'Алексей', 2020, '+7 009 800-56-00', 'img/porshe.jpg')
]

var app = new Vue ({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar: function(index){
            this.car = cars[index]
            this.selectedCarIndex = index
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Скрыть телефон' : 'Показать телефон'
        },
        filteredCars() {
            var self = this
            const filtered = this.cars.filter(function(car) {
                return car.name.indexOf(self.search) > -1 || car.model.indexOf(self.search) > -1
            })

            return filtered
        }
    }
})