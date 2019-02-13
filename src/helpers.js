export const selectProps = (object, props) => {
    return props.reduce((a, x) => {
        if (object.hasOwnProperty(x)) a[x] = object[x];
        return a;
    }, {});
}

export const formatDate = date => {
    const dateArr = date.substring(0, 10).split("-");
    const dict = {
        "1": "Jan",
        "2": "Feb",
        "3": "Mar",
        "4": "Apr",
        "5": "May",
        "6": "Jun",
        "7": "Jul",
        "8": "Aug",
        "9": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec"
    };
    const day = dateArr[2];
    const monthNum = parseInt(dateArr[1], 10).toString();
    const year = dateArr[0];

    let month = "";

    for (let i in dict) {
        if (monthNum === i) {
            month = dict[i]
        }
    }

    return {
        day,
        month,
        year
    };
}