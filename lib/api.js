const API_URL = "https://script.google.com/macros/s/AKfycbwuN1PSXWm46ZkIfE3itGBqm-NM-O7fFiVa52Om9zVsyfxD5V54NMc5xzYemPdsEKSEVw/exec";

export async function sendData(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json();
}