const requestSender = new XMLHttpRequest();
requestSender.onreadystatechange = apiHandler;

/*
0 unsent
1 opened
2 header received 
3 loading 
4 done
*/

function apiHandler(response) {
    if (requestSender.readyState === 4 && requestSender.status === 200)  {
        console.log(response.target.response)
    }
}


requestSender.open("GET", "https://api.github.com/users/slavo3dev")
requestSender.send();
