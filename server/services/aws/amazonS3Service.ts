import AWS from 'aws-sdk';

export class AmazonS3Service {

  private regionValue: string;

  constructor(s3Region: string) {
    this.regionValue = s3Region;

    console.log(this.regionValue);

    // Set the region
    AWS.config.update(
      {
        region: this.regionValue
      }
    );
  }

  // Call S3 to list the buckets
  public async getAllS3Buckets(): Promise<any> {
    // Create S3 service object
    const s3 = new AWS.S3({apiVersion: '2006-03-01'});

    s3.listBuckets(function(err: any, data: any) {
      if (err) {
        return "Error" + err;
      } else {
        console.log(data.Buckets);
        return "Success: " + data.Buckets;
      }
    });
  }
}
