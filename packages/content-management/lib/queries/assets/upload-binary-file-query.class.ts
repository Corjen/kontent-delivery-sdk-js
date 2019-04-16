import { Observable } from 'rxjs';

import { IContentManagementClientConfig } from '../../config';
import { AssetModels } from '../../models';
import { AssetResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class UploadBinaryFileQuery extends BaseQuery<AssetResponses.UploadBinaryFileResponse> {

  constructor(
    protected config: IContentManagementClientConfig,
    protected queryService: ContentManagementQueryService,
    public data: AssetModels.IUploadBinaryFileRequestData,
  ) {
    super(config, queryService);
  }

  toObservable(): Observable<AssetResponses.UploadBinaryFileResponse> {
    return this.queryService.uploadBinaryFile(this.getUrl(), this.data, this.queryConfig);
  }

  protected getAction(): string {
    return this.actions.contentItemActions.uploadBinaryFile(this.data.filename);
  }
}

