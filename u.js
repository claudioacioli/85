function TimeDate (date=(new Date())) {
    const refresh = 1000;
    (() => {
        setInterval(() => {
            date.setMilliseconds(refresh);
            }, refresh);
    })();
    return date;
}

function DateStr (date = new Date()) {
    const
        dd = () => date.getDate().toString().padStart(2,'0'),
        mm = () => (date.getMonth() + 1).toString().padStart(2, '0'),
        yyyy = () => date.getFullYear().toString(),
        hh24 = () => date.getHours().toString().padStart(2, '0'),
        mi = () => date.getMinutes().toString().padStart(2, '0'),
        ss = () => date.getSeconds().toString().padStart(2, '0'),
        ddmmyyyy = () => `${dd()}·${mm()}·${yyyy()}`,
        hh24miss = () => `${hh24()}·${mi()}·${ss()}`
    ;

    return {
        dd, mm, yyyy, hh24, mi, ss, ddmmyyyy, hh24miss
    };
}


function timeline (fun, time=500) {
    return setTimeout(() => {
        fun();
        return timeline(fun, time);
        }, time);
}