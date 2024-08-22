import * as Joi from 'joi';

export const typeOrmConfigSchema = Joi.object({
  SERVER_PORT: Joi.number().required(),
  DB_TYPE: Joi.string().default('mysql'),
  DB_HOST: Joi.string().default('localhost'),
  DB_PORT: Joi.number().default('3306'),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_SYNC: Joi.boolean().required(),
});
