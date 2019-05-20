module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>src/tests/setup.ts'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@utils(.*)$': '<rootDir>/src/lib/utils$1',
        '^@factories(.*)$': '<rootDir>/src/lib/factories$1',
        '^@models(.*)$': '<rootDir>/src/db/models$1',
        '^@services(.*)$': '<rootDir>/src/lib/services$1',
        '^@routes(.*)$': '<rootDir>/src/lib/routes$1',
        '^@config(.*)$': '<rootDir>/src/config$1',
        '^@tests(.*)$': '<rootDir>/src/tests$1',
        '^@app$': '<rootDir>/src/lib/app.ts',
        '^@middlewares(.*)$': '<rootDir>/src/lib/middlewares$1',
        '^@controllers(.*)$': '<rootDir>/src/lib/controllers$1',
        '^@db$': '<rootDir>/src/db/index.ts',
    },
};
