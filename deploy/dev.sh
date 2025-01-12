npm run "install:layers" &&
npm run build &&
sam build &&
sam deploy --config-env dev --profile my-account --parameter-overrides 'ParameterKey=Stage,ParameterValue=dev' 'ParameterKey=UserPoolDomainName,ParameterValue=user-post-sls-backend-auth' 'ParameterKey=SesVerifiedEmailAddress,ParameterValue=abhishekdesai6210@gmail.com'