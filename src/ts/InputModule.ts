export interface InputModule {
    container: HTMLDivElement | null;
    createTask(taskName: string): void;
    editTask(inputTask: HTMLInputElement): void;
    removeTask(taskWrapper: HTMLDivElement): void;
}
