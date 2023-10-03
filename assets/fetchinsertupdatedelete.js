document.getElementById("saveForm").addEventListener("click", function(e){
    e.preventDefault();

    var obj = {
        title: document.getElementById("title").value,
        body: document.getElementById("body").value,
        userId: document.getElementById("userid").value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',    
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
