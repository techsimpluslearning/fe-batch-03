import { useState } from "react";






export const constent = {
    todoList : ["task1","task2","task3","task4","task5"],
    lastThreeTasks : function () {
        return this.todoList.slice(-3);
    },
    color:["#ffadad", "#ffd6a5", "#fdffb6"]
}