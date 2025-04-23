import { projectModelSchema } from '@app-pmsf/schemas';

import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

describe('projectModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
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

      // Act
      const propsFound = { ...projectModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
