const API_URL = "https://script.google.com/macros/s/AKfycbyDl5DW2gUuPA8y9Q_Clqqyd94X00F6NdoYVxeUxzZJ3FFzaEBWhWeUak0TWL9RFU-5Bw/exec";

export async function sendData(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json();
}