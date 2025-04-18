import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@datr.tech/leith-common-schema-fields';

export const templateModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'templateId',
  },
  campaignId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'CampaignModel',
  },
  templateTypeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'TemplateTypeModel',
  },
  ownerUserId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'persona/UserModel',
  },
  ...commonSchemaFieldGroupModelType,
};
