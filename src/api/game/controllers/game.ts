/**
 * A set of functions called "actions" for `game`
 */

export default {
  claim: async (ctx, next) => {
    try {
      const { email } = ctx.request.query;
      const entries = await strapi.entityService.findMany(
        "api::reward.reward", {
          filters: {
            $not: {
              Amount: 0,
            },
          },
        }
      );

      const randomEntry = entries[Math.floor(Math.random() * entries.length)];
      const newAmount = randomEntry.Amount-1;

      await strapi.entityService.update("api::reward.reward", randomEntry.id, {
        data: {
          Amount: newAmount,
        },
      });

      await strapi.entityService.create('api::wining.wining', {
        data: {
          reward: randomEntry,
          Email: email
        },
      });

      ctx.body = {
        title: randomEntry.Title
      };
    } catch (err) {
      ctx.body = err;
    }
  }
};
