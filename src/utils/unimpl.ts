function e(...args: any[]): never {
    throw Error(args.join(' '));
}

export function todo(...args: any[]): never {
    e(['not yet implemented', ...args]);
}

export function unimpl(...args: any[]): never {
    e(['not implemented', ...args]);
}

export function unreach(...args: any[]): never {
    e(['unreachable', ...args]);
}
