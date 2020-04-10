export const arrayRange = ([start, end], chunks = null) => {
    const range = Array.from({ length: (end - start) }, (v, k) => k + start);
    return chunks ? createChunk(range, chunks) : range;
};


const createChunk = (arr, size) => Array.from(
    { length: Math.ceil(arr.length / size) },
    (v, i) => arr.slice(i * size, i * size + size)
);