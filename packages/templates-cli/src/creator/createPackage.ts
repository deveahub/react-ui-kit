import { readFileSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';

import { State } from '../types';

async function copyDir(src: string, dest: string) {
  const entries = await fs.readdir(src, { withFileTypes: true });
  await fs.mkdir(dest);
  // eslint-disable-next-line no-restricted-syntax
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      // eslint-disable-next-line no-await-in-loop
      await copyDir(srcPath, destPath);
    } else {
      // eslint-disable-next-line no-await-in-loop
      await fs.copyFile(srcPath, destPath);
    }
  }
}
const TEMPLATES_DIR = path.resolve(__dirname, '..', '..', 'templates');
const PACKAGES_DIR = path.resolve(__dirname, '..', '..', '..');

const normalizePackageNameToDirectory = (packageName: string) => {
  const output = packageName.replace(/\//g, '__');
  return output;
};

const changeNameOnPackageJSON = async (
  { packageName }: State['data'],
  normalizedPackageName: string
) => {
  const packageDir = path.resolve(
    PACKAGES_DIR,
    normalizedPackageName,
    'package.json'
  );
  const packageJSON = readFileSync(packageDir);

  const newPackage = {
    ...JSON.parse(packageJSON as unknown as string),
    name: packageName,
  };

  await fs.rm(packageDir);

  await fs.writeFile(packageDir, JSON.stringify(newPackage));
};

const createPackage = async (state: State['data']) => {
  const normalizedPackageName = normalizePackageNameToDirectory(
    state.packageName
  );
  await copyDir(
    `${TEMPLATES_DIR}/${state.packageType}`,
    `${PACKAGES_DIR}/${normalizedPackageName}`
  );
  await changeNameOnPackageJSON(state, normalizedPackageName);
};

export default createPackage;
