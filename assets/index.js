 // fetch("https://jsonplaceholder.typicode.com/users")
 fetch("json/student_data.json")

 .then((response) => response.json())
 .then((data) => {
     console.log(data);

     for (var x in data) {
         var a = `${data[x].name} - ${data[x].age} - ${data[x].city} <br>`;
         document.write(a);
     }
 })
 .catch((error) => document.write("Can't fetch data"));
