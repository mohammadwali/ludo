export const arrayRange = ([start, end], chunks = null) => {
    const range = Array.from({ length: (end - start) }, (v, k) => k + start);
    return chunks ? Array.from({ length: chunks }, (x, i) => range.slice(i * chunks, i * chunks + chunks)) : range;
};

