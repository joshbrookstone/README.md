class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }
    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {

    let employees = [];

    if (this.salary > amount) {
      employees.push(this);
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount);
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  get totalEmployees() {
    
    let totalEmployees = 0;

    for (const subordinate of this.subordinates) {
      totalEmployees += 1;
      totalEmployees += subordinate.totalEmployees;
    }
    return totalEmployees;

  }


}

// ada is our root node
const ada = new Employee("Ada", "CEO", 3000000.00);

// employees directly below Ada:

const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);

// employees below craig

const simone = new Employee("Simone");
const ali = new Employee('Ali');

// empl. beloew Phil

const florida = new Employee('Florida');
const david = new Employee('David');
const brian = new Employee('Brian');

// empl. below Angela

const karla = new Employee("Karla");

// adas subordinates
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

// Phils subordinates
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

// Craigs subordinates
craig.addSubordinate(simone);
craig.addSubordinate(ali);

// Angela subs
angela.addSubordinate(karla);



console.log(ada.totalEmployees);