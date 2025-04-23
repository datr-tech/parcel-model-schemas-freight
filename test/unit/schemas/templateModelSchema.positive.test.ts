import { templateModelSchema } from '@app-pmsf/schemas';

import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

describe('templateModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
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

      // Act
      const propsFound = { ...templateModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
