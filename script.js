document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  const loadingRow = document.createElement("tr");
  loadingRow.id = "loading"; 
  loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
  output.appendChild(loadingRow);

  const createPromise = (index) => {
    return new Promise((resolve) => {
      const time = (Math.random() * 2 + 1).toFixed(3);
      setTimeout(() => resolve({ name: `Promise ${index}`, time }), time * 1000);
    });
  };

  const promises = [createPromise(1), createPromise(2), createPromise(3)];
  const startTime = performance.now();

  Promise.all(promises).then((results) => {
    const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);
    output.innerHTML = "";

    results.forEach((result) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
      output.appendChild(row);
    });

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    output.appendChild(totalRow);
  });
});
