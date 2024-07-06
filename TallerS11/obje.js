let car = new Object();
car.model = "Ford Focus";
car.km = 12000;
car.regidtration = "0123ABC";
let car = {
    model: "Ford Focus",
    km: 12000,
    regidtration: "0123ABC",
    getRegidtration: function () {
        return this.regidtration;
    },
};
function Car(model, km, regidtration) {
    this.model = model;
    this.km = km;
    this.regidtration = regidtration;
}
let focus = new Car("Ford Focus", 12000, "0123ABC");
let sandero = new Car("Renault Sandero", 5000, "4567DEF");