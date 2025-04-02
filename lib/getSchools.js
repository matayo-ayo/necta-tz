import axios from "axios";
import * as cheerio from "cheerio";

export const getSchoolInfo01 = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const schoolString = $("h3").text().trim();
    const split = schoolString.split("-");
    const name = split[0].trim().replace(/ (PRIMARY|SECONDARY) SCHOOL /g, "");
    const index = split[1].trim().replace(/[a-zA-Z]/g, "");
    return { name, index };
  } catch (err) {
    return err.message;
  }
};

export const getSchoolInfo02 = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const schoolString = $('tr th:contains("CENTRE:")').text().trim();
    if (!schoolString) {
      return { error: "Centre information not found." };
    }
    const split = schoolString.split("-");
    const index = split[0] ? split[0].trim().replace(/[a-zA-Z]/g, "") : null;
    const name = split[1]
      ? split[1].trim().replace(/ (PRIMARY|SECONDARY) SCHOOL/g, "")
      : null;
    return { name, index };
  } catch (err) {
    return err.message;
  }
};

export const getSchoolInfo03 = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    let schoolString = $("h3").text().trim();
    const stringToReplace = `CSEE ${year} EXAMINATION RESULT FOR `;
    schoolString = replace(stringToReplace, "").trim();
    const [s_index, ...schoolName] = schoolString.split(" ");
    const index = s_index.replace(/[a-zA-Z]/g, "");
    const name = schoolName.join(" ").replace(/(PRIMARY|SECONDARY) SCHOOL/);
    return { index, name };
  } catch (err) {
    return err.message;
  }
};
