/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
* @throws {HamburgerException}  При неправильном использовании
*/

function Hamburger(size, stuffing) {
    /* Размеры, виды начинок и добавок */
const SIZE_SMALL = 20;
const SIZE_LARGE = 40;
const STUFFING_CHEESE = 20;
const STUFFING_SALAD = 5;
const STUFFING_POTATO = 10;
const TOPPING_MAYO = 5;
const TOPPING_SPICE = 0;
    this.size = [SIZE_LARGE, SIZE_SMALL];
    this.stuffing = [STUFFING_CHEESE, STUFFING_POTATO, STUFFING_SALAD];
    this.getSize =()=>{
        let res = 0;
        for(let i = 0; i<size.length; i++) {
            res += size[i];
        }
        return res;
    }
    this.getStuffing =() => {
        let staf = 0;
        for(let i = 0; i<stuffing.length; i++) {
            staf += stuffing[i];
        }
        return staf;
    }
    this.addTopping=(topping) =>{
        topping=TOPPING_MAYO;
    }
    this.getToppings=() =>{
        return topping;
    }
    this.calculateCalories = () => {
        return this.getSize + this.getStuffing;
    }
}
let h1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
let h2 =  new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
let h3 =  new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD);
let h4 =  new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
/*let h = [h1, h2, h3, h4];
for(let i=0; i<h.length; i++) {
    
}*/
console.log(h1);
console.log(h2);
console.log(h3);
console.log(h4);
/**
* Добавить добавку к гамбургеру. Можно добавить несколько
* добавок, при условии, что они разные.
* 
* @param topping     Тип добавки
* @throws {HamburgerException}  При неправильном использовании
*/
//Hamburger.prototype.addTopping = function (topping) ...

/**
 * Убрать добавку, при условии, что она ранее была 
 * добавлена.
 * 
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
//Hamburger.prototype.removeTopping = function (topping) ...

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
//Hamburger.prototype.getToppings = function () ...

/**
 * Узнать размер гамбургера
 */
//Hamburger.prototype.getSize = function () ...

/**
 * Узнать начинку гамбургера
 */
//Hamburger.prototype.getStuffing = function () ...

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
//Hamburger.prototype.calculatePrice = function () ...

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
//Hamburger.prototype.calculateCalories = function () ...

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером. 
 * Подробности хранятся в свойстве message.
 * @constructor 
 */
//function HamburgerException (...) { ... }

// маленький гамбургер с начинкой из сыра
//var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
//hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
//console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
//console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
//hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит? 
//console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер? 
//console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
//hamburger.removeTopping(Hamburger.TOPPING_SPICE);
//console.log("Have %d toppings", hamburger.getToppings().length); // 1
// не передали обязательные параметры
//var h2 = new Hamburger(); // => HamburgerException: no size given

// передаем некорректные значения, добавку вместо размера
//var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE); 
// => HamburgerException: invalid size 'TOPPING_SAUCE'

// добавляем много добавок
//var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
//hamburger.addTopping(Hamburger.TOPPING_MAYO);
//hamburger.addTopping(Hamburger.TOPPING_MAYO); 
// HamburgerException: duplicate topping 'TOPPING_MAYO'
