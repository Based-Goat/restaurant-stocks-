const API_URL = "https://script.google.com/macros/s/AKfycbzW6lyy6swRd53wBFGOltbxpmEKYtHhdPjz83_togtBi7oNJbXeZbvFFjjiTaYg_i8OhQ/exec";

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