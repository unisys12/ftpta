let form_url = document.URL;
let promo_element = document.getElementById("promo_code");
let params = new URLSearchParams(form_url);

for (const p of params) {
  if (p[1] == "Spring") {
    promo_element.value = p[1];
  }
}
