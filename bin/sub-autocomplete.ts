#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SubAutocompleteStack } from '../lib/stack';

const app = new cdk.App();
new SubAutocompleteStack(app, 'SubAutocompleteStack');
