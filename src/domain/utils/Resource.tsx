// Estados de la peticion
// LOADING
// ERROR
// SUCCESS

export abstract class Resource {
    constructor() {}
}

export const Loading = (): Resource => ({});

export const Success = (data: unknown): Resource => ({ data });

export const Err = (err: unknown): Resource => ({ err });
