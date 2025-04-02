export const studentIndexFormater = (input) => {
  try {
    let parts = input.split("-");
    if (parts.length > 1) {
      return parts[1];
    } else {
      parts = input.split("/");
      if (parts.length > 1) {
        return parts[1];
      } else {
        return null;
      }
    }
  } catch (err) {
    return err.message;
  }
};

export const studentList01 = async (url, year, school, level) => {
  try {
    const studentTemplate = {
      school,
      index: null,
      year,
      examType: level,
      name: null,
      sex: null,
      comment: null,
      grade: null,
      subjects: null,
    };
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const students = [];
    $("table:nth-of-type(1) tr").each((index, element) => {
      if (index === 0) return;
      const student = { ...studentTemplate };
      const subjectAndComment = $(element)
        .find(`td:nth-child(4)`)
        .text()
        .trim();
      student.index = studentIndexFormater(
        $(element)
          .find(`td:nth-child(1)`)
          .text()
          .replace(/[a-zA-Z]/g, "")
          .trim()
      );
      student.sex = $(element)
        .find(`td:nth-child(2)`)
        .text()
        .replace(/[0-9]/g, "")
        .trim();
      student.name = $(element)
        .find(`td:nth-child(3)`)
        .text()
        .replace(/[0-9]/g, "")
        .trim();
      student.subjects = subjectsFormater(
        subjectAndComment.replace(/[0-9]/g, "").trim()
      );
      student.grade = $(element)
        .find(`td:nth-child(5)`)
        .text()
        .replace(/[0-9]/g, "")
        .trim();
      const statusKeywords = ["absent", "shifted", "withheld"];
      const isStatusComment = statusKeywords.some((keyword) =>
        subjectAndComment.toLowerCase().includes(keyword)
      );
      if (!student.subjects || student.subjects.length === 0) {
        if (isStatusComment) {
          student.comment = subjectAndComment;
        }
      } else if (isStatusComment) {
        student.comment = subjectAndComment;
      }
      students.push(student);
    });
    return students.filter((student) => student.name && student.index);
  } catch (err) {
    return err.message;
  }
};

export const studentList02 = async (url, year, school, level) => {
  try {
    const studentTemplate = {
      school,
      index: null,
      year,
      examType: level,
      name: null,
      sex: null,
      comment: null,
      grade: null,
      subjects: null,
    };
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const students = [];
    $("table.tbl tr").each((index, element) => {
      if (index === 0) return;
      const student = { ...studentTemplate };
      student.index = studentIndexFormater(
        $(element)
          .find(`td:nth-child(1)`)
          .text()
          .replace(/[a-zA-Z]/g, "")
          .trim()
      );
      student.sex = $(element).find(`td:nth-child(3)`).text().trim();
      student.name = $(element).find(`td:nth-child(4)`).text().trim();
      const subjectAndComment = $(element)
        .find(`td:nth-child(5)`)
        .text()
        .trim();
      student.subjects = subjectsFormater(subjectAndComment);
      const statusKeywords = ["absent", "shifted", "withheld"];
      const isStatusComment = statusKeywords.some((keyword) =>
        subjectAndComment.toLowerCase().includes(keyword)
      );
      if (isStatusComment) {
        student.comment = subjectAndComment;
      }
      students.push(student);
    });
    return students.filter((student) => student.name && student.index);
  } catch (err) {
    return err.message;
  }
};

export const studentList03 = async (url, year, school, level) => {
  try {
    const studentTemplate = {
      school,
      index: null,
      year,
      examType: level,
      name: null,
      sex: null,
      comment: null,
      grade: null,
      subjects: null,
    };
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const students = [];
    $("table:nth-of-type(2) tr").each((index, element) => {
      if (index === 0) return;
      const student = { ...studentTemplate };
      student.index = studentIndexFormater(
        $(element)
          .find(`td:nth-child(1)`)
          .text()
          .replace(/[a-zA-Z]/g, "")
          .trim()
      );
      student.sex = $(element).find(`td:nth-child(2)`).text().trim();
      student.name = $(element).find(`td:nth-child(3)`).text().trim();
      const subjectAndComment = $(element)
        .find(`td:nth-child(4)`)
        .text()
        .trim();
      student.subjects = subjectsFormater(subjectAndComment);
      const statusKeywords = ["absent", "shifted", "withheld"];
      const isStatusComment = statusKeywords.some((keyword) =>
        subjectAndComment.toLowerCase().includes(keyword)
      );
      if (isStatusComment) {
        student.comment = subjectAndComment;
      }
      students.push(student);
    });
    return students.filter((student) => student.name && student.index);
  } catch (err) {
    return err.message;
  }
};

export const studentList04 = async (url, year, school, level) => {
  try {
    const studentTemplate = {
      school,
      index: null,
      year,
      examType: level,
      name: null,
      sex: null,
      comment: null,
      grade: null,
      subjects: null,
    };
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const students = [];
    $("table:nth-of-type(2) tr").each((index, element) => {
      if (index === 0) return;
      const student = { ...studentTemplate };
      student.index = studentIndexFormater(
        $(element)
          .find(`td:nth-child(1)`)
          .text()
          .replace(/[a-zA-Z]/g, "")
          .trim()
      );
      student.sex = $(element).find(`td:nth-child(3)`).text().trim();
      student.name = $(element).find(`td:nth-child(4)`).text().trim();
      const subjectAndComment = $(element)
        .find(`td:nth-child(5)`)
        .text()
        .trim();
      student.subjects = subjectsFormater(subjectAndComment);
      const statusKeywords = ["absent", "shifted", "withheld"];
      const isStatusComment = statusKeywords.some((keyword) =>
        subjectAndComment.toLowerCase().includes(keyword)
      );
      if (isStatusComment) {
        student.comment = subjectAndComment;
      }
      students.push(student);
    });
    return students.filter((student) => student.name && student.index);
  } catch (err) {
    return err.message;
  }
};

export const studentList05 = async (url, year, school, level) => {
  try {
    const studentTemplate = {
      school,
      index: null,
      year,
      examType: level,
      name: null,
      sex: null,
      comment: null,
      repeater: false,
      grade: null,
      subjects: [],
    };

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const students = [];
    const subjectsList = [];
    $("table:nth-of-type(1) tr").each((index, element) => {
      if (index < 2) return;
      const student = { ...studentTemplate };
      student.index = $(element)
        .find("td:nth-child(1)")
        .text()
        .replace(/[a-zA-Z]/g, "")
        .trim();
      student.name = $(element).find("td:nth-child(3)").text().trim();
      student.sex = $(element).find("td:nth-child(4)").text().trim();
      student.repeater =
        $(element).find("td:nth-child(2)").text().trim() !== "";
      const subjectsData = [];
      $("table tr").each((index, element) => {
        const subjectName = $(element).find("td:nth-child(5)").text().trim();
        if (subjectName && !subjectsList.includes(subjectName)) {
          subjectsList.push(subjectName);
        }
      });
      for (let i = 0; i < subjectsList.length; i++) {
        const subjectScore = $(element)
          .find(`td.mark:nth-child(${i + 5})`)
          .text()
          .trim();
        subjectsData.push({
          title: subjectsList[i],
          marks: subjectScore || null,
        });
      }
      student.subjects = subjectsData;
      student.comment = $(element).find("td:nth-last-child(1)").text().trim();
      student.grade = $(element).find("td:nth-last-child(2)").text().trim();
      students.push(student);
    });
    return students;
  } catch (err) {
    return err.message;
  }
};

export const studentList06 = async (params) => {
  try {
    const studentTemplate = {
      school,
      index: null,
      year,
      examType: level,
      name: null,
      sex: null,
      comment: null,
      repeater: false,
      grade: null,
      subjects: [],
    };

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const students = [];
    const subjectsList = [];
    $("table:nth-of-type(1) tr").each((index, element) => {
      if (index < 1) return;
      const student = { ...studentTemplate };
      student.index = indexSlicer(
        $(element).find("td:nth-child(1)").text().trim()
      );
      student.sex = $(element).find("td:nth-child(2)").text().trim();
      student.name = $(element).find("td:nth-child(3)").text().trim();
      const aggt = $(element).find("td:nth-child(4)").text().trim();
      const div = $(element).find("td:nth-child(5)").text().trim();
      const detailedSubjects = $(element).find("td:nth-child(6)").text().trim();
      const subjectsData = [];
      detailedSubjects.split(" ").forEach((subjectScore) => {
        const parts = subjectScore.split("-");
        if (parts.length === 2) {
          const subject = parts[0].trim().toUpperCase();
          const score = parts[1].trim();
          if (subject && score) {
            if (!subjectsList.includes(subject)) {
              subjectsList.push(subject);
            }
            subjectsData.push({
              title: subject,
              marks: score,
            });
          }
        }
      });
      aggt.includes("-")
        ? (student.grade = `${div}.0`)
        : (student.grade = `${div}.${aggt}`);
      div.includes("ABS") ? (student.comment = "Absent") : null;
      div.includes("FLD") || div.includes("IV") || div.includes("0")
        ? (student.comment = "Failed")
        : null;
      div.includes("I") ? (student.comment = "Pass") : null;
      div.includes("II") ? (student.comment = "Pass") : null;
      div.includes("III") ? (student.comment = "Pass") : null;
      student.subjects = subjectsData;
      students.push(student);
    });
    return students;
  } catch (err) {
    return err.message;
  }
};

export const studentList07 = async (params) => {
  try {
    const studentTemplate = {
      school,
      index: null,
      year,
      examType: level,
      name: null,
      sex: null,
      comment: null,
      repeater: false,
      grade: null,
      subjects: [],
    };

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const students = [];
    const subjectsList = [];
    $("table:nth-of-type(1) tr").each((index, element) => {
      if (index < 1) return;
      const student = { ...studentTemplate };
      student.index = indexSlicer(
        $(element).find("td:nth-child(1)").text().trim()
      );
      student.sex = $(element).find("td:nth-child(2)").text().trim();
      const div = $(element).find("td:nth-child(4)").text().trim();
      const aggt = $(element).find("td:nth-child(3)").text().trim();
      student.grade = `${div}.${aggt}`;
      const detailedSubjects = $(element).find("td:nth-child(5)").text().trim();
      const subjectsData = [];
      detailedSubjects.split(" ").forEach((subjectScore) => {
        const parts = subjectScore.split("-");
        if (parts.length === 2) {
          const subject = parts[0].trim().toUpperCase();
          const score = parts[1].trim();
          if (subject && score) {
            if (!subjectsList.includes(subject)) {
              subjectsList.push(subject);
            }
            subjectsData.push({
              title: subject,
              marks: score,
            });
          }
        }
      });
      aggt.includes("-")
        ? (student.grade = `${div}.0`)
        : (student.grade = `${div}.${aggt}`);
      div.includes("ABS") ? (student.comment = "Absent") : null;
      div.includes("FLD") || div.includes("IV") || div.includes("0")
        ? (student.comment = "Failed")
        : null;
      div.includes("I") ? (student.comment = "Pass") : null;
      div.includes("II") ? (student.comment = "Pass") : null;
      div.includes("III") ? (student.comment = "Pass") : null;
      student.subjects = subjectsData;
      students.push(student);
    });
    return students;
  } catch (err) {
    return err.message;
  }
};

export const studentList08 = async (params) => {
  try {
    const studentTemplate = {
      school,
      index: null,
      year,
      examType: level,
      name: null,
      sex: null,
      comment: null,
      repeater: false,
      grade: null,
      subjects: [],
    };

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const students = [];
    const subjectsList = [];
    $("table:nth-of-type(1) tr").each((index, element) => {
      if (index < 1) return;
      const student = { ...studentTemplate };
      student.index = indexSlicer(
        $(element).find("td:nth-child(1)").text().trim()
      );
      student.sex = $(element).find("td:nth-child(2)").text().trim();
      const div = $(element).find("td:nth-child(4)").text().trim();
      const aggt = $(element).find("td:nth-child(3)").text().trim();
      student.grade = `${div}.${aggt}`;
      const detailedSubjects = $(element)
        .find("td:nth-child(5)")
        .text()
        .trim()
        .replace(/'/g, "");
      const subjectsData = [];
      detailedSubjects.split("  ").forEach((subjectScore) => {
        const parts = subjectScore.split("-");
        if (parts.length === 2) {
          const subject = parts[0].trim().toUpperCase();
          const score = parts[1].trim();
          if (subject && score) {
            if (!subjectsList.includes(subject)) {
              subjectsList.push(subject);
            }
            subjectsData.push({
              title: subject,
              marks: score,
            });
          }
        }
      });
      aggt.includes("-")
        ? (student.grade = `${div}.0`)
        : (student.grade = `${div}.${aggt}`);
      div.includes("ABS") ? (student.comment = "Absent") : null;
      div.includes("FLD") || div.includes("IV") || div.includes("0")
        ? (student.comment = "Failed")
        : null;
      div.includes("I") ? (student.comment = "Pass") : null;
      div.includes("II") ? (student.comment = "Pass") : null;
      div.includes("III") ? (student.comment = "Pass") : null;
      student.subjects = subjectsData;
      students.push(student);
    });
    return students;
  } catch (err) {
    return err.message;
  }
};

export const studentList09 = async (params) => {
  try {
    const studentTemplate = {
      school,
      index: null,
      year,
      examType: level,
      name: null,
      sex: null,
      comment: null,
      repeater: false,
      grade: null,
      subjects: [],
    };

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const students = [];
    const subjectsList = [];
    $("table")
      .eq(2)
      .find("tr")
      .each((index, element) => {
        if (index < 1) return;
        const student = { ...studentTemplate };
        student.index = indexSlicer(
          $(element).find("td:nth-child(1)").text().trim()
        );
        student.sex = $(element).find("td:nth-child(2)").text().trim();
        const div = $(element).find("td:nth-child(4)").text().trim();
        const aggt = $(element).find("td:nth-child(3)").text().trim();
        student.grade = `${div}.${aggt}`;
        const detailedSubjects = $(element)
          .find("td:nth-child(5)")
          .text()
          .trim()
          .replace(/'/g, "");
        const subjectsData = [];
        detailedSubjects.split("  ").forEach((subjectScore) => {
          const parts = subjectScore.split("-");
          if (parts.length === 2) {
            const subject = parts[0].trim().toUpperCase();
            const score = parts[1].trim();
            if (subject && score) {
              if (!subjectsList.includes(subject)) {
                subjectsList.push(subject);
              }
              subjectsData.push({
                title: subject,
                marks: score,
              });
            }
          }
        });
        aggt.includes("-")
          ? (student.grade = `${div}.0`)
          : (student.grade = `${div}.${aggt}`);
        div.includes("ABS") ? (student.comment = "Absent") : null;
        div.includes("FLD") || div.includes("IV") || div.includes("0")
          ? (student.comment = "Failed")
          : null;
        div.includes("I") ? (student.comment = "Pass") : null;
        div.includes("II") ? (student.comment = "Pass") : null;
        div.includes("III") ? (student.comment = "Pass") : null;
        student.subjects = subjectsData;
        students.push(student);
      });
    return students;
  } catch (err) {
    return err.message;
  }
};

export const studentList10 = async (params) => {
  try {
    const studentTemplate = {
      school,
      index: null,
      year,
      examType: level,
      name: null,
      sex: null,
      comment: null,
      repeater: false,
      grade: null,
      subjects: [],
    };

    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const students = [];
      let targetSchool = false;
      $("body")
        .contents()
        .each((i, el) => {
          const text = $(el).text().trim();
          if (text.includes(`${year} RESULTS FOR : ${school}`)) {
          } else if (text.includes("RESULTS FOR : M") && targetSchool) {
            targetSchool = false;
          }
          if (targetSchool && text) {
            if (text.match(/^\d{4}\s+[MF]\s+/)) {
              const [cno, sex, ...nameParts] = text.split(/\s+/);
              const name = nameParts.slice(0, -1).join(" ");
              const remark = nameParts.slice(-1)[0];
              results.push({
                CNO: cno,
                Name: name,
                Sex: sex,
                Remark: remark,
              });
            }
          }
        });
      return results;
    } catch (err) {
      return err.message;
    }
  } catch (err) {
    return err.message;
  }
};
