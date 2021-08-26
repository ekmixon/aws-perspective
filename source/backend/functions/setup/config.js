const {
    API_GATEWAY,
    STACK_NAME,
    ACCOUNT_ID,
    COGNITO_IDENTITY_POOL,
    COGNITO_USER_POOL_ID,
    COGNITO_USER_POOL_WEB_CLIENT_ID,
    DEPLOYMENT_BUCKET,
    DEPLOYMENT_BUCKET_KEY,
    DISCOVERY_BUCKET,
    WEBUI_BUCKET,
    DRAWIO_API_GATEWAY,
    REGION,
    IMAGE_VERSION,
    EXISTING_CONFIG,
    ECR_REPO_NAME,
    CREATE_ES_SERVICE_ROLE,
    NEPTUNE_INSTANCE_CLASS,
    CREATE_READ_REPLICA,
    ELASTICSEARCH_INSTANCE_TYPE,
    ANONYMOUS_METRIC_OPT_OUT,
    AMPLIFY_STORAGE_BUCKET,
    ACCESS_LOGS,
    APPSYNC_API_ARN,
    APPSYNC_API_ID,
    APPSYNC_API_GRAPHQL_URL,
    ATHENA_WORKGROUP,
    VERSION,
    COST_AND_USAGE_REPORT_BUCKET,
    COST_AND_USAGE_RESULTS_BUCKET
} = process.env

const PERSPECTIVE_APP_NAME = `aws-perspective-${ACCOUNT_ID}`;

module.exports = {
    API_GATEWAY,
    STACK_NAME,
    ACCOUNT_ID,
    COGNITO_IDENTITY_POOL,
    COGNITO_USER_POOL_ID,
    COGNITO_USER_POOL_WEB_CLIENT_ID,
    DEPLOYMENT_BUCKET,
    DEPLOYMENT_BUCKET_KEY,
    DISCOVERY_BUCKET,
    WEBUI_BUCKET,
    DRAWIO_API_GATEWAY,
    REGION,
    IMAGE_VERSION,
    EXISTING_CONFIG,
    ECR_REPO_NAME,
    CREATE_ES_SERVICE_ROLE,
    NEPTUNE_INSTANCE_CLASS,
    CREATE_READ_REPLICA,
    ELASTICSEARCH_INSTANCE_TYPE,
    ANONYMOUS_METRIC_OPT_OUT,
    AMPLIFY_STORAGE_BUCKET,
    ACCESS_LOGS,
    APPSYNC_API_ARN,
    APPSYNC_API_ID,
    APPSYNC_API_GRAPHQL_URL,
    ATHENA_WORKGROUP,
    PERSPECTIVE_APP_NAME,
    PERSPECTIVE_STACK_NAME: `${PERSPECTIVE_APP_NAME}-${REGION}`,
    VERSION,
    COST_AND_USAGE_REPORT_BUCKET,
    COST_AND_USAGE_RESULTS_BUCKET
}