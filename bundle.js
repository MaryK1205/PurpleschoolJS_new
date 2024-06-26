(function () {
    'use strict';

    class User {

        constructor(task) {
            this.task = task;

        }
        do() {
            this.task.run();
        }
    }

    const Task = {
        run: function () { console.log('Писать код'); }
    };

    const new_task = Object.create(Task);
    console.log(new_task.run());

    const nnn = new User(new_task);
    console.log(nnn.do());

})();
