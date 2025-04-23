import { projectModelSchemaOptions } from './../../../dist';

import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('projectModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'project',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...projectModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
