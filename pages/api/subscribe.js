// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  console.log(req.body);
  await fetch("https://mail.web3creative.com/api/email-lists/1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.MAILCOACH_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(req.body, null, 2),
  })
    .then((response) => {
      console.log(response);

      if (response.status == 200) {
        res.statusCode = 200;
        res.json(response.body);
      } else {
        res.statusCode = response.status;
        res.json(response.statusText);
      }
    })
    .catch((error) => {
      res.statusCode = 400;
      res.json(error);
    });
};
