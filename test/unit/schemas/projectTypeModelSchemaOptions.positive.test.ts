import { projectTypeModelSchemaOptions } from '@app-pmsf/schemas';

import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('projectTypeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'projectType',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...projectTypeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
