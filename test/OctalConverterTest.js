var assert = require('assert');
var octalConverter = require('../OctalConverter');

describe('givenDecimal1WhenConvertThen1', function () {
    it('convert(1) = 1', function () {
        //Given
        var a = 1;
        var expectedResult = 1;

        // When
        var actualResult = octalConverter.convert(a);

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
        var actualResult = octalConverter.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})

describe('givenDecimal8WhenConvertThen10', function () {
    it('convert(8) = 10', function () {
        //Given
        var a = 8;
        var expectedResult = 10;

        // When
        var actualResult = octalConverter.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})

describe('givenDecimal95WhenConvertThen137', function () {
    it('convert(95) = 137', function () {
        //Given
        var a = 95;
        var expectedResult = 137;

        // When
        var actualResult = octalConverter.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})

describe('givenDecima2048WhenConvertThen4000', function () {
    it('convert(2048) = 4000', function () {
        //Given
        var a = 2048;
        var expectedResult = 4000;

        // When
        var actualResult = octalConverter.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})
