const menu = {
    _courses : {
      appetizers: [],
      mains: [],
      desserts:[],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains){
      this._courses.mains = mains;
    },
    set desserts(desserts){
      this._courses.desserts = desserts;
  
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.main}. The total price is ${totalPrice}.`;
    }
  };
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Wings', 3.25);
  menu.addDishToCourse('appetizers', 'Macaroni', 8.25);
  menu.addDishToCourse('mains', 'Pork Chops', 10.25);
  menu.addDishToCourse('mains', 'Chicken Soup', 30.25);
  menu.addDishToCourse('mains', 'Beans and Rice', 20.25);
  menu.addDishToCourse('desserts', 'Tiramisu', 1.25);
  menu.addDishToCourse('desserts', 'Pudding', 2.25);
  menu.addDishToCourse('desserts', 'Coffee beans', 7.25);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  