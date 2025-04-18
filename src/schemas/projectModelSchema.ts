import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

export const projectModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'projectId',
  },
  projectTypeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'ProjectTypeModel',
  },
  organisationId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'persona/OrganisationModel',
  },
  ownerUserId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'persona/UserModel',
  },
  ...commonSchemaFieldGroupModelType,
};
