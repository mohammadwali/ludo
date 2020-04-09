export const findTokensByBlockPosition = (pos, sourceObject) => {
    return Object.entries(sourceObject)
        .reduce((result, [tokenColor, values]) => {
            if (pos > 16) {
                return result.concat(values.reduce((tokens, value, tokenIndex) => {
                    return value === pos ? tokens.concat({ tokenColor, tokenIndex }) : tokens;
                }, []));
            }
            return result;
        }, []);
};