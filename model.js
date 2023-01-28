const RegisterStore = (() => {

    const dataset = localStorage.getItem('register')
        ? JSON.parse(localStorage.getItem('register'))
        : []
    ;

    const insert = (register) => {
        dataset.push(register);
        console.log(dataset);
    }

    const findAll = () => {
        return dataset;
    }

    const store = () => {
        localStorage.setItem('register', JSON.stringify(dataset));
    }

    document.body.addEventListenr ('beforeunload', store);

    return {
        insert,
        findAll,
        store
    }

})();