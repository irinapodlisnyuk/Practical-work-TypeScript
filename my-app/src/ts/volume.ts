export function volumeWork() {
  // const slider = document.getElementById("volume") as HTMLInputElement;

  // slider.addEventListener("input", (e: Event) => {
  //   const target = e.target as HTMLInputElement;
  //   const value = target.value;
  
  //   // Обновляем градиент: часть до ползунка — зеленая, после — серая
  //   target.style.backgroundColor = `linear-gradient(to right, $color-burnt-orange ${value}%, $color-whisper ${value}%)`;
  // });

  // slider.dispatchEvent(new Event("input"));

 // Получаем элементы с явным указанием типов
const input = document.getElementById('volume') as HTMLInputElement;
const progressBar = document.getElementById('progressBar') as HTMLDivElement;

// Функция обновления ширины бара
const updateProgress = (): void => {
    let value: number = parseInt(input.value);

    // Валидация диапазона 0-100
    if (isNaN(value) || value < 0) value = 0;
    if (value > 100) value = 100;

    // Установка ширины
    progressBar.style.width = `${value}%`;
};
input.addEventListener('input', updateProgress);
}
