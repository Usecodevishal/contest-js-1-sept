const data = [
    { name: "john", age: 27, profession: "developer" },
    
    { name: "jane", age: 24, profession: "admin" },
  ];
  console.log(data);
  
  
  // 1. Print Developers
  function printDeveloper() {
    let devlopers = '';
    for(let i=0;i<data.length;i++){
        if(data[i].profession=='developer'){
            devlopers = devlopers + data[i].name +" ";
            console.log(data[i]);
        }
    }
    console.log(devlopers);
  }
  
  // 2. Add Data
  function addData() {
    let obj = new Object();
    obj.name = 'vishal';
    obj.profession = 'developer';
    data.push(obj);

  }
  
  // 3. Remove Admins
  function removeAdmin() {
   for(let i=0;i<data.length;i++){
    if(data[i].profession=='admin'){
      data.splice(i,1);
    }
   }
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {}
  
  // 5. Average Age
  function averageAge() {
    let totalAge = 0;
    for(let i=0;i<data.length;i++){
      totalAge += data[i].age;
    }
    let ave = totalAge/(data.length);
    console.log(ave);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let count=0;
    for(let i=0;i<data.length;i++){
      if(data[i].age>=25){
        count++;
      }
    }
    console.log(count);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let unique = 0;
    let uniqueArr = []
    let hm = new Map();
    for(let i=0;i<data.length;i++){
      if(hm.get(data[i].profession)==undefined){
        hm.set(unique,data[i].profession);
        unique++;
        uniqueArr.push(data[i].profession);
      }
    }
    console.log(uniqueArr);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    for(let i=0;i<data.length-1;i++){
      let ind = i;
      for(let j=i;j<data.length;j++){
        if(data[ind].age > data[j].age){
          ind=j;
        }
      }
      // Swapping the larger left element object with bigger right element object using selection sort.
      var temp = data[ind];
      data[ind] = data[i];
      data[i] = temp;
      
      
    }
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i=0;i<data.length;i++){
      if(data[i].name=='john'){
        data[i].profession = "manager";
      }
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developers = 0; let admins = 0;
    for(let i=0;i<data.length;i++){
      if(data[i].profession=='developer'){
        developers++;
      }else if(data[i].profession=='admin'){
        admins++;
      }
    }
    console.log(`developers: ${developers}, admins: ${admins}`)
  }

  /* Print Developers (`PrintDeveloper` function): Log all developers from the array to the console.

Add Data (`addData` function): Add a new data object to the array using details collected from a prompt.

Remove Admins (`removeAdmin` function): Extract and remove all admins from the array.

Concatenate Array (`concatenateArray` function): Combine two arrays (create a dummy array as an example) and log the result.

Average Age (`averageAge` function): Compute and log the average age of all people in the array.

Age Check (`checkAgeAbove25` function): Validate if there's at least one person in the array who's older than 25.

Unique Professions (`uniqueProfessions` function): Log all distinct professions present in the array.

Sort by Age (`sortByAge` function): Organize the array by age in ascending order.

Update Profession (`updateJohnsProfession` function): Adjust 'john's profession to 'manager'.

Profession Count (`getTotalProfessions` function): Calculate and print the total number of developers and admins in the array.*/