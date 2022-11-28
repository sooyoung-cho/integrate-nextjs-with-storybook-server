// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors";
import React from "react";
import ReactDOMServer from "react-dom/server";
import ButtonView from "../Button2";

async function handler(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic
  const { measureEnabled, outline, label, size, backgroundColor } = req.query;
  console.log("query!!!", label);

  res.send(
    ReactDOMServer.renderToString(
      <ButtonView
        label={label}
        size={size}
        outline={outline}
        backgroundColor={backgroundColor}
      />
    )
  );
}

export default handler;
