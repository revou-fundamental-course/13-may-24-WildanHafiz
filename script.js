function showAreaForm() {
    document.getElementById('area-form').style.display = 'block';
    document.getElementById('perimeter-form').style.display = 'none';
}

function showPerimeterForm() {
    document.getElementById('area-form').style.display = 'none';
    document.getElementById('perimeter-form').style.display = 'block';
}

function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        alert('Pastikan semua nilai telah diisi dengan angka yang valid.');
        return;
    }

    const area = 0.5 * base * height;
    document.getElementById('area-result').textContent = `Luas: ${area.toFixed(2)} cm²`;
}

function calculatePerimeter() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert('Pastikan semua nilai sisi telah diisi dengan angka yang valid.');
        return;
    }

    const perimeter = sideA + sideB + sideC;
    document.getElementById('perimeter-result').textContent = `Keliling: ${perimeter} cm`;
}