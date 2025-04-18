import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
