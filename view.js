const RegisterView = (() => {

    const mainElement = document.querySelector('article');
    const clockElement = mainElement.querySelector('small');
    const dateElement = mainElement.querySelector('h1');

    const todayDate = new TimeDate();
    const todayStr = new DateStr(todayDate);

    const template = (minute, hashtags) => (`
      <td scope="col" class="text-center">#</td>
      <td scope="col" class="">${minute}</td>
      <td scope="col" class="w-75">${hashtags}</td>
    `);

    const renderTitle = () => {
        clockElement.textContent = todayStr.hh24miss();
        dateElement.textContent = todayStr.ddmmyyyy();
    }

    const renderHeader = () => {
        renderTitle();
        timeline(renderTitle, 500);
    }

    const renderRegister = (register) => {
        const {date, minute, hashtags} = register;
        const element = document.createElement("tr");
        element.innerHTML = template(minute, hashtags.join(String.fromCharCode(32)));
        mainElement.querySelector('tbody').appendChild(element);
    }

    const renderList = (registers) => {
        for (r of registers)
            renderRegister(r);
    }

    const render = () => {
        RegisterView.renderHeader();
        RegisterService.findAll();
    }

    return {
        renderTitle,
        renderHeader,
        renderList,
        renderRegister,
        render
    };
})();

const RegisterFormView = (() => {
    const formElement = document.querySelector('form');
    const submitElement = formElement.querySelectorAll('button').item(1);

    const click = function (e) {
        if (e.target !== submitElement)
            return;
        
        const elements = formElement.elements;

        const date = elements.item(1).value;
        const minute = elements.item(2).value;
        const hashtags = elements.item(3).value;

        RegisterController.create(date, minute, hashtags);
    }

//    EventsController.subscribe('click', this);

    return {
        click
    }

})();

const RegisterMenuView = (() => {
    const mainElement = document.querySelector('nav');

    const renderOptions = (options) => {
        for (o of options)
            renderOption(o);
    };

    const renderOption = (option) => {
        const element = document.createElement("a");

        element.classList.add('nav-link');
        element.href = `#${option}`;
        element.textContent = option;

        mainElement.appendChild(element);
    }

    return {
        renderOptions,
        renderOption
    }

})();
