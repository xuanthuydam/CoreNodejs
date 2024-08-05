import Role from "../../models/user_management/roleModel.js";
import Language from "../../models/user_management/languageModel.js";
import Timezone from "../../models/user_management/timzoneModel.js";
import Theme from "../../models/user_management/themeModel.js";

const getAllLanguage = async (req, res) => {
  try {
    const role = await Language.find({});
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTimezone = async (req, res) => {
  try {
    const role = await Timezone.find({});
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTheme = async (req, res) => {
  try {
    const role = await Theme.find({});
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllRole = async (req, res) => {
  try {
    const role = await Role.find({});
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllLanguage, getAllTheme, getAllTimezone, getAllRole };
