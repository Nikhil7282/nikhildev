#!/usr/bin/env node

import figlet from "figlet";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import gradient from "gradient-string";
import { createSpinner } from "nanospinner";

async function main() {
  const sleep = async (ms = 2000) => new Promise((res) => setTimeout(res, ms));

  const asyncFiglet = async () => {
    figlet("Hi There,", { font: "Puffy", width: 80 }, (err, data) => {
      console.log(gradient.pastel.multiline(data));
    });
  };

  async function Content() {
    const spinner = createSpinner().start({
      text: "Loading Nikhil's Details",
    });
    await sleep();
    spinner.success();

    await asyncFiglet();
    await sleep(5000);
    console.log();

    const aboutTitle = chalkAnimation.pulse(`${chalk.yellowBright("About")}`);
    await sleep();
    aboutTitle.stop();

    console.log(`I am ${chalk.bgMagentaBright(
      "Nikhil"
    )}, a Electronics and Communication graduate with aspirations of becoming a prosperous developer. I'm passionate about programming and also enjoy working with ${chalk.bgCyan(
      "web technologies and blockchain technologies"
    )}. I'm always eager to connect with like-minded individuals, so feel free to reach out if you'd like to discuss a project or simply geek out about all things web development!
    `);

    const skillsTitle = chalkAnimation.pulse(chalk.yellowBright("Skills"));
    await sleep();
    skillsTitle.stop();

    console.log(
      `${chalk.cyanBright("Languages")} - ${chalk.red("Java")},${chalk.yellow(
        "Javascript"
      )},${chalk.blue("Typescript")} `
    );
    console.log(
      `${chalk.cyanBright("FrameWorks")} - ${chalk.blue(
        "React Js"
      )}, ${chalk.yellow("Express Js")},${chalk.red("Next Js")}`
    );
    console.log(
      `${chalk.cyanBright("Technologies")} - ${chalk.red(
        "Node js"
      )},${chalk.yellow("WebSockets")},${chalk.red("Redis")},${chalk.gray(
        "REST API"
      )},${chalk.green("GraphQl")}`
    );
    console.log(
      `${chalk.cyanBright("DataBases")} - ${chalk.red(
        "MongoDb"
      )},${chalk.yellow("MySql")},${chalk.red("PostgresSQL")}`
    );
    console.log(
      `${chalk.cyanBright("Tools")} - ${chalk.red("Git")},${chalk.yellow(
        "GitHub"
      )},${chalk.blue("Docker")},${chalk.gray("Netlify")},${chalk.green(
        "Vercel"
      )},${chalk.magenta("Render")}`
    );
    console.log();

    const messageTitle = chalkAnimation.pulse(
      `${chalk.yellowBright("Message")}`
    );
    await sleep(3000);
    messageTitle.stop();
    console.log(
      `${chalk.cyanBright(
        "Nikhil is up for hire,Thanks for checking out my cli!"
      )}`
    );
  }

  await Content();
}
main();

export default main;
