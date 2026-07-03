const API_URL = "СЮДА_ВСТАВИМ_ССЫЛКУ_ПОЗЖЕ";

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