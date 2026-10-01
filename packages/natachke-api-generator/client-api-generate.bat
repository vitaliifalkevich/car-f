C:/Java/bin/java -jar openapi-generator-cli.jar generate -o ./generated_code -i ../natachke-api-client/openapi.yaml --package-name=natachke-api-client -g typescript-axios

copy .\generated_code\.openapi-generator\FILES  ..\natachke-api-client\.openapi-generator\
copy .\generated_code\.openapi-generator\VERSION  ..\natachke-api-client\.openapi-generator\
copy .\generated_code\.gitignore  ..\natachke-api-client
copy .\generated_code\.npmignore  ..\natachke-api-client
copy .\generated_code\.openapi-generator-ignore  ..\natachke-api-client
copy .\generated_code\api.ts  ..\natachke-api-client
