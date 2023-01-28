const RegisterController = (() => {
    const init = () => {
        const registers = RegisterService.findAll();
        const options = RegisterService.findAllDates();
        RegisterView.renderHeader();
        RegisterView.renderList(registers);
        RegisterMenuView.renderOptions(options);
        EventsController.subscribe('click', RegisterFormView);
    };

    const create = (date, minute, hashtags) => {
        const register = RegisterService.create(date, minute, hashtags);
        RegisterView.renderRegister(register);
    };

    return {
        init,
        create
    }
})();

const EventsController = (() => {

    const clickViews = [];

    const init = () => {
        document.body.addEventListener('click', function (e) {
            clickViews.forEach((view) =>
                view.click(e)
            )
        })
    };

    const subscribe = (type, view) => {
        switch (type) {
            case 'click':
                clickViews.push(view);
                break;
        }
    };

    return {
        init,
        subscribe
    }
})();