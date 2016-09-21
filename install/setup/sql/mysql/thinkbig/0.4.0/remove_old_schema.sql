use thinkbig;

DROP TABLE CHANGE_SET_FILES_PATH;
DROP TABLE CHANGE_SET_HIVE_TABLE_PART_VALUE;
DROP TABLE CHANGE_SET_HIVE_TABLE;

DROP TABLE CHANGE_SET_FILES;
DROP TABLE DATA_OPERATION;
DROP TABLE CHANGE_SET;
DROP TABLE DATASET;


DROP TABLE FEED_DESTINATION;
DROP TABLE FEED_SOURCE;
DROP TABLE DATASOURCE;

DROP TABLE FEED_PROPERTIES;
DROP TABLE FM_TEMPLATE;
DROP TABLE CATEGORY;
DROP TABLE FM_FEED;

ALTER TABLE `thinkbig`.`FEED`
DROP FOREIGN KEY `FKi6tlfq6nytlrb8429acoovlay`;
ALTER TABLE `thinkbig`.`FEED`
DROP COLUMN `category_id`,
DROP COLUMN `version`,
DROP COLUMN `sla_id`,
DROP COLUMN `state`,
DROP COLUMN `initialized`,
DROP COLUMN `display_name`,
DROP INDEX `FKi6tlfq6nytlrb8429acoovlay` ,
DROP INDEX `UK_j4px0sd8c2k3ycpw6uvqpl1c6` ;

ALTER TABLE `thinkbig`.`FEED`
ADD COLUMN `feed_type` VARCHAR(45) NULL;


DROP TABLE FM_CATEGORY;
DROP TABLE SLA_METRIC;
DROP TABLE SLA_OBLIGATION_GROUP;
DROP TABLE SLA_OBLIGATION;
DROP TABLE SLA;
