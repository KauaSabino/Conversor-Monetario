function getApi(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText 
}

let data = getApi("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
let coins = JSON.parse(data);
console.log(coins);



function verificar(valueOption){
    let initialValue = document.getElementById("initialValue").value
    let select = document.getElementById("selectCoin");
    let convertedValue;
    let teste;
    if(("Dollar") == select.options[select.selectedIndex].value){
        convertedValue = initialValue * coins.USDBRL.ask;
        document.getElementById("convertedValue").value = parseFloat(convertedValue.toFixed(2));
        document.getElementById("currencyIcon").src='./src/img/icon-dolar.webp';
    }
    else if(("Bitcoin") == select.options[select.selectedIndex].value){
        convertedValue = initialValue * coins.BTCBRL.ask;
        convertedValue = convertedValue.toString()
        document.getElementById("currencyIcon").src='./src/img/icon-bitcoin.webp';
        if(convertedValue < 1000){
            document.getElementById("convertedValue").value = convertedValue.toString(2) + ' Mil';
        }
        else if(convertedValue >= 1000 & convertedValue < 10000){
            convertedValue = convertedValue[0] + "." + (convertedValue.substr(1, 8))
            console.log(convertedValue)
            document.getElementById("convertedValue").value = convertedValue + ' Mi';
        }
        else if(convertedValue >= 10000 & convertedValue < 100000){
            convertedValue = convertedValue.substring(0,2) + "." + (convertedValue.substr(2, 10))
            document.getElementById("convertedValue").value = convertedValue + ' Mi';
        }
        else if(convertedValue >= 100000 & convertedValue < 1000000){
            convertedValue = convertedValue.substring(0,3) + "." + (convertedValue.substr(3, 10))
            document.getElementById("convertedValue").value = convertedValue + ' Mi';
        }
        
        
    }
    else if(("Euro") == select.options[select.selectedIndex].value){
        convertedValue = initialValue * coins.EURBRL.ask;
        document.getElementById("convertedValue").value = parseFloat(convertedValue.toFixed(2));
        document.getElementById("currencyIcon").src='./src/img/icon-euro.webp';
    }
};

verificar()

