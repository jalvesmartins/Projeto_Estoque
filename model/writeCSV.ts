import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import Data from '../model/Data';

const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'nome' },
      { id: 'peso', title: 'peso' },
      { id: 'valor', title: 'valor' },
      { id: 'quantidade', title: 'quantidade' },
    ],append: true,
  });

  return csvWriter.writeRecords(data);
};

export default writeCSV;