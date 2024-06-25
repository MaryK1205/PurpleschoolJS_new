'use strict'

import { User } from "./user.js";
import { Task } from "./task.js";

const new_task = Object.create(Task)
console.log(new_task.run());

const nnn = new User(new_task);
console.log(nnn.do());


