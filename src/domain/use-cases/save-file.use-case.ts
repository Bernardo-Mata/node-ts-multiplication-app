import fs from 'fs';

export interface SaveFileUseCase{
    execute: (options: Options) => boolean;
}

export interface Options{
    fileContent: string;
    destination?: string;
    fileName?: string;
}


export class SaveFile implements SaveFileUseCase{
    constructor(
        /*
        DI dependency Injections
        */
    ){}

    execute(
        {
            fileContent,
            destination = './outputs',
            fileName = 'table'
        }: Options
    ): boolean{
        try
        {
            fs.mkdirSync(destination, {recursive: true});
            fs.writeFileSync(`${destination}/${fileName || 'output.txt'}`, fileContent);
            console.log('File saved successfully');
        }
        catch (error)
        {
            console.error('Error saving file:', error);
            return false;
        }
        return true;
    }
}
