document.addEventListener("DOMContentLoaded", () => {
  const infoBlock = document.querySelector(".information");
  const marusenBlock = document.querySelector(".marusen");
  const textBlock = document.querySelector(".text_sec1");
  const Button = document.querySelector(".button");
  const typingParagraph = document.getElementById("typingText");
  const section2 = document.querySelector(".section2");

  const fullText = `Поздравляю с 51 годом. Желаю тебе пройти переломный момент с работой
на ура, открыть для себя новые возможности в профессии, преодолеть
некоторую стагнацию (по твоим словам), конечно много-много теплых
посиделок и времени с друзьями и с нами котиками! Очень хочу, чтобы
негативные новости не внедрялись накрепко в твою жизнь. Я тебе
благодарна за все, что делаешь. Очень ценю, хоть и не всегда говорю.
Ещё раз поздравляю, па! А когда грустно, открывай этот сайт хехе`;

  infoBlock.addEventListener("click", () => {
    // Скрываем блок с "информацией"
    infoBlock.style.display = "none";

    // Показываем .marusen и .text_sec1
    marusenBlock.classList.remove("hidden");
    textBlock.classList.remove("hidden");
    Button.classList.remove("hidden");

    // Запускаем эффект печатания
    typingParagraph.classList.add("typing");
    typeWriter(fullText, typingParagraph, 0, 35);
  });

  function typeWriter(text, element, index, speed) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeWriter(text, element, index, speed), speed);
    } else {
      element.classList.remove("typing"); // Убираем мигающий курсор в конце
    }
  }
  // Показ section2 при клике на кнопку
  Button.addEventListener("click", () => {
    section2.classList.remove("hidden");
    section2.scrollIntoView({ behavior: "smooth" });
  });
});
