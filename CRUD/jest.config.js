module.exports = {
    roots: [
        "./src/test/"
    ],
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100
        }
    },
    //setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'node',
    verbose: true
}