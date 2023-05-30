let pTagValue = document.getElementById("firstPage").innerHTML;

let userInformation = document.getElementById("firstPage").innerHTML;
// alert(userInformation);
if (userInformation === "keti") {
    document.getElementById('firstPage').innerHTML = `Weclome ${userInformation}!`
}

document.getElementById('weclomeMessage').style.color = "red";

document.getElementsByClassName('test1')[0].style.color = "blue";

document.querySelector('.firstName').style.color = "green";
document.querySelector('#lastName').style.color = "cyan";