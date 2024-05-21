function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        alert('Pastikan semua nilai telah diisi dengan angka yang valid.');
        return;
    }

    const area = 0.5 * base * height;
    document.getElementById('area').textContent = `Luas: ${area.toFixed(2)} cm²`;
}