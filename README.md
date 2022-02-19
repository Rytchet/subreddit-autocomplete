# Subreddit autocomplete

This is an AWS CDK (API Gateway + Lambda) implementation of Reddit's
autocomplete for subreddits.

The Reddit API requires OAuth and has no open endpoints for this purpose, making
it difficult to use with workflow-improvement apps like
[ueli](https://ueli.app/#/) if you have a custom workflow for navigating Reddit.

This simple app is very easy to extend with other features, and allows you to
self-host on your AWS account.

![Example of use with ueli](https://github.com/Rytchet/sub-autocomplete/blob/main/assets/example.png?raw=true)

## Installation

- [Install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- Setup your credentials, region, and account name using the CLI with
  `aws configure`
  - Your AWS config and credentials files are stored in `~/.aws/` on MacOS/Linux
    and in `%USERPROFILE%\.aws\credentials` on Windows. Alternatively the config
    can be stored in environmental variables, or hardcoded.
- Install the CDK CLI `npm install -g aws-cdk`

More information: https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html

## Commands

- `cdk synth` - Build locally
- `cdk bootstrap` - Create new resources from the stack
- `cdk deploy` - Update resources
- `cdk destroy` - Delete all stack resources
