import axios from "axios";
// import { load } from "cheerio";

const fetchUrl = async () => {
  const url = `${process.env.api}/empresas`
  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const html = response.data;
      console.log("####", html)
      return html
   
    }
  } catch (error) {
    return { success: false, href: "Falha ao buscar link do PDF." };
  }

  return { success: false, href: "Não foi possível obter o link do PDF." };
};

export { fetchUrl };