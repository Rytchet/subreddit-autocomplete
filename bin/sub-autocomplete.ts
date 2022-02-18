#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SubAutocompleteStack } from '../lib/sub-autocomplete-stack';

const app = new cdk.App();
new SubAutocompleteStack(app, 'SubAutocompleteStack', {
  env: { account: '010637705351', region: 'eu-west-2' },
});
