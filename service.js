const RegisterService = (() => {

    let registers = [];

    const create = (date, minute, hashtags) => {
        const register = RegisterDomain.create(date, minute, hashtags.split(String.fromCharCode(32)));
        RegisterStore.insert(register);
        return register;
    }

    const findAll = () => {
        registers = RegisterStore.findAll();
        return registers;
    }

    const findAllDates = () => {
        let prev = null;
        let dates = {};

        registers.forEach(r => {
            if (prev !== r.date) {
                dates[r.date] = [];
                prev = r.date;
            }
            dates[r.date].push(r);
        });

        return Object.keys(dates);
    }

    return {
        create,
        findAll,
        findAllDates
    };
})();
