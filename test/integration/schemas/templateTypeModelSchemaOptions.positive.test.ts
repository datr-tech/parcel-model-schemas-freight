import { templateTypeModelSchemaOptions } from './../../../dist';

import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('templateTypeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'templateType',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...templateTypeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
