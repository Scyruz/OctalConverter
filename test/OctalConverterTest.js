var assert = require('assert');
var octalConverter = require('../OctalConverter');

describe('givenDecimal1WhenConvertThen1', function () {
    it('convert(1) = 1', function () {
        //Given
        var a = 1;
        var expectedResult = 1;

        // When
        var actualResult = octalConverter.convert(1);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})


describe('givenDecimal2WhenConvertThen2', function () {
    it('convert(2) = 2', function () {
        //Given
        var a = 2;
        var expectedResult = 2;

        // When
        var actualResult = octalConverter.convert(1);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})

