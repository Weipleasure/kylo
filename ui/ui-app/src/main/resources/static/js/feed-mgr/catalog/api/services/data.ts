// TODO file for testing

import {DataSource} from "../models/datasource";

export const dataSources: DataSource[] = [
    {
        id: "66da68de-1eef-4db0-af35-5b21c37f8005",
        title: "Gregs Amazon S3",
        connector: {
            id: "2",
            title: "Amazon S3",
            icon: "amazon",
            tabs: [{label: "Files", sref: ".browse"}],
            template: {
                options: {
                    "spark.hadoop.fs.s3n.awsAccessKeyId": "",
                    "spark.hadoop.fs.s3n.awsSecretAccessKey": ""
                },
                paths: ["s3n://"]
            }
        }
    },
    {
        id: "dd11125d-8250-49d7-b38c-71b1393a55b0",
        title: "Ruslans Amazon S3",
        connector: {
            id: "2",
            title: "Amazon S3",
            icon: "amazon",
            tabs: [{label: "Files", sref: ".browse"}],
            template: {
                options: {
                    "spark.hadoop.fs.s3n.awsAccessKeyId": "",
                    "spark.hadoop.fs.s3n.awsSecretAccessKey": ""
                },
                paths: ["s3n://"]
            }
        },
    },
    {
        id: "0001125d-8250-49d7-b38c-71b1393a5000",
        title: "Ruslans Local File System",
        connector: {
            id: "9",
            title: "Local File System",
            icon: "fa-file",
            tabs: [{label: "Files", sref: ".browse"}],
            template: {
                options: {
                    "": "",
                    "": ""
                },
                paths: ["/"]
            }
        },
        paths: ["/Users/RU186002"]
    },
    {
        id: "76816ea7-b922-434d-8924-1b69531ccd47",
        title: "Localhost:9092",
        connector: {
            id: "3",
            title: "Kafka",
            icon: "kafka",
            template: {
                format: "org.apache.spark.sql.kafka010.KafkaSourceProvider",
                jars: ["file:/opt/nifi/mysql/kafka-clients-0.10.0.1.jar", "file:/opt/nifi/mysql/spark-sql-kafka-0-10_2.11-2.2.0.jar"],
                options: {
                    "kafka.bootstrap.servers": "localhost:9092"
                }
            }
        },
    },
    {
        id: "d6a15df6-1402-4ea3-81d1-980f37be3485",
        title: "Localhost:9093",
        connector: {
            id: "3",
            title: "Kafka",
            icon: "kafka",
            template: {
                format: "org.apache.spark.sql.kafka010.KafkaSourceProvider",
                jars: ["file:/opt/nifi/mysql/kafka-clients-0.10.0.1.jar", "file:/opt/nifi/mysql/spark-sql-kafka-0-10_2.11-2.2.0.jar"],
                options: {
                    "kafka.bootstrap.servers": "localhost:9093"
                }
            }
        },
    },
    {
        id: "94586bd5-3e4b-498f-977b-a725ee097812",
        title: "File Upload /var/dropzone",
        connector: {
            id: "4",
            title: "File Upload",
            icon: "file_upload",
            tabs: [{label: "Files", sref: ".upload"}]
        }
    },
    {
        id: "78211056-4d6e-4b4d-a0a8-9fad904734eb",
        title: "File Upload /opt/kylo/kylo-ui/config",
        connector: {
            id: "4",
            title: "File Upload",
            icon: "file_upload",
            tabs: [{label: "Files", sref: ".upload"}]
        }
    },
    {
        id: "c3122d8f-0765-4781-8be2-07480fea318c",
        title: "Ruslans HDFS home",
        connector: {
            id: "5",
            title: "HDFS",
            icon: "hadoop",
            tabs: [{label: "Files", sref: ".browse"}],
            template: {
                paths: ["hdfs://users/ruslans"]
            }
        },
    },
    {
        id: "d2c0dfda-4ebd-4ce1-9ff3-71153cdff734",
        title: "Spark logs",
        connector: {
            id: "5",
            title: "HDFS",
            icon: "hadoop",
            tabs: [{label: "Files", sref: ".browse"}],
            template: {
                paths: ["hdfs://users/spark/logs"]
            }
        },
    },
    {
        id: "599c4113-35c3-4289-9b82-e57f840668dd",
        title: "Teradata Database 1",
        connector: {
            id: "6",
            title: "Teradata",
            color: "orange-700",
            tabs: [{label: "Connection", sref: ".connection"}],
            template: {
                format: "jdbc",
                jars: ["file:/opt/nifi/mysql/tdgssconfig.jar;file:/opt/nifi/mysql/terajdbc4.jar"],
                options: {
                    "driver": "com.teradata.jdbc.TeraDriver",
                    "url": "jdbc:teradata://1.2.3.4/database1",
                    "user": "user-id",
                    "password": ""
                }
            }
        },
    },
    {
        id: "dd083ed4-0878-41d9-bf70-c4625d519cc8",
        title: "Teradata Database 2",
        connector: {
            id: "6",
            title: "Teradata",
            color: "orange-700",
            tabs: [{label: "Connection", sref: ".connection"}],
            template: {
                format: "jdbc",
                jars: ["file:/opt/nifi/mysql/tdgssconfig.jar;file:/opt/nifi/mysql/terajdbc4.jar"],
                options: {
                    "driver": "com.teradata.jdbc.TeraDriver",
                    "url": "jdbc:teradata://1.2.3.4/database2",
                    "user": "user-id",
                    "password": ""
                }
            }
        },
    },
    {
        id: "9e86c7ec-ead4-44d7-b262-d7976bfd2f19",
        title: "Greg's google storage",
        connector: {
            id: "7",
            title: "Google Cloud Storage",
            icon: "google",
            tabs: [{label: "Files", sref: ".browse"}],
            template: {
                jars: ["file:/opt/nifi/mysql/gcs-connector-latest-hadoop2.jar"],
                options: {
                    "spark.hadoop.google.cloud.auth.service.account.email": "drive@user-id.iam.gserviceaccount.com",
                    "spark.hadoop.google.cloud.auth.service.account.keyfile": "/opt/nifi/mysql/private-key.p12"
                },
                paths: ["gcs://some/path"]
            }
        },
    }
];

