import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@datr.tech/leith-common-schema-fields';

export const templateTypeModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'templateTypeId',
  },
  ...commonSchemaFieldGroupModelType,
};
