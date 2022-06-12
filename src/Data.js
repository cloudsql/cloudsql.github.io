module.exports = {
  questionBank : [
    {
      id: "data-type",
      title: "What is your data type?",
      choices: [
        { id: "structured", title: "Structured" },
        { id: "semi-structured", title: "Semi-structured" },
        { id: "unstructured", title: "Unstructured" },
      ]
    },
    {
      id: "structured-use-case",
      title: "What is your use case?",
      conflicts: ["semi-structured", "unstructured"],
      choices: [
        { id: "oltp", title: "ACID Transactions (OLTP)" },
        { id: "olap", title: "Analytics (OLAP)" },
      ]
    },
    {
      id: "semi-structured-use-case",
      title: "What is your use case?",
      conflicts: ["structured", "unstructured"],
      choices: [
        { id: "kv", title: "Dictionary / key-value" },
        { id: "in-memory", title: "Cache / in-memory key-value" },
        { id: "wide-column", title: "Wide column / 2-D key-value" },
        { id: "timeseries", title: "Time series" },
        { id: "ledger", title: "Audit trail / immutable ledger" },
        { id: "geospatial", title: "Location and geo-entities" },
        { id: "graph", title: "Propertiy graph / entity-relationships" },
        { id: "doc", title: "JSON / XML" },
        { id: "search", title: "Full text search" },
      ]
    },
    {
      id: "serverless",
      title: "Do you want dedicated server(s)?",
      conflicts: ["unstructured", "semi-structured"],
      choices: [
        { id: "dedicated", title: "Yes" },
        { id: "serverless", title: "No" },
      ]
    },
    {
      id: "cloud",
      title: "What is your choice of the cloud provider?",
      choices: [
        { id: "aws", title: "Amazon Web Services" },
        { id: "azure", title: "Microsoft Azure" },
        { id: "gcp", title: "Google Cloud Platform" },
        { id: "agnostic", title: "Cloud agnostic" },
      ]
    },
  ],
  datastoreBank : [
    {
      id: "rds",
      title: "Amazon RDS",
      url: "https://aws.amazon.com/rds/",
      tags: ["structured", "oltp", "dedicated", "aws"]
    },
    {
      id: "aurora",
      title: "Amazon Aurora",
      url: "https://aws.amazon.com/rds/aurora/",
      tags: ["structured", "oltp", "dedicated", "serverless", "aws"]
    },
    {
      id: "azure-sql",
      title: "Azure SQL",
      url: "https://azure.microsoft.com/en-us/products/azure-sql",
      tags: ["structured", "oltp", "dedicated", "serverless", "azure"]
    },
    {
      id: "cloudsql",
      title: "Cloud SQL",
      url: "https://cloud.google.com/sql",
      tags: ["structured", "oltp", "dedicated", "gcp"]
    },
    {
      id: "spanner",
      title: "Cloud Spanner",
      url: "https://cloud.google.com/spanner",
      tags: ["structured", "oltp", "dedicated", "gcp"]
    },
    {
      id: "sql-server",
      title: "Microsoft SQL Server",
      url: "https://www.microsoft.com/en-us/sql-server",
      tags: ["structured", "oltp", "dedicated", "agnostic"]
    },
    {
      id: "oracle",
      title: "Oralce Database",
      url: "https://www.oracle.com/database/technologies/",
      tags: ["structured", "oltp", "dedicated", "agnostic"]
    },
    {
      id: "mysql",
      title: "MySQL",
      url: "https://www.mysql.com/",
      tags: ["structured", "oltp", "dedicated", "agnostic"]
    },
    {
      id: "postgres",
      title: "PostgreSQL",
      url: "https://www.postgresql.org/",
      tags: ["structured", "oltp", "dedicated", "agnostic"]
    },
    {
      id: "redshift",
      title: "RedShift",
      url: "https://aws.amazon.com/redshift/",
      tags: ["structured", "olap", "dedicated", "serverless", "aws"]
    },
    {
      id: "athena",
      title: "Amazon Athena",
      url: "https://aws.amazon.com/athena",
      tags: ["structured", "olap", "serverless", "aws"]
    },
    {
      id: "azure-synapse",
      title: "Azure Synapse Analytics",
      url: "https://azure.microsoft.com/en-us/services/synapse-analytics/",
      tags: ["structured", "olap", "dedicated", "serverless", "azure"]
    },
    {
      id: "big-query",
      title: "BigQuery",
      url: "https://cloud.google.com/bigquery",
      tags: ["structured", "olap", "serverless", "timeseries", "geospatial", "gcp"]
    },
    {
      id: "snowflake",
      title: "Snowflake",
      url: "https://www.snowflake.com/",
      tags: ["structured","serverless", "dedicated", "olap", "agnostic"]
    },
    {
      id: "databricks",
      title: "Databricks",
      url: "https://databricks.com/",
      tags: ["structured", "serverless", "dedicated", "olap", "agnostic"]
    },
    {
      id: "dynamodb",
      title: "Amazon DynamoDB",
      url: "https://aws.amazon.com/dynamodb/",
      tags: ["semi-structured", "kv", "aws"]
    },
    {
      id: "cosmosdb",
      title: "Azure Cosmos DB",
      url: "https://azure.microsoft.com/en-us/services/cosmos-db/",
      tags: ["semi-structured", "kv", "wide-column", "timeseries", "geospatial", "graph", "doc", "azure"]
    },
    {
      id: "big-table",
      title: "Cloud Bigtable",
      url: "https://cloud.google.com/bigtable",
      tags: ["semi-structured", "kv", "wide-column", "geospatial", "timeseries", "gcp"]
    },
    {
      id: "redis",
      title: "Redis",
      url: "https://redis.io/",
      tags: ["semi-structured", "kv", "in-memory", "agnostic"]
    },
    {
      id: "elasti-cache",
      title: "Amazon ElastiCache",
      url: "https://aws.amazon.com/elasticache/",
      tags: ["semi-structured", "kv", "in-memory", "aws"]
    },
    {
      id: "azure-cache",
      title: "Azure Cache for Redis",
      url: "https://azure.microsoft.com/en-us/services/cache/",
      tags: ["semi-structured", "kv", "in-memory", "azure"]
    },
    {
      id: "memorystore",
      title: "Memorystore",
      url: "https://cloud.google.com/memorystore",
      tags: ["semi-structured", "kv", "in-memory", "gcp"]
    },
    {
      id: "keyspace",
      title: "Amazon Keyspaces (for Apache Cassandra)",
      url: "https://aws.amazon.com/keyspaces/",
      tags: ["semi-structured", "wide-column", "geospatial", "aws"]
    },
    {
      id: "cassandra",
      title: "Apache Cassandra",
      url: "https://cassandra.apache.org",
      tags: ["semi-structured", "wide-column", "agnostic"]
    },
    {
      id: "timestream",
      title: "Amazon Timestream",
      url: "https://aws.amazon.com/timestream/",
      tags: ["semi-structured", "timeseries", "aws"]
    },
    {
      id: "influxdb",
      title: "InfluxDB",
      url: "https://www.influxdata.com/",
      tags: ["semi-structured", "timeseries", "agnostic"]
    },
    {
      id: "qldb",
      title: "Amazon Quantum Ledger Database (QLDB)",
      url: "https://aws.amazon.com/qldb/",
      tags: ["semi-structured", "ledger", "aws"]
    },
    {
      id: "azure-ledger",
      title: "Azure confidential ledger",
      url: "https://azure.microsoft.com/en-us/services/azure-confidential-ledger/",
      tags: ["semi-structured", "ledger", "azure"]
    },
    {
      id: "neptune",
      title: "Amazon Neptune",
      url: "https://aws.amazon.com/neptune/",
      tags: ["semi-structured", "graph", "azure"]
    },
    {
      id: "neptune",
      title: "Amazon Neptune",
      url: "https://aws.amazon.com/neptune/",
      tags: ["semi-structured", "graph", "aws"]
    },
    {
      id: "documentdb",
      title: "Amazon DocumentDB",
      url: "https://aws.amazon.com/documentdb/",
      tags: ["semi-structured", "doc", "aws"]
    },
    {
      id: "firestore",
      title: "Firestore",
      url: "https://cloud.google.com/firestore",
      tags: ["semi-structured", "doc", "aws"]
    },
    {
      id: "cloudsearch",
      title: "Amazon CloudSearch",
      url: "https://aws.amazon.com/cloudsearch/",
      tags: ["semi-structured", "search", "aws"]
    },
    {
      id: "azure-search",
      title: "Azure Cognitive Search",
      url: "https://azure.microsoft.com/en-us/services/search/",
      tags: ["semi-structured", "search", "azure"]
    },
    {
      id: "elasticsearch",
      title: "Elasticsearch",
      url: "https://www.elastic.co/elasticsearch/",
      tags: ["semi-structured", "search", "agnostic"]
    },
    {
      id: "s3",
      title: "Amazon S3",
      url: "https://aws.amazon.com/s3/",
      tags: ["unstructured", "aws"]
    },
    {
      id: "azure-blobs",
      title: "Azure Blob Storage",
      url: "https://azure.microsoft.com/en-us/services/storage/blobs/",
      tags: ["unstructured", "azure"]
    },
    {
      id: "cloud-storage",
      title: "Cloud Storage",
      url: "https://cloud.google.com/storage",
      tags: ["unstructured", "gcp"]
    },
    {
      id: "hdfs",
      title: "Hadoop Distributed File System (HDFS)",
      url: "https://hadoop.apache.org/",
      tags: ["unstructured", "agnostic"]
    },
    {
      id: "minio",
      title: "MinIO",
      url: "https://min.io/",
      tags: ["unstructured", "agnostic"]
    },
  ]
}
