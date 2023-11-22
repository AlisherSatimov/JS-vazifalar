setInterval(() => {
    const now = new Date();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let week = now.getDay();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let dayBreaks = "AM";

    if (hour > 12) {
        hour = hour - 12;
        dayBreaks = "PM";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }

    if (week === 0) {
        week = "Sun.";
    } else if (week === 1) {
        week = "Mon.";
    } else if (week === 2) {
        week = "Tue.";
    } else if (week === 3) {
        week = "Wed.";
    } else if (week === 4) {
        week = "Thu.";
    } else if (week === 5) {
        week = "Fri.";
    } else if (week === 6) {
        week = "Sat.";
    }

    document.getElementById("dayBreaks").innerHTML = dayBreaks;
    document.getElementById("clock").innerHTML =
        hour + ":" + minute + ":" + second;
    document.getElementById("week").innerHTML = week;
    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = day;
}, 1000);
