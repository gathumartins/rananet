const secondsToDays = 60 * 60 * 24;
const secondsToHours = 60 * 60;

// returns an array of numbers in the form of left over:
// [days, hours, minutes, seconds]
export const convertSecondsToValues = (seconds:any) => {
    const days = Math.floor(seconds / secondsToDays);
    const daysNext = Math.floor((seconds - 1) / secondsToDays);
    const hoursLeftOver = Math.floor(24 * (seconds / secondsToDays - days));
    const hoursLeftOverNext = Math.floor(
        24 * ((seconds - 1) / secondsToDays - days)
    );
    const minutesLeftOver = Math.floor(
        60 * (24 * (seconds / secondsToDays - days) - hoursLeftOver)
    );
    const minutesLeftOverNext = Math.floor(
        60 * (24 * ((seconds - 1) / secondsToDays - days) - hoursLeftOver)
    );
    const secondsLeftOver = Math.round(
        60 *
        (60 * (24 * (seconds / secondsToDays - days) - hoursLeftOver) -
            minutesLeftOver)
    );
    const secondsLeftOverNext = Math.round(
        60 *
        (60 * (24 * ((seconds - 1) / secondsToDays - days) - hoursLeftOver) -
            minutesLeftOver)
    );
    return [
        days,
        hoursLeftOver,
        minutesLeftOver,
        secondsLeftOver,
        daysNext,
        hoursLeftOverNext,
        minutesLeftOverNext,
        secondsLeftOverNext,
    ];
};