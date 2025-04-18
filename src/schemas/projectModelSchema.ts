import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/leith-common-schema-fields';

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
