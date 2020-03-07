import { InputModule } from './InputModule';

export class TaskList implements InputModule {

    private _container: HTMLDivElement | null = document.querySelector('.item__section');

    constructor(taskName: string) {
        this.createTask(taskName);
    }

    get container (): HTMLDivElement {
        return this._container;
    }

    set container (_container: HTMLDivElement) {
        this._container = this.container;
    }

    createTask (taskName: string): void {

        const taskWrapper: HTMLDivElement = document.createElement('div');
        taskWrapper.classList.add('item__section--wrapper');

        const inputTask: HTMLInputElement = document.createElement('input');
        inputTask.type = 'text';
        inputTask.value = taskName;
        inputTask.disabled = true;
        inputTask.classList.add('item__section--input');

        const iconEdit: HTMLElement = document.createElement('i');
        iconEdit.classList.add('fa');
        iconEdit.classList.add('fa-edit');

        const iconRemove: HTMLElement = document.createElement('i');
        iconRemove.classList.add('fa');
        iconRemove.classList.add('fa-trash');

        const editTaskBtn: HTMLButtonElement = document.createElement('button');
        editTaskBtn.type = 'button';
        editTaskBtn.classList.add('item__section--edit');
        editTaskBtn.appendChild(iconEdit);

        const removeTaskBtn: HTMLButtonElement = document.createElement('button');
        removeTaskBtn.type = 'button';
        removeTaskBtn.classList.add('item__section--remove');
        removeTaskBtn.appendChild(iconRemove);

        this.container.appendChild(taskWrapper);
        taskWrapper.appendChild(inputTask);
        taskWrapper.appendChild(editTaskBtn);
        taskWrapper.appendChild(removeTaskBtn);

        editTaskBtn.addEventListener('click', (): void => this.editTask(inputTask));

        removeTaskBtn.addEventListener('click', (): void => this.removeTask(taskWrapper));

    }

    editTask (inputTask: HTMLInputElement): void {
        if (confirm('Are you sure to edit?')) {
            inputTask.disabled = !inputTask.disabled;
            (<HTMLDivElement>inputTask.parentNode).style.borderColor = 'lime';
        }
    }

    removeTask (taskWrapper: HTMLDivElement): void {
        if (confirm('Are you sure to delete?')) {
            this.container.removeChild(taskWrapper);
        }
    }

}