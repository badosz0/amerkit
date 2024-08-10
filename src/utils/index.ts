export namespace Utils {
  export function chunkArray<T>(array: T[], itemsPerChunk: number): T[][] {
    const chunks: T[][] = [[]];

    for (const item of array) {
      const lastChunk = chunks[chunks.length - 1];
      if (lastChunk.length === itemsPerChunk) {
        chunks.push([item]);
      } else {
        lastChunk.push(item);
      }
    }

    return chunks;
  }

  export function shuffleArrayInPlace(array: any[]): void {
    for (let i = 0; i < array.length; i++) {
      const index = Math.floor(Math.random() * (i + 1));
      [array[i], array[index]] = [array[index], array[i]];
    }
  }

  export function shuffleArray<T>(array: T[], avoidOriginal = false): T[] {
    const copy = [...array];
    do {
      shuffleArrayInPlace(copy);
    } while (avoidOriginal && copy.every((element, i) => array[i] === element));

    return copy;
  }

  export function randomInArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  const numberFormat = Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  });

  export function abbreviate(value: number | bigint): string {
    return numberFormat.format(value);
  }

  export function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  export function toTitleCase(text: string, onlyFirst = true): string {
    return onlyFirst
      ? text[0].toUpperCase() + text.slice(1)
      : text
          .split(' ')
          .map((t) => toTitleCase(t))
          .join(' ');
  }

  export function sliceText(text: string, length: number): string {
    return text.length > length ? `${text.slice(0, length)}...` : text;
  }

  export function pluralize(amount: number, text: string): string {
    return `${text}${amount === 1 ? '' : 's'}`;
  }
}
