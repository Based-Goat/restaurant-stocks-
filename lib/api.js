const API_URL = "https://script.google.com/macros/s/XXXXX/exec";

export async function sendData(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}