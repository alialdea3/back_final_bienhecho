type PhoneInfo = {
  is_valid: boolean;
  country: string;
};

type CountryInfo = {
  capital: string;
};

type CapitalInfo = {
  longt: string;
  latt: string;
};

type CoordenatesInfo = {
  datetime: string;
};

export const getInformationFromPhone = async (
  phone: string,
): Promise<PhoneInfo> => {
  const API_KEY = Deno.env.get("API_KEY");
  if (!API_KEY) {
    throw new Error("API_KEY not found");
  }

  const url = `https://api.api-ninjas.com/v1/validatephone?number=${phone}`;

  const data = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
    },
  });

  if (data.status !== 200) {
    console.error("Error puto:", data.status, data.statusText);
    throw new Error("Error");
  }
  const response = await data.json();
  return response;
};

export const getInformationFromCountry = async (
  country: string,
): Promise<CountryInfo[]> => {
  const API_KEY = Deno.env.get("API_KEY");
  if (!API_KEY) {
    throw new Error("No APIKEYY DE MIERDA FOUNDDD");
  }
  const url = `https://restcountries.com/v3.1/name/${country}`;

  const data = await fetch(url, {
    method: "GET",
  });

  if (data.status !== 200) {
    console.error("Error 2:", data.status, data.statusText);
    throw new Error("Error");
  }

  const response = await data.json();
  return response;
};

export const getInformationFromCapital = async (
  capital: string,
): Promise<CapitalInfo> => {
  const API_KEY = Deno.env.get("API_KEY");
  if (!API_KEY) {
    throw new Error("API_KEY not found");
  }

  const url = `https://geocode.xyz/${capital}?json=1`;
  const data = await fetch(url, {
    method: "GET",
  });

  if (data.status !== 200) {
    console.error("Error cap:", data.status, data.statusText);
    throw new Error("Error");
  }
  const response = await data.json();
  return response;
};

export const getInformationFromCoordenates = async (
  longt: string,
  latt: string,
): Promise<CoordenatesInfo> => {
  const API_KEY = Deno.env.get("API_KEY");
  if (!API_KEY) {
    throw new Error("API_KEY not found");
  }

  const url =
    `https://api.api-ninjas.com/v1/worldtime?lat=${latt}&lon=${longt}`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
    },
  });
  if (data.status !== 200) {
    console.error("Error cap:", data.status, data.statusText);
    throw new Error("Error");
  }
  const response = await data.json();
  return response;
};
