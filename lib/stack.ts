import {
  Stack,
  StackProps,
  aws_lambda_nodejs as lambda,
  aws_apigateway as apigateway,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class SubAutocompleteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const handler = new lambda.NodejsFunction(this, 'autocomplete');

    const api = new apigateway.RestApi(this, 'autocomplete-api', {
      restApiName: 'Reddit Autocomplete API',
    });

    const lambdaIntegration = new apigateway.LambdaIntegration(handler);

    api.root.addMethod('GET', lambdaIntegration);
  }
}
