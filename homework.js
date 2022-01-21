
var a = Math.floor(Math.random() * 10);
for (let i = 0; i < 5; i++) {
    n = prompt("Bạn đoán số bao nhiêu: ");
    if (n == a) {
        alert("Bạn đã đoán đúng");
    break;
    }
    else if (n > a) {
        alert("Số bạn đoán lớn hơn số cần tìm");
    }
    else {
        alert("Số bạn đoán nhỏ hơn số cần tìm");
    }
}


