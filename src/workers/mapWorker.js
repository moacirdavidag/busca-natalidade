self.onmessage = async (event) => {
  const geoUrl = event.data;

  try {
    const response = await fetch(geoUrl);
    const data = await response.json();
    console.log(data.objects.Munic.geometries);

    const chunkSize = 500; 
    const chunks = [];

    for (let i = 0; i < data.objects.Munic.geometries.length; i += chunkSize) {
      chunks.push(data.objects.Munic.geometries.slice(i, i + chunkSize));
    }

    for (let i = 0; i < chunks.length; i++) {
      self.postMessage({
        success: true,
        chunk: chunks[i],
        done: i === chunks.length - 1,
      });
      await new Promise((resolve) => setTimeout(resolve, 0)); 
    }
  } catch (error) {
    console.log(error);
    self.postMessage({
      success: false,
      message: error.message,
      error: "Erro ao obter os dados do mapa!",
    });
  }
};
