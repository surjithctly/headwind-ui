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
    body: req.body,
  })
    .then(async (response) => {
      const result = await response.json();
      //console.log(result);
      if (response.status === 201) {
        res.statusCode = 200;
        res.json({
          success: true,
          message: "Success! Subscribed to the list",
          data: result,
        });
      } else {
        res.statusCode = response.status;
        res.json({
          success: false,
          message: "Sorry! Could not complete the request",
          data: result,
        });
      }
    })
    .catch((error) => {
      res.statusCode = 400;
      res.json({
        success: false,
        message: "Sorry! Unexpected Error Occured",
        data: error,
      });
    });
};
