const API_URL = "https://script.google.com/macros/s/AKfycbyKRbhrdqYlY9-kY1HMhP5M9F687i4ye52HHXL7ipq3Uqj168xJsEjtKItvFNpH12rXlA/exec";

export async function sendData(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json();
}