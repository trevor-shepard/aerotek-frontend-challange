export const RECEIVE_MACHINE = "RECEIVE_MACHINE";
export const REMOVE_MACHINE = "REMOVE_MACHINE";

export const recieveMachine = (machine) => ({
    type: RECEIVE_MACHINE,
    machine
});

export const removeMachine = (machine) => ({
    type: REMOVE_MACHINE,
    machine
});