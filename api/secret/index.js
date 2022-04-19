module.exports = async function (context, req) {
  context.res.json({
      status: 200,
      hello: process.env.KeyVaultTest
  });
};