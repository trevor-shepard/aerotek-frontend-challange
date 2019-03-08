export const RECIEVE_SERVICE_ACTION = "RECIEVE_SERVICE_ACTION";
export const REMOVE_SERVICE_ACTION = "REMOVE_SERVICE_ACTION";

export const recieveServiceAction = (serviceAction) => ({
    type: RECIEVE_SERVICE_ACTION,
    serviceAction
});

export const removeServiceAction = (serviceAction) => ({
    type: REMOVE_SERVICE_ACTION,
    serviceAction
});