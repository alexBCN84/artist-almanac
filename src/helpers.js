export const selectProps = (object, props) => {
    return props.reduce((a, x) => {
        if (object.hasOwnProperty(x)) a[x] = object[x];
        return a;
    }, {});
}