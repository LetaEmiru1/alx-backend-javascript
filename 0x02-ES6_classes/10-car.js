class Car {
  constructor(_brand, _motor, _color){
    this._brand = _brand;
    this._motor = _motor;
    this._color = _color;
  }

  cloneCar(){
    return new this.constructor();
  }
}
export defualt Car;
