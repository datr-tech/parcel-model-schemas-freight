import { campaignModelSchema } from '@app-pmsf/schemas';

import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

describe('campaignModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
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

      // Act
      const propsFound = { ...campaignModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
