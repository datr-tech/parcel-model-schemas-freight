import { campaignModelSchemaOptions } from '@app-pmsf/schemas';

import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('campaignModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'campaign',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...campaignModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
