const AWS = require("aws-sdk");

const S3 = require("aws-sdk/clients/s3");
const s3 = new S3();

interface Answers {
  name: string;
}

const inqPrompt = (): Promise<Answers> => {
  const inquirer = require("inquirer");
  const questions = [
    {
      type: "input",
      name: "name",
      message: "Enter the prefix of S3 bucket you would like to delete: ",
    },
  ];

  return inquirer.prompt(questions);
};

const deleteBucket = async (Bucket: any) => {
  try {
    console.log(`Deleting ${Bucket}`);
    const { Contents } = await s3.listObjects({ Bucket }).promise();
    if (Contents.length > 0) {
      await s3
        .deleteObjects({
          Bucket,
          Delete: {
            Objects: Contents.map(({ Key }: any) => ({ Key })),
          },
        })
        .promise();
    }
    await s3.deleteBucket({ Bucket }).promise();
    return true;
  } catch (err) {
    console.log("\n", err, "\n");
    return false;
  }
};

const main = async () => {
  const { Buckets } = await s3.listBuckets().promise();

  const answers: Answers = await inqPrompt();

  const prefix = answers.name;
  let deletedBuckets = 0;
  let notFound = 0;
  Buckets.map(async ({ Name }: any) => {
    if (Name.includes(prefix)) {
      const isDeleted = await deleteBucket(Name);
      deletedBuckets += isDeleted ? 1 : 0;
    } else {
      notFound = 1;
    }
  });
  if (notFound) {
    console.log(`Bucket does not exists with prefix ${prefix}`);
  } else {
    console.log(`\nDeleted ${deletedBuckets}/${Buckets.length} buckets.\n`);
  }
};

main();
