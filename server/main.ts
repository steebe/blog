import express from 'express';
import { AmazonS3Service } from './services/aws/amazonS3Service';

const applicationContext = express();
const applicationPort = 3000;

applicationContext.get('/', (req: any, res: any) => {
  res.send('The sedulous hyena ate the antelope!');
});

// TODO: determine why this is busted
applicationContext.get('/s3Buckets', async(req: any, res: any) => {
  const amazonS3Service = new AmazonS3Service('us-west-2');
  const buckets = await amazonS3Service.getAllS3Buckets();
  console.log('Awaiting...');
  res.json(buckets);
});

applicationContext.listen(applicationPort, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${applicationPort}`);
});
