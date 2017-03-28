/*
  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.
  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).
  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);
  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```
  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?
*/
/* new Date ();
  new Date(value);
  new Date(date String);
  new Date(year, month[, day[,]]);
  Date.prototype.getFullYear() - returns 4-digit year
  Date.prototype.getDate() - returns day of month (1-31)
  Date.prototype.getMonth() - returns month (0-11)
  Date.prototype.getDay() -returns day of week(0-6)
  Date.prototype.setDate() - sets day of month for future date
  Date.prototype.setFullYear() - sets full year for future date
  Date.prototype.setMonth() - sets month for future date
  Date.prototype.toDateString() - return 'date' portion of date as readable string*/


// YOUR CODE HERE
function daysUntilDate(dob){
  dateFormat df = dateFormat.getDateInstance();
      for(int i=0; i<new Date.length; ++i){
        output.println(df.format(new Date[i]) + ";  ");
      }
  var today = currentDate();
  var birthday = new Date(dob);
  return today-birthday;
  }

  function birthdayReminder (){
     {
      var celebrate = [];
      for(i=0; i<person.length; i++) {
      var name = person[i].name;
      var dob = person[i].new Date;
      var split = new Date.Split('/');
      var result = daysUntilDate();

      var reminder = ('Celebrate' + name +' birthday in' + result + 'days.' );
      celebrate.push(reminder);
    }
    }
  return celebrate;
}

function daysUntilDate ()


var birthday = new Date('October 31, 2005');
  var birthday = new Date('April 1, 1975');











