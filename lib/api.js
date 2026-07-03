const API_URL = "https://script.google.com/macros/s/AKfycbwddrVJtZ8EpZ1NPp2YahxN4G4z_fVGSC0dpTiffFONoyDbVXYbPmb-VCpQw_mtxTIWpw/exec";

export async function sendData(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Ошибка отправки данных");
  }

  return response.json();
}