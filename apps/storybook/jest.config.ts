import jestConfig from 'config/jest.react.config';

export default {
    ...jestConfig,
    collectCoverageFrom: [
        '<rootDir>/stories/**/*'
    ]
}
