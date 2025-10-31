import fs from 'fs/promises';

export async function loadLocalWords(filePath: string) {
  const lines = await fs.readFile(filePath, 'utf-8');
  const words = lines.split('\n').map(x => x.trim()).filter(x => x.length > 0)
    .map(x => ({word: x}));
  return words;
}
