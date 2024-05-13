import Data from '../model/Data';
import readCSV from '../model/readCSV';
import writeCSV from '../model/writeCSV';

async function teste() {
    const dados:Data[] = [
        {
            nome:'1',
            peso:10,
            valor:2,
            quantidade:10
        }
    ]
        await writeCSV('./model/estoque.csv', dados);
    console.log(dados);   
}

teste();


