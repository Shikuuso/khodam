document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const result = document.getElementById('result');

    if (name) {
        const khodam = checkKhodam(name);
        result.innerHTML = 'Khodam Anda adalah: <strong>Om-om Pedo</strong>';
    } else {
        result.innerHTML = '<span style="color: red;">Silakan masukkan nama Anda!</span>';
    }
});

function checkKhodam(name) {
    const khodams = ['Monyet Kayang', 'Mangga Busuk','Pisang Busuk','Melon Busuk'];
    const index = Math.floor(Math.random() * khodams.length);
    return khodams[index];
}
