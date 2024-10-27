
function getSleepHours(day) {
    let hours;
  
    switch (day.toLowerCase()) {
      case 'monday':
        hours = 8;
        break;
      case 'tuesday':
        hours = 7;
        break;
      case 'wednesday':
        hours = 9;
        break;
      case 'thursday':
        hours = 8;
        break;
      case 'friday':
        hours = 10;
        break;
      case 'saturday':
        hours = 10;
        break;
      case 'sunday':
        hours = 8;
        break;
      default:
        return "Invalid day. Please enter a day of the week.";
    }
  
    return hours;
  }
  
  function getIdealSleepHours() {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  function getActualSleepHours() {
    let totalHours = 0;
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  
    for (let day of days) {
      totalHours += getSleepHours(day);
    }
  
    return totalHours;
  }
  
  function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log(`You got the perfect amount of sleep: ${idealSleepHours} hours.`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got more sleep than needed: ${actualSleepHours - idealSleepHours} hours more.`);
    } else {
      console.log(`You should get some rest: ${idealSleepHours - actualSleepHours} hours less.`);
    }
  }
  
  calculateSleepDebt();