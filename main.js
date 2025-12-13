var select;
function start() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var umn = input1*input2;
    var del = input1/input2;
    if(umn) {
        switch(select) {
            case "f":
                document.getElementById("result").innerHTML = "F="+umn+"H";
                break;
            case "v":
                document.getElementById("result").innerHTML = "V="+del+"m/s";
                break;
            case "s":
                document.getElementById("result").innerHTML = "S="+umn+"m";
                break;
            case "t":
                document.getElementById("result").innerHTML = "t="+del+"s";
                break;
            case "vo":
                document.getElementById("result").innerHTML = "V="+umn+"cm<sup>3</sup>";
                break;
            case "k":
                document.getElementById("result").innerHTML = "k="+del+"H/m";
                break;
            case "fg":
                document.getElementById("result").innerHTML = "F="+umn+"H";
                break;
            default:
                document.getElementById('result').innerHTML = "Выберите формулу для вычисления";
        }
    } else {
        document.getElementById('result').innerHTML = "Введите корректные значения";
    }
}

function check_select(input) {
    document.getElementById('result').innerHTML = "";
    switch(input) {
        case "f":
            document.getElementById("formula").innerHTML = "F=mg";
            document.getElementById("fnum").innerHTML = "m=";
            document.getElementById("snum").innerHTML = "g=";
            document.getElementById("fnum-mer").innerHTML = "kg";
            document.getElementById("snum-mer").innerHTML = "m/s<sup>2</sup>";
            break;
        case "v":
            document.getElementById("formula").innerHTML = "V=S/t";
            document.getElementById("fnum").innerHTML = "S=";
            document.getElementById("snum").innerHTML = "t=";
            document.getElementById("fnum-mer").innerHTML = "m";
            document.getElementById("snum-mer").innerHTML = "s";
            break;
        case "s":
            document.getElementById("formula").innerHTML = "S=Vt";
            document.getElementById("fnum").innerHTML = "V=";
            document.getElementById("snum").innerHTML = "t=";
            document.getElementById("fnum-mer").innerHTML = "m/s";
            document.getElementById("snum-mer").innerHTML = "s";
            break;
        case "t":
            document.getElementById("formula").innerHTML = "t=S/V";
            document.getElementById("fnum").innerHTML = "S=";
            document.getElementById("snum").innerHTML = "V=";
            document.getElementById("fnum-mer").innerHTML = "m";
            document.getElementById("snum-mer").innerHTML = "m/s";
            break;
        case "vo":
            document.getElementById("formula").innerHTML = "V=Sh";
            document.getElementById("fnum").innerHTML = "S=";
            document.getElementById("snum").innerHTML = "h=";
            document.getElementById("fnum-mer").innerHTML = "cm<sup>2</sup>";
            document.getElementById("snum-mer").innerHTML = "cm";
            break;
        case "k":
            document.getElementById("formula").innerHTML = "k=F/l";
            document.getElementById("fnum").innerHTML = "F=";
            document.getElementById("snum").innerHTML = "l=";
            document.getElementById("fnum-mer").innerHTML = "H";
            document.getElementById("snum-mer").innerHTML = "m";
            break;
        case "fg":
            document.getElementById("formula").innerHTML = "F=kl";
            document.getElementById("fnum").innerHTML = "k=";
            document.getElementById("snum").innerHTML = "l=";
            document.getElementById("fnum-mer").innerHTML = "H/m";
            document.getElementById("snum-mer").innerHTML = "m";
            break;
    }
    select = input;
}