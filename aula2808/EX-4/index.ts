class ErroAPI extends Error {
  constructor(mensage: string) {
    super(mensage);
    this.name = "ErroAPI";
  }
}

async function buscarDadosDaAPI<T>(city: string): Promise<T> {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e3daa09027634532fc0927837fea1dc&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new ErroAPI("ERRO AO BUSCAR DADOS API");
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ErroAPI) console.error(`Error: ${error.message}`);
    throw error;
  }
}

interface WeatherData {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

// Exemplo de uso:
async function executarBusca<T>() {
  try {
    const dados = await buscarDadosDaAPI<WeatherData>("São Paulo");
    console.log(dados.weather[0].description);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

executarBusca(); // Simula a busca de dados com async/await
