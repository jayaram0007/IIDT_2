
  const colorDis = document.getElementById('colorDis');
  const button = document.getElementById('changeColor');

  button.addEventListener('click', function() {
    const randColor = getRandomColor();
    document.body.style.backgroundColor = randColor;
    colorDis.innerHTML = `<span style="color: white;">Background Color : </span> <span style="color: #007bff;">${randColor}</span>`;
  });

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
