
// Helper functions below

function compactNumber(givenNumber) {
    let output = "";
    if (givenNumber > 10000) {
        output = Math.floor(givenNumber / 1000) + "k";
    } else if (givenNumber > 1000) {
        output = (givenNumber / 1000).toString().slice(0, 3) + "k";
    } else if (givenNumber !== undefined) {
        output = givenNumber.toString();
    }
    return output;
}

function ifEqual(v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
}

function absoluteTime(givenTimestamp) {
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "America/New_York",
        timeZoneName: "short",
    };
    return new Date(givenTimestamp).toLocaleString("en-US", options);
}

function relativeTimeVsNow(previousDate) {
    // Shamelessly ripped off of stackOverflow
    let current = Date.now();
    let previous = Date.parse(previousDate);

    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30.44;
    const msPerYear = msPerDay * 365.2425;

    let elapsed = current + 1000 - previous;

    if (elapsed < 0) {
        return "just now";
    }
    else if (elapsed < msPerMinute) {
        let x = Math.floor(elapsed / 1000);
        if (x === 1) {
            return "1 second ago";
        } else {
            return x + " seconds ago";
        }
    } else if (elapsed < msPerHour) {
        let x = Math.floor(elapsed / msPerMinute);
        if (x === 1) {
            return "1 minute ago";
        } else {
            return x + " minutes ago";
        }
    } else if (elapsed < msPerDay) {
        let x = Math.floor(elapsed / msPerHour);
        if (x === 1) {
            return "1 hour ago";
        } else {
            return x + " hours ago";
        }
    } else if (elapsed < msPerMonth) {
        let x = Math.floor(elapsed / msPerDay);
        if (x === 1) {
            return "1 day ago";
        } else {
            return x + " days ago";
        }
    } else if (elapsed < msPerYear) {
        let x = Math.floor(elapsed / msPerMonth);
        if (x === 1) {
            return "about 1 month ago";
        } else {
            return "about " + x + " months ago";
        }
    } else {
        let x = Math.floor(elapsed / msPerYear);
        if (x === 1) {
            return "about 1 year ago";
        } else {
            return "about " + x + " years ago";
        }
    }
}



(function(Handlebars) {

    Handlebars.registerHelper('compactNumber', compactNumber);
    Handlebars.registerHelper('ifEqual', ifEqual);
    Handlebars.registerHelper('absoluteTime', absoluteTime);
    Handlebars.registerHelper('relativeTimeVsNow', relativeTimeVsNow);
    Handlebars.partials = Handlebars.templates;

}(window.Handlebars));