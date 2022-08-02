export function getDeskFreeDate(weeks) {
    let msWeeks = 1000 * 60 * 60 * 24 * (7 * Number(weeks));
    let futureDate = new Date(Date.now() + msWeeks);
    let formattedData = futureDate.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return formattedData;
}
