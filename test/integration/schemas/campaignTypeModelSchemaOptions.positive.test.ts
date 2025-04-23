import { campaignTypeModelSchemaOptions } from './../../../dist';

import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('campaignTypeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'campaignType',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...campaignTypeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
