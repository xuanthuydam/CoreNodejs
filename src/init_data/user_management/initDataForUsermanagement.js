import mongoose from "mongoose";
import Language from "../../models/user_management/languageModel.js";
import Timezone from "../../models/user_management/timzoneModel.js";
import Theme from "../../models/user_management/themeModel.js";
import Role from "../../models/user_management/roleModel.js";

const initData = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://DBTest:xlfv4cllm47qSdlL@cluster0.jmmidhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const languages = [
      { language_name: "English", code: "EN", description: "English language" },
      {
        language_name: "Vietnamese",
        code: "VI",
        description: "Vietnamese language",
      },
      {
        language_name: "Japanese",
        code: "JA",
        description: "Japanese language",
      },
    ];

    for (const language of languages) {
      await Language.findOneAndUpdate({ code: language.code }, language, {
        upsert: true,
        new: true,
      });
    }

    const timezones = [
      {
        timezone_name: "UTC",
        offset: "+00:00",
        description: "Coordinated Universal Time",
      },
      {
        timezone_name: "ICT",
        offset: "+07:00",
        description: "Indochina Time - Vietnam",
      }, // Vietnamese
      {
        timezone_name: "JST",
        offset: "+09:00",
        description: "Japan Standard Time",
      }, // Japan
    ];

    for (const timezone of timezones) {
      await Timezone.findOneAndUpdate(
        { timezone_name: timezone.timezone_name },
        timezone,
        {
          upsert: true,
          new: true,
        }
      );
    }

    const themes = [
      { theme_name: "Light", description: "Light theme with bright colors" },
      { theme_name: "Dark", description: "Dark theme with dark colors" },
      { theme_name: "Blue", description: "Blue theme with blue colors" },
    ];

    for (const theme of themes) {
      await Theme.findOneAndUpdate({ theme_name: theme.theme_name }, theme, {
        upsert: true,
        new: true,
      });
    }

    const roles = [
      { role_name: "Admin", description: "Admin role with full permissions" },
      { role_name: "User", description: "User role with limited permissions" },
    ];

    for (const role of roles) {
      await Role.findOneAndUpdate({ role_name: role.role_name }, role, {
        upsert: true,
        new: true,
      });
    }

    console.log("Data initialized successfully!");
  } catch (error) {
    console.error("Error initializing data:", error);
  } finally {
    mongoose.connection.close();
  }
};

export default initData();
