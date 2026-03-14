const message = "tut, happy birthday ya. semoga hari-hari kamu selalu dipenuhi hal-hal baik dan kecil yang bikin hati tenang. semoga semesta selalu berpihak ke kamu, dan setiap langkah yang kamu ambil pelan-pelan ngebawa kamu ke masa depan yang kamu pengen.\nmakasih ya udah jadi kamu yang sekarang, yang terus belajar, terus berkembang, dan tetap jalan walau kadang capek. keep going, tut. you’re doing better than you think.\nbuat semua hal yang kamu kasih ke dunia yang dibalas ataupun yang cuma kamu simpan diam-diam, semoga semua kebaikan itu balik lagi ke kamu, bahkan dengan cara yang nggak kamu sangka.\nsemoga kamu selalu nemuin alasan buat senyum, bahkan di hari yang berat. semoga langkah kamu selalu dipermudah, dan hati kamu tetap hangat. take your time, grow at your own pace. the world can wait, but your happiness matters too.pokoknya, i’m rooting for you, tut. always."

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
