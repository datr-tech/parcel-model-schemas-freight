import { templateModelSchemaOptions } from '@app-pmsf/schemas';

import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('templateModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'template',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...templateModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
