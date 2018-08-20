var url = "http://ict.neit.edu/evanrense/salaries.php";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(res){
  	console.log(res);
  })