package com.thinkbiganalytics.metadata.jpa.jobrepo.nifi;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by sr186054 on 8/23/16.
 */
public interface NifiRelatedRootFlowFilesRepository extends JpaRepository<JpaNifiRelatedRootFlowFiles, JpaNifiRelatedRootFlowFiles.NifiRelatedFlowFilesPK> {


}
