"use strict";

/**
 *  article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article");
// module.exports = {
//   async create(ctx) {
//     ctx.request.body.user = ctx.status.user.id;

//     const entity = await strapi.services.article.create(ctx.request.body);

//     return sanitizeEntity(entity, { model: strapi.models.article });
//   },

//   async update(ctx) {
//     const { id } = ctx.params;
//     const article = await strapi.services.article.findOne({ id });

//     if (!article) return ctx.throw(404);

//     if (ctx.request.body.user) {
//       return ctx.throw(400, "user field cannot be changed");
//     }

//     if (ctx.status.user.id !== article.user.id) {
//       return ctx.unauthorized(`You can't update this entry`);
//     }

//     const entity = await strapi.services.article.update(
//       { id },
//       ctx.request.body
//     );

//     return sanitizeEntity(entity, { model: strapi.models.article });
//   },

//   async delete(ctx) {
//     const { id } = ctx.params;
//     const article = await strapi.services.article.findOne({ id });

//     if (!article) return ctx.throw(404);

//     if (ctx.status.user.id !== article.user.id) {
//       return ctx.unauthorized(`You can't remove this entry`);
//     }

//     ctx.status = 204;
//   },
// };
