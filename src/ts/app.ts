import { TaskList } from './TaskList';

const inputValue: HTMLInputElement | null = document.querySelector('.input__section--task');
const addTaskBtn: HTMLButtonElement | null = document.querySelector('.input__section--add');

const check = (): void => {
    if(inputValue.value !== '') {
        new TaskList(inputValue.value);
        inputValue.value = '';
    } else {
        alert('Please write your task in the input field!');
    }
}

addTaskBtn.addEventListener('click', check);

window.addEventListener('keydown', (e: KeyboardEvent): void => {
    if (e.which === 13) {
        check();
    }
});