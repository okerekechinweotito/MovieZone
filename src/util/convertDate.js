export default function convertDate(date) {
    if (!date) return date;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const [year,month,day] = date.split('-');

    return `${months[month - 1]} ${day}, ${year}`;
}
