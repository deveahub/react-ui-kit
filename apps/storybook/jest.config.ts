import jestConfig from '@rrios-dev/node-config/jest.react.config';

export default {
    ...jestConfig,
    collectCoverageFrom: [
        '<rootDir>/stories/**/*'
    ]
}
