const User = require("../models/User");
const exceljs = require("exceljs");

const exportUser = async (req, res) => {
  const workbook = new exceljs.Workbook();

  const worksheet = workbook.addWorksheet("my users");

  const path = "./files";

  worksheet.columns = [
    { header: "Id", key: "id", width: 10 },
    { header: "Name", key: "name", width: 10 },
    { header: "Email", key: "email", width: 10 },
    { header: "Age", key: "age", width: 10 },
  ];

  let users = [];
  users = await User.find({});

  let counter = 1;
  users.forEach((user) => {
    user.id = counter;

    worksheet.addRow(user);

    counter++;
  });

  // making first line in excel bold
  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  }); 

  try {
    const data = await workbook.xlsx
      .writeFile(`${path}/users.xlsx`)
      .then(() => {
        res.send({
          status: "success",
          message: "file successfully downloaded",
          path: `${path}/users.xlsx`,
        });
      });
  } catch (error) {
    console.log(error);
    res.send({
      statuus: "error",
      message: "something went wrong.",
    });
  }
};

module.exports = exportUser;
