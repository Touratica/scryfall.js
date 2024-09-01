import {
  type JestConfigWithTsJest,
  createDefaultPreset,
  pathsToModuleNameMapper,
} from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

const defaultPreset = createDefaultPreset();

const jestConfig: JestConfigWithTsJest = {
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths /*, { prefix: '<rootDir>/' } */,
  ),
  ...defaultPreset,
};

export default jestConfig;
