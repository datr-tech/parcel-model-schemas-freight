import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

export const campaignModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'campaignId',
  },
  campaignTypeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'CampaignTypeModel',
  },
  ownerUserId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'persona/UserModel',
  },
  projectId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'ProjectModel',
  },
  ...commonSchemaFieldGroupModelType,
};
