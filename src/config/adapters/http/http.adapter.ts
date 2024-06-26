
// eslint-disable-next-line prettier/prettier
export abstract class HttpAdapter {
    //abstract get (url: string, options: any): Promise<any>;
    abstract get<T>( url:string, options?:Record<string, unknown> ): Promise<T>
};