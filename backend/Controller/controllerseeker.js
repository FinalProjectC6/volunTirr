const seeker = require("../Models/seeker");

module.exports = {
  getallseekerss: async (req, res) => {
    try {
      let data = await seeker.getallseekers();
      res.json(data);
    } catch {
      (err) => {
        console.log(err);
      };
    }
  },

  getoneseekerss: async (req, res) => {
    try {
      let id = req.params.id;
      const data = await seeker.getoneseeker(id);
      res.json(data);
    } catch {
      (err) => {
        console.log(err);
      };
    }
  },
  delseeker: async (req, res) => {
    try {
      let seekerid = req.params.id;
      await seeker.deleteseeker(seekerid);
      res.send("seeker deleted");
    } catch {
      (err) => {
        console.log(err);
      };
    }
  },
  updaseeker: async (req, res) => {
    try {
      let seekrid = req.params.id;
      let {
        fullname,
        email_address,
        password,
        image,
        background,
        bio,
        phone,
        age,
        gender,
      } = req.body;

      let body = {
        fullname,
        email_address,
        password,
        image,
        background,
        bio,
        phone,
        age,
        gender,
      };

      seeker.updateseeker(seekrid, body);
      res.send("seeker updated");
    } catch {
      (err) => {
        console.log(err);
      };
    }
  },
  createseeker: async (req, res) => {
    try {
      let {
        id,
        fullname,
        email_address,
        password,
        image,
        background,
        bio,
        phone,
        age,
        gender,
      } = req.body;
      let body = {
        id,
        fullname,
        email_address,
        password,
        image,
        background,
        bio,
        phone,
        age,
        gender,
      };
      const user = await seeker.createseeker(body);
      console.log(user.dataValues);
      res.send(user);
    } catch {
      (err) => {
        console.log(err);
      };
    }
  },
};
