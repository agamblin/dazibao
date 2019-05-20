export const checkIfEmail = (input: string) => {
    if (
        input.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        return true;
    }
    return false;
};

export const checkIfMinAndMax = (
    input: string,
    params: { min: number; max: number }
) => {
    if (input.length < params.min || input.length > params.max) {
        return false;
    }
    return true;
};
