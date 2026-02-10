import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
} 

export class ServerApp {


    static run({base,limit, showTable, name, destination}: RunOptions) {
        console.log('Server App is running');
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            destination: `${destination}/table-${base}`,
            fileName: `${name}-${base}.txt`
            });
        console.log({base, limit, showTable, name, destination});
    }
}