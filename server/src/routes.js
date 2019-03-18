const router = require('koa-router')();

// eslint-disable-next-line no-unused-vars
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    PUBLIC_URL: '',
  });
});

module.exports = router;
