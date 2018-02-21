/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = (preferences = []) => {
    let secondLoverNumber;

    return preferences.reduce((sumOfTriangles, loverNumber, index) => {
        secondLoverNumber = preferences[loverNumber - 1];

        if (
            loverNumber > index + 1 &&
            secondLoverNumber > index + 1 &&
            preferences[secondLoverNumber - 1] === index + 1
        ) {
            return sumOfTriangles + 1;
        }

        return sumOfTriangles;
    }, 0);
};
